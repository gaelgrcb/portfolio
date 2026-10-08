import { translations, type Language } from "@/lib/i18n/translations";

/**
 * The terminal engine is intentionally pure: it takes a raw input line and
 * returns a batch of output lines. No DOM, no timers. The React component is
 * only responsible for rendering and typing simulation.
 */

export interface OutputLine {
  id: string;
  kind: "input" | "output" | "error" | "success" | "system" | "meta";
  text: string;
}

interface ParsedCommand {
  name: string;
  args: string[];
  flags: Record<string, string>;
}

let seq = 0;
function line(kind: OutputLine["kind"], text: string): OutputLine {
  seq += 1;
  return { id: `ln-${seq}`, kind, text };
}

function parse(input: string): ParsedCommand {
  const trimmed = input.trim();
  const tokens = trimmed.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g)?.map((t) =>
    t.replace(/^["']|["']$/g, ""),
  ) ?? [];

  const [name, ...rest] = tokens;
  const flags: Record<string, string> = {};
  const args: string[] = [];

  for (let i = 0; i < rest.length; i += 1) {
    const token = rest[i];
    if (token.startsWith("--")) {
      const key = token.slice(2);
      const next = rest[i + 1];
      // A flag takes a value if the next token is not itself a flag.
      if (next !== undefined && !next.startsWith("--")) {
        flags[key] = next;
        i += 1;
      } else {
        flags[key] = "";
      }
    } else {
      args.push(token);
    }
  }

  return { name: (name ?? "").toLowerCase(), args, flags };
}

function getHelp(lang: Language): string[] {
  if (lang === "es") {
    return [
      "Comandos disponibles:",
      "  whoami                           Identidad y estado en vivo",
      "  stack [--top n]                  Matriz técnica por dominio",
      "  projects [filtro]                Proyectos e implementaciones",
      "  log                              Historial profesional (estilo git-log)",
      "  contact                          Canales de contacto directo",
      "  send --to <h> --message \"...\"      Enviar un mensaje directo",
      "  copy <github|linkedin|email|phone> Copiar al portapapeles",
      "  clear                            Limpiar la consola",
      "  help                             Ver esta lista de ayuda",
    ];
  }
  return [
    "Available commands:",
    "  whoami                           Identity + status",
    "  stack [--top n]                  Tech matrix by domain",
    "  projects [query]                 Engineering showcase",
    "  log                              Career timeline (git-log style)",
    "  contact                          Direct channels",
    "  send --to <h> --message \"...\"      Send a direct message",
    "  copy <github|linkedin|email|phone> Copy to clipboard",
    "  clear                            Clear the console",
    "  help                             This list",
  ];
}

function cmdWhoami(lang: Language): OutputLine[] {
  const data = translations[lang].profile;
  const s = data.system;
  return [
    line("system", `user=${data.handle}  role=${data.role}`),
    line("output", `${data.role} · ${data.roleSecondary}`),
    line("meta", `status: ${s.statusText} · location: ${s.location}`),
    line("meta", `uptime: ${s.uptime} · kernel: ${s.kernel}`),
    line("meta", `head: ${s.currentCommit} (clean tree)`),
  ];
}

function cmdStack(args: string[], flags: Record<string, string>, lang: Language): OutputLine[] {
  const n = flags.top !== undefined ? Math.max(1, Number(flags.top) || 3) : undefined;
  void args;
  const out: OutputLine[] = [];
  const categories = translations[lang].skills;

  for (const cat of categories) {
    out.push(line("system", `▸ ${cat.title}`));
    const pick = n !== undefined ? cat.skills.slice(0, n) : cat.skills;
    for (const skill of pick) {
      const tags = skill.tags ? `  ${skill.tags.join(" · ")}` : "";
      out.push(line("output", `  • ${skill.name.padEnd(28)}${tags}`));
    }
  }
  return out;
}

function cmdProjects(args: string[], lang: Language): OutputLine[] {
  const query = (args[0] ?? "").toLowerCase();
  const listData = translations[lang].projects;
  const list = query
    ? listData.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.techStack.some((t) => t.toLowerCase().includes(query)),
    )
    : listData;

  if (list.length === 0) {
    return [
      line(
        "error",
        lang === "es"
          ? `ningún proyecto coincide con "${args[0]}"`
          : `no project matches "${args[0]}"`,
      ),
    ];
  }

  return list.flatMap((p) => [
    line("system", `▸ ${p.title}  ·  ${p.archType}`),
    line("output", `  ${p.tagline}`),
    line("meta", `  stack: ${p.techStack.join(" · ")}`),
    ...(p.githubUrl ? [line("meta", `  repo:  ${p.githubUrl}`)] : []),
  ]);
}

function cmdLog(lang: Language): OutputLine[] {
  const exp = translations[lang].experience;
  return exp.flatMap((e) => [
    line("system", `commit ${e.commitHash}  [${e.branch}]  ${e.date}`),
    line("output", `${e.role} @ ${e.company}  (${e.period})`),
    ...e.impactSummaries.slice(0, 2).map((i) => line("meta", `  - ${i}`)),
  ]);
}

function cmdContact(lang: Language): OutputLine[] {
  const prof = translations[lang].profile;
  return [
    line("system", lang === "es" ? "canales directos:" : "direct channels:"),
    ...prof.socials.map((s) =>
      line("output", `  ${s.label.padEnd(10)} ${s.handle}`),
    ),
    line(
      "meta",
      lang === "es"
        ? `pista: ejecuta  send --to ${prof.handle} --message "hola"  para contactar`
        : `hint: run  send --to ${prof.handle} --message "hello"  to reach out`,
    ),
  ];
}

function cmdSend(flags: Record<string, string>, lang: Language): OutputLine[] {
  const prof = translations[lang].profile;
  const to = flags.to;
  const message = flags.message;

  if (!to) {
    return [
      line(
        "error",
        lang === "es"
          ? "send: falta el parámetro requerido --to"
          : "send: missing required flag --to",
      ),
    ];
  }
  if (!message || !message.trim()) {
    return [
      line(
        "error",
        lang === "es"
          ? 'send: falta el parámetro requerido --message "texto"'
          : 'send: missing required flag --message "text"',
      ),
    ];
  }

  const normalizedTo = to.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const validRecipients = [
    prof.handle.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
    "gael",
    "gael garcia",
    "gaelgrcb",
    "all",
  ];
  if (!validRecipients.includes(normalizedTo)) {
    return [
      line(
        "error",
        lang === "es"
          ? `send: destinatario desconocido "${to}"`
          : `send: unknown recipient "${to}"`,
      ),
      line("meta", `available: ${prof.handle}, all`),
    ];
  }

  const words = message.trim().split(/\s+/).length;
  return [
    line("success", `▸ ${lang === "es" ? "componiendo mensaje" : "composing message"} → ${normalizedTo === "all" ? "broadcast" : prof.handle}`),
    line("meta", `chars: ${message.trim().length} · words: ${words}`),
    line("success", lang === "es" ? `✓ encolado en bandeja  [entrega: inmediata]` : `✓ queued to outbox  [delivery: immediate]`),
    line(
      "meta",
      lang === "es"
        ? `siguiente: revisa ${prof.email} para respuesta — respondo activamente.`
        : `next: check ${prof.email} for a reply — I keep the outbox read.`,
    ),
  ];
}

function cmdCopy(flags: Record<string, string>, args: string[], lang: Language): OutputLine[] {
  const prof = translations[lang].profile;
  const target = (args[0] ?? flags.target ?? "").toLowerCase();
  const map: Record<string, string> = {
    github: "https://github.com/gaelgrcb",
    linkedin: "https://www.linkedin.com/in/gaelgrcb",
    email: prof.email,
    phone: "(+52) 669 223 9400",
  };
  const value = map[target];
  if (!value) {
    return [
      line("error", `copy: unknown target "${target || "?"}"`),
      line("meta", "available: github · linkedin · email · phone"),
    ];
  }
  return [
    line("success", lang === "es" ? `✓ ${target} copiado al portapapeles` : `✓ ${target} copied to clipboard`),
    line("meta", `  ${value}`),
  ];
}

export function runCommand(raw: string, lang: Language = "en"): OutputLine[] {
  const { name, args, flags } = parse(raw);
  if (name === "") return [];

  switch (name) {
    case "help":
    case "ayuda":
    case "?":
      return getHelp(lang).map((t) => line("output", t));
    case "whoami":
    case "quiensoy":
      return cmdWhoami(lang);
    case "stack":
    case "skills":
    case "habilidades":
      return cmdStack(args, flags, lang);
    case "projects":
    case "proyectos":
    case "ls":
      return cmdProjects(args, lang);
    case "log":
    case "historial":
    case "history":
      return cmdLog(lang);
    case "contact":
    case "contacto":
      return cmdContact(lang);
    case "send":
    case "enviar":
      return cmdSend(flags, lang);
    case "copy":
    case "copiar":
      return cmdCopy(flags, args, lang);
    case "clear":
    case "limpiar":
    case "cls":
      return [line("system", "__CLEAR__")];
    case "exit":
    case "salir":
    case "quit":
      return [
        line(
          "success",
          lang === "es"
            ? "sesión finalizada. gracias por la visita — contáctame en la bandeja de salida."
            : "session terminated. thanks for the visit — ping me on the outbox.",
        ),
      ];
    default:
      return [
        line("error", lang === "es" ? `comando no encontrado: ${name}` : `command not found: ${name}`),
        line("meta", lang === "es" ? "escribe  help  para ver comandos disponibles." : "type  help  to see available commands."),
      ];
  }
}

/** Lines that render on page load: clean, minimal, non-overwhelming. */
export function bootSequence(lang: Language = "en"): OutputLine[] {
  return [
    line(
      "system",
      lang === "es"
        ? "Gael García — Consola interactiva"
        : "Gael García — Interactive Console",
    ),
    line(
      "output",
      lang === "es"
        ? "Escribe  help  para ver los comandos disponibles."
        : "Type  help  to see available commands.",
    ),
  ];
}
