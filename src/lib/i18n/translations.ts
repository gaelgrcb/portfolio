import type { ExperienceCommit, Profile, Project, SkillCategory } from "@/types/portfolio";

export type Language = "en" | "es";

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  modules: string[];
}

export interface Translations {
  profile: Profile;
  skills: SkillCategory[];
  projects: Project[];
  experience: ExperienceCommit[];
  education: EducationItem[];
  certifications: CertificationItem[];
  softSkills: string[];
  ui: {
    nav: {
      overview: string;
      stack: string;
      projects: string;
      log: string;
      contact: string;
    };
    hireBtn: string;
    skipToContent: string;
    hero: {
      statusLabel: string;
      locationLabel: string;
      uptimeLabel: string;
      headLabel: string;
      cleanTree: string;
      initCmd: string;
      githubBtn: string;
      linkedinBtn: string;
      cvBtn: string;
      contactBtn: string;
      badges: string[];
    };
    skillsSection: {
      kicker: string;
      title: string;
      description: string;
      softSkillsTitle: string;
      credentialsTitle: string;
    };
    projectsSection: {
      kicker: string;
      title: string;
      description: string;
      problemSolutionToggle: string;
      challengePrefix: string;
      solutionPrefix: string;
      sourceBtn: string;
      demoBtn: string;
    };
    experienceSection: {
      kicker: string;
      title: string;
      description: string;
    };
    contactSection: {
      kicker: string;
      title: string;
      description: string;
      responseWindow: string;
      timezone: string;
      copy: string;
      copied: string;
    };
    terminal: {
      prompt: string;
      bootHint: string;
      helpHeader: string;
      statusLabels: {
        user: string;
        role: string;
        status: string;
        location: string;
        uptime: string;
        kernel: string;
        head: string;
      };
    };
    footer: {
      builtWith: string;
    };
    langSwitcher: {
      label: string;
      en: string;
      es: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    profile: {
      name: "Gael García",
      handle: "Gael García",
      role: "Software Developer",
      roleSecondary: "Backend Specialist · APIs & Applied AI",
      tagline:
        "Software developer with 2+ years of experience, specialized in backend. Experienced in the financial and insurance sectors, building APIs, automating operational workflows, applying AI solutions, and securing sensitive data.",
      location: "Mazatlán, Sinaloa, Mexico",
      email: "gaelgarciabst@gmail.com",
      resumeUrl: "/cv/cv-gaelgarcia.pdf",
      system: {
        status: "available",
        statusText: "Available for new challenges",
        uptime: "2+ years exp.",
        location: "Mazatlán, Sinaloa, MX",
        kernel: "Linux · Java 21 · PHP · Python · Docker",
        currentCommit: "e4f8b1c",
      },
      socials: [
        {
          label: "GitHub",
          href: "https://github.com/gaelgrcb",
          handle: "github.com/gaelgrcb",
          icon: "github",
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/gaelgrcb",
          handle: "in/gaelgrcb",
          icon: "linkedin",
        },
        {
          label: "Email",
          href: "mailto:gaelgarciabst@gmail.com",
          handle: "gaelgarciabst@gmail.com",
          icon: "mail",
        },
        {
          label: "Phone",
          href: "tel:+526692239400",
          handle: "(+52) 669 223 9400",
          icon: "phone",
        },
      ],
      seedCommands: ["whoami", "stack --top", "projects"],
    },
    skills: [
      {
        id: "languages-frameworks",
        title: "Languages & Frameworks",
        description:
          "Scalable services, concurrent stream processing, and modern applications with strict typing.",
        skills: [
          { name: "Java · Spring Boot & Batch", level: "production", highlight: true, tags: ["Java 21", "batch processing", "pool tuning"] },
          { name: "PHP · Laravel & MVC", level: "production", highlight: true, tags: ["APIs", "webhooks", "internal platforms"] },
          { name: "TypeScript", level: "production", highlight: true, tags: ["Angular", "React Native", "Next.js"] },
          { name: "Python", level: "advanced", tags: ["FastAPI", "Ollama AI", "PyAutoGUI", "RAG"] },
        ],
        architectureHighlights: [
          "High-throughput batch processing (+2.5M lines in 20 min vs 5 days)",
          "Applied AI pipelines: local LLM OCR with Ollama & policy RAG engines",
          "Domain-driven clean architectures adhering strictly to SOLID principles",
        ],
      },
      {
        id: "databases-infra",
        title: "Databases & Infrastructure",
        description:
          "Relational data modeling, transactional ACID integrity, and automated cloud workflows.",
      skills: [
        { name: "PostgreSQL & MySQL & SQL Server", level: "production", highlight: true, tags: ["ACID", "query tuning", "Hikari pool"] },
        { name: "Docker & Containers", level: "production", highlight: true, tags: ["compose", "isolation", "environments"] },
        { name: "Git & GitHub Actions", level: "production", tags: ["CI/CD", "automated pipelines", "branching"] },
        { name: "Linux & Shell", level: "production", tags: ["servers", "bash scripting", "automation"] },
      ],
      architectureHighlights: [
        "Automated banking ingestion workflows (BBVA) with balance reconciliation",
        "Connection pool governance preventing thread starvation under peak loads",
        "Automated CI/CD pipelines via GitHub Actions for testing and deploy cycles",
      ],
    },
    {
      id: "architecture-security",
      title: "Architecture, Security & Networks",
      description:
        "Enterprise software patterns, sensitive financial data protection, and solid networking fundamentals.",
      skills: [
        { name: "REST APIs & Webhooks", level: "production", highlight: true, tags: ["integrations", "real-time", "asynchronous"] },
        { name: "Security: RBAC, JWT, AES, TLS", level: "production", highlight: true, tags: ["sensitive data", "encryption", "auth"] },
        { name: "SOLID & Design Patterns", level: "production", tags: ["clean code", "creational patterns", "maintainability"] },
        { name: "Cisco CCNA (Networking)", level: "production", highlight: true, tags: ["Network Security", "Enterprise", "Routing"] },
      ],
      architectureHighlights: [
        "Immutable snapshot mechanism ensuring transactional audit trails",
        "Sensitive financial information protection and encryption in transit & rest",
        "Cisco CCNA: Network Security, Routing, Switching, and Enterprise Networks",
      ],
    },
  ],
  education: [
    {
      institution: "Universidad Politécnica de Sinaloa",
      degree: "B.S. in Information Technology Engineering",
      period: "2021 — 2024",
      location: "Mazatlán, Sinaloa, Mexico",
    },
  ],
  certifications: [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      modules: [
        "Network Security",
        "Enterprise Networking, Security, and Automation",
        "Switching, Routing, and Wireless Essentials",
      ],
    },
  ],
  softSkills: [
    "Stakeholder communication & cross-functional business collaboration",
    "Full lifecycle autonomy & end-to-end product delivery",
    "Creative problem solving under tight technical constraints",
    "High adaptability across tech stacks and business domains",
  ],
  projects: [
    {
      id: "java-spring-batch",
      title: "Java Batch Modernization Engine",
      slug: "java-spring-batch",
      tagline: "Legacy Java 5 to Java 21 migration processing +2.5M records in 20 minutes.",
      archType: "Batch Processing · Spring Boot & Spring Batch",
      description:
        "High-throughput batch processing platform for the insurance sector that modernized a mission-critical legacy core.",
      challenge:
        "A legacy Java 5 service required over 5 days to process files containing +2.5M records, suffering from memory bottlenecks, lack of rollback mechanisms, and database pool starvation.",
      solution:
        "Full migration to Java 21 integrating Spring Boot and Spring Batch. Engineered chunk-oriented processing with concurrent validations, fail-safe rollbacks, and strict HikariCP connection pool governance.",
      techStack: ["Java 21", "Spring Boot", "Spring Batch", "PostgreSQL", "HikariCP"],
      metrics: [
        {
          label: "Execution time",
          value: "20 min",
          detail: "down from 5 days (-99.7%)",
        },
        {
          label: "Data volume",
          value: "+2.5M",
          detail: "lines processed per run",
        },
        {
          label: "Data integrity",
          value: "100%",
          detail: "safe chunked transactional rollbacks",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb",
      featured: true,
    },
    {
      id: "metlife-quote-ai",
      title: "Insurance AI Quotation Assistant",
      slug: "metlife-quote-ai",
      tagline: "Smart quote issuance in ~5s using local Ollama OCR, policy RAG, and GUI automation.",
      archType: "Applied AI & Automation · FastAPI + React Native",
      description:
        "Automated quotation assistant for MetLife combining local open-source AI models to dramatically accelerate agent workflows.",
      challenge:
        "Manual capture of government ID credentials (INE) and coverage lookups took several minutes per prospect, leading to clerical errors and sales drop-offs.",
      solution:
        "Built an end-to-end pipeline: automated INE OCR via local Ollama inference, RAG knowledge engine over policy conditions, GUI automation daemon (PyAutoGUI + FastAPI), and a cross-platform React Native mobile interface.",
      techStack: ["Python", "FastAPI", "Ollama (AI)", "RAG", "React Native", "PyAutoGUI"],
      metrics: [
        {
          label: "Quote latency",
          value: "~5 s",
          detail: "average time per quotation",
        },
        {
          label: "OCR accuracy",
          value: "> 98%",
          detail: "precision on key INE fields",
        },
        {
          label: "Automation",
          value: "100%",
          detail: "end-to-end assisted workflow",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb",
      featured: true,
    },
    {
      id: "sofom-banking-reconcile",
      title: "Banking Reconciliation & Credit Core",
      slug: "sofom-banking-reconcile",
      tagline: "Automated BBVA banking reconciliation, financial traceability, and immutable credit snapshots.",
      archType: "Financial Core & Conciliation · PHP & Angular",
      description:
        "Core modules for ATP SOFOM focused on credit portfolio health, automated bank reconciliation, and regulatory audit readiness.",
      challenge:
        "Manual parsing and matching of BBVA bank statement files to individual loan accounts caused accounting lag and carried risks of altering general catalog records during loan application changes.",
      solution:
        "Engineered automated ingestion and reconciliation of BBVA banking statements, posting credits with full transactional traceability. Implemented an immutable customer data snapshot mechanism for loan applications with granular change auditing.",
      techStack: ["PHP", "Angular", "MySQL", "SQL Server", "BBVA API", "Audit Log"],
      metrics: [
        {
          label: "Reconciliation",
          value: "100%",
          detail: "automated BBVA file ingestion",
        },
        {
          label: "Traceability",
          value: "Total",
          detail: "per-movement audit logging",
        },
        {
          label: "Data safety",
          value: "Protected",
          detail: "isolated immutable snapshot records",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb",
      featured: true,
    },
    {
      id: "logstream",
      title: "LogStream",
      slug: "logstream",
      tagline: "High-performance distributed messaging broker over raw TCP sockets with WAL persistence.",
      archType: "Distributed Systems · Pure Go · Zero-deps",
      description:
        "Concurrent distributed message broker built from scratch in Go, featuring a custom binary wire protocol and persistent Write-Ahead Log.",
      challenge:
        "Traditional message queues carry heavy memory footprints and complex dependencies when sub-millisecond, predictable IPC fan-out is required between backend services.",
      solution:
        "Engineered a zero-copy architecture in Go utilizing raw TCP sockets, custom binary protocol framing, bounded memory buffers, and persistent WAL disk writes before ACKs.",
      techStack: ["Go", "Raw TCP", "WAL Storage", "Concurrency", "Zero-Copy"],
      metrics: [
        {
          label: "Pub → Ack latency",
          value: "< 4 ms",
          detail: "including NVMe disk fsync",
        },
        {
          label: "Data loss",
          value: "0%",
          detail: "deterministic crash recovery",
        },
        {
          label: "Static binary",
          value: "Lightweight",
          detail: "zero third-party dependencies",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb/LogStream",
      featured: false,
    },
  ],
  experience: [
    {
      commitHash: "e4f8b1c",
      branch: "main",
      date: "2026-05",
      period: "May 2026 — Present",
      role: "Software Developer",
      company: "ATP SOFOM",
      location: "Mazatlán, Sinaloa",
      impactSummaries: [
        "Developed portfolio containment bonus modules on the core internal system using PHP and Angular, directly improving credit portfolio health while aligning technical specifications with business leadership.",
        "Automated the ingestion, reconciliation, and ledger posting of banking income from BBVA files, associating customer deposits with loans and applying balance credits with complete audit traceability.",
        "Engineered an immutable snapshot mechanism for customer data upon loan application registration, allowing queries, modifications, and official document generation without affecting the master catalog, backed by movement-level audit logs.",
      ],
      technologies: ["PHP", "Angular", "MySQL", "SQL Server", "BBVA Banking", "Snapshots", "Audit Logs"],
    },
    {
      commitHash: "d2a7c9f",
      branch: "main",
      date: "2025-01",
      period: "Jan 2025 — May 2026",
      role: "Software Developer",
      company: "Besson Seguros",
      location: "Guadalajara, Jalisco",
      impactSummaries: [
        "Migrated a core mission-critical legacy system from Java 5 to Java 21, integrating Spring Boot and Spring Batch to process +2.5M line files, reducing runtimes from 5 days to 20 minutes via batch processing, chunked validations, and connection pool tuning.",
        "Designed and implemented an AI insurance quotation chatbot for MetLife: local INE ID OCR powered by Ollama, coverage RAG engine for client queries, GUI automation daemon (PyAutoGUI + FastAPI), and React Native mobile UI (~5s turnaround).",
        "Built an automated notification platform with Laravel and Webhooks, replacing manual operational communications with automated WhatsApp alerts for claims, policy updates, and payment reminders.",
        "Engineered an internal Laravel platform for automated calculation of bonuses and commissions, driving a 32.3% boost in sales and debt collection productivity.",
      ],
      technologies: ["Java 21", "Spring Boot", "Spring Batch", "Python", "FastAPI", "Ollama (RAG/OCR)", "React Native", "Laravel", "Webhooks", "PostgreSQL"],
    },
    {
      commitHash: "a1c3e7b",
      branch: "main",
      date: "2024-05",
      period: "May 2024 — Dec 2024",
      role: "Web Developer",
      company: "Toolsnet",
      location: "Zapopan, Jalisco",
      impactSummaries: [
        "Developed custom PHP solutions for SMBs (e-commerce platforms, high-converting landing pages, and internal management tools), managing every stage from requirements gathering to production release.",
        "Managed the full client lifecycle through discovery sessions, interactive MVP demos, agile iterations, and staged production rollouts.",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git", "Agile Lifecycle"],
    },
    {
      commitHash: "upsin21",
      branch: "education",
      date: "2021-09",
      period: "2021 — 2024",
      role: "B.S. in Information Technology Engineering",
      company: "Universidad Politécnica de Sinaloa",
      location: "Mazatlán, Sinaloa",
      impactSummaries: [
        "Earned Engineering Degree in Information Technology, focusing on software architecture, relational databases, distributed systems, and object-oriented design.",
        "Attained Cisco Certified Network Associate (CCNA) certification: Network Security, Enterprise Networking, Security and Automation, and Switching/Routing Essentials.",
      ],
      technologies: ["Software Engineering", "Relational Databases", "CCNA Security", "Enterprise Networking", "System Architecture"],
    },
  ],
  ui: {
    nav: {
      overview: "overview",
      stack: "stack",
      projects: "projects",
      log: "experience",
      contact: "contact",
    },
    hireBtn: "./contact",
    skipToContent: "Skip to content",
    hero: {
      statusLabel: "Status",
      locationLabel: "Location",
      uptimeLabel: "uptime",
      headLabel: "HEAD",
      cleanTree: "(clean)",
      initCmd: "init --portfolio --profile",
      githubBtn: "github",
      linkedinBtn: "linkedin",
      cvBtn: "cv.pdf",
      contactBtn: "./contact",
      badges: [
        "backend & apis",
        "fintech & insurance",
        "applied ai (rag / ocr)",
        "ccna certified",
      ],
    },
    skillsSection: {
      kicker: "02 // ARCHITECTURE & STACK",
      title: "Technical Skills & Competencies",
      description:
        "Core technical capabilities grounded in production deliveries across finance, insurance, and distributed backends.",
      softSkillsTitle: "Soft Skills & Methodology",
      credentialsTitle: "Education & Certifications",
    },
    projectsSection: {
      kicker: "03 // ENGINEERING SHOWCASE",
      title: "Featured Projects & Implementations",
      description:
        "Real-world systems, performance benchmarks, and automated solutions solving concrete business challenges.",
      problemSolutionToggle: "challenge → solution",
      challengePrefix: "CHALLENGE",
      solutionPrefix: "SOLUTION",
      sourceBtn: "source",
      demoBtn: "demo",
    },
    experienceSection: {
      kicker: "04 // WORK HISTORY",
      title: "Professional Experience",
      description:
        "Linear timeline of roles, engineering contributions, and quantifiable business outcomes.",
    },
    contactSection: {
      kicker: "05 // OUTBOX",
      title: "Direct Channels & Contact",
      description:
        "Reach out via email, phone/WhatsApp, LinkedIn, or send an interactive terminal message. Active response within 24h.",
      responseWindow: "response window: < 24h",
      timezone: "timezone: UTC-6 (Mazatlán)",
      copy: "Copy",
      copied: "Copied",
    },
    terminal: {
      prompt: "~/portfolio",
      bootHint: "type  help  to explore, or  send --to Gael García --message \"...\" to reach out.",
      helpHeader: "Available commands:",
      statusLabels: {
        user: "user",
        role: "role",
        status: "status",
        location: "location",
        uptime: "uptime",
        kernel: "kernel",
        head: "head",
      },
    },
    footer: {
      builtWith: "EOF — Gael García · Desarrollador de Software",
    },
    langSwitcher: {
      label: "Language",
      en: "English",
      es: "Español",
    },
  },
},
es: {
  profile: {
    name: "Gael García",
    handle: "Gael García",
    role: "Desarrollador de Software",
    roleSecondary: "Especialista Backend · APIs e IA Aplicada",
    tagline:
      "Desarrollador de software con 2+ años de experiencia, con fuerte en backend. He trabajado en el sector financiero y asegurador, construyendo APIs, automatizando flujos operativos, con experiencia implementando soluciones de IA aplicada y asegurando la integridad de datos sensibles.",
    location: "Mazatlán, Sinaloa, México",
    email: "gaelgarciabst@gmail.com",
    resumeUrl: "/cv/cv-gaelgarcia.pdf",
    system: {
      status: "available",
      statusText: "Disponible para nuevos retos",
      uptime: "2+ años de exp.",
      location: "Mazatlán, Sinaloa, MX",
      kernel: "Linux · Java 21 · PHP · Python · Docker",
      currentCommit: "e4f8b1c",
    },
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/gaelgrcb",
        handle: "github.com/gaelgrcb",
        icon: "github",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/gaelgrcb",
        handle: "in/gaelgrcb",
        icon: "linkedin",
      },
      {
        label: "Email",
        href: "mailto:gaelgarciabst@gmail.com",
        handle: "gaelgarciabst@gmail.com",
        icon: "mail",
      },
      {
        label: "Teléfono",
        href: "tel:+526692239400",
        handle: "(+52) 669 223 9400",
        icon: "phone",
      },
    ],
    seedCommands: ["whoami", "stack --top", "projects"],
  },
  skills: [
    {
      id: "languages-frameworks",
      title: "Lenguajes y Frameworks",
      description:
        "Desarrollo de servicios escalables, procesamiento concurrente y aplicaciones modernas con tipado estricto.",
      skills: [
        { name: "Java · Spring Boot & Batch", level: "production", highlight: true, tags: ["Java 21", "batch processing", "pool tuning"] },
        { name: "PHP · Laravel & MVC", level: "production", highlight: true, tags: ["APIs", "webhooks", "sistemas internos"] },
        { name: "TypeScript", level: "production", highlight: true, tags: ["Angular", "React Native", "Next.js"] },
        { name: "Python", level: "advanced", tags: ["FastAPI", "Ollama AI", "PyAutoGUI", "RAG"] },
      ],
      architectureHighlights: [
        "Batch processing de alto volumen (+2.5M de registros en 20 minutos)",
        "Soluciones de IA aplicada: OCR para documentos y RAG contextual",
        "Arquitecturas limpias y mantenibles orientadas al dominio de negocio",
      ],
    },
    {
      id: "databases-infra",
      title: "Bases de Datos e Infraestructura",
      description:
        "Diseño de modelos relacionales, integridad transaccional y automatización de despliegues.",
      skills: [
        { name: "PostgreSQL & MySQL & SQL Server", level: "production", highlight: true, tags: ["ACID", "optimización", "pool Hikari"] },
        { name: "Docker & Contenedores", level: "production", highlight: true, tags: ["compose", "aislamiento", "entornos"] },
        { name: "Git & GitHub Actions", level: "production", tags: ["CI/CD", "automatización", "branching"] },
        { name: "Linux & Shell", level: "production", tags: ["servidores", "bash", "automatización"] },
      ],
      architectureHighlights: [
        "Automatización e ingesta de flujos bancarios (BBVA) con conciliación",
        "Control de pool de conexiones para evitar cuellos de botella",
        "Pipelines CI/CD con GitHub Actions para integración y entrega continua",
      ],
    },
    {
      id: "architecture-security",
      title: "Arquitectura, Seguridad y Redes",
      description:
        "Patrones de diseño de software, seguridad de datos sensibles y fundamentos sólidos de networking.",
      skills: [
        { name: "REST APIs & Webhooks", level: "production", highlight: true, tags: ["integraciones", "tiempo real", "asíncrono"] },
        { name: "Seguridad: RBAC, JWT, AES, TLS", level: "production", highlight: true, tags: ["datos sensibles", "cifrado", "tokens"] },
        { name: "SOLID & Design Patterns", level: "production", tags: ["clean code", "patrones creacionales", "mantenibilidad"] },
        { name: "Cisco CCNA (Networking)", level: "production", highlight: true, tags: ["Network Security", "Enterprise", "Routing"] },
      ],
      architectureHighlights: [
        "Mecanismo de snapshots inmutables con trazabilidad y auditoría",
        "Garantía de integridad y protección de datos financieros sensibles",
        "Certificación CCNA: Network Security, Routing, Switching & Enterprise",
      ],
    },
  ],
  education: [
    {
      institution: "Universidad Politécnica de Sinaloa",
      degree: "Ingeniería en Tecnologías de la Información",
      period: "2021 — 2024",
      location: "Mazatlán, Sinaloa, México",
    },
  ],
  certifications: [
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      modules: [
        "Network Security",
        "Enterprise Networking, Security, and Automation",
        "Switching, Routing, and Wireless Essentials",
      ],
    },
  ],
  softSkills: [
    "Comunicación asertiva con stakeholders y áreas de negocio",
    "Autonomía y gestión del ciclo completo de proyectos",
    "Resolución creativa de problemas técnicos y de rendimiento",
    "Adaptabilidad ágil a nuevos entornos, lenguajes y metodologías",
  ],
  projects: [
    {
      id: "java-spring-batch",
      title: "Java Batch Modernization Engine",
      slug: "java-spring-batch",
      tagline: "Migración de Java 5 a 21 y procesamiento por lotes de +2.5M de líneas en 20 minutos.",
      archType: "Batch Processing · Spring Boot & Spring Batch",
      description:
        "Plataforma de procesamiento batch masivo para el sector asegurador que modernizó un sistema legacy crítico.",
      challenge:
        "El sistema legacy en Java 5 tardaba más de 5 días en procesar archivos de +2.5M de registros, con bloqueos frecuentes de memoria, falta de transaccionalidad y saturación de base de datos.",
      solution:
        "Migración completa a Java 21 integrando Spring Boot y Spring Batch. Se diseñó una estrategia de procesamiento por chunks con validaciones concurrentes, rollback granular y optimización estricta del pool de conexiones HikariCP.",
      techStack: ["Java 21", "Spring Boot", "Spring Batch", "PostgreSQL", "HikariCP"],
      metrics: [
        {
          label: "Tiempo de proceso",
          value: "20 min",
          detail: "reducido de 5 días (-99.7%)",
        },
        {
          label: "Volumen de datos",
          value: "+2.5M",
          detail: "líneas procesadas por ejecución",
        },
        {
          label: "Integridad",
          value: "100%",
          detail: "transacciones con rollback seguro",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb",
      featured: true,
    },
    {
      id: "metlife-quote-ai",
      title: "Insurance AI Quotation Assistant",
      slug: "metlife-quote-ai",
      tagline: "Cotizaciones inteligentes en ~5s mediante OCR con Ollama, RAG sobre pólizas y automatización GUI.",
      archType: "Applied AI & Automation · FastAPI + React Native",
      description:
        "Asistente automatizado de cotizaciones para MetLife que integra modelos locales de IA para acelerar la atención a clientes.",
      challenge:
        "La captura manual de credenciales de elector y el cálculo de coberturas consumía minutos valiosos a los agentes, con riesgo de errores tipográficos y demoras en atención comercial.",
      solution:
        "Diseño de un flujo inteligente: OCR local para credenciales INE con Ollama, arquitectura RAG sobre condiciones generales para consulta de dudas, motor de automatización GUI (PyAutoGUI + FastAPI) y frontend en React Native.",
      techStack: ["Python", "FastAPI", "Ollama (AI)", "RAG", "React Native", "PyAutoGUI"],
      metrics: [
        {
          label: "Tiempo cotización",
          value: "~5 s",
          detail: "tiempo promedio por cotización",
        },
        {
          label: "Extracción OCR",
          value: "> 98%",
          detail: "precisión en datos clave de INE",
        },
        {
          label: "Automatización",
          value: "100%",
          detail: "flujo asistido de extremo a extremo",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb",
      featured: true,
    },
    {
      id: "sofom-banking-reconcile",
      title: "Banking Reconciliation & Credit Core",
      slug: "sofom-banking-reconcile",
      tagline: "Automatización de ingresos bancarios BBVA, trazabilidad contable y snapshots inmutables para créditos.",
      archType: "Financial Core & Conciliation · PHP & Angular",
      description:
        "Módulos core para ATP SOFOM enfocados en la salud de cartera crediticia, conciliación bancaria y auditoría regulatoria.",
      challenge:
        "La carga y asociación de depósitos desde archivos BBVA a préstamos individuales requería intervención manual propensa a desfases contables, sumado a la necesidad de consultar datos históricos sin alterar el catálogo general.",
      solution:
        "Automatización completa de lectura, identificación y aplicación de ingresos BBVA con trazabilidad de conciliación. Se implementó un motor de snapshots inmutables para solicitudes de préstamo con bitácora de auditoría detallada.",
      techStack: ["PHP", "Angular", "MySQL", "SQL Server", "BBVA API", "Auditoría"],
      metrics: [
        {
          label: "Conciliación",
          value: "100%",
          detail: "automatizada desde archivos BBVA",
        },
        {
          label: "Trazabilidad",
          value: "Total",
          detail: "auditoría en cada movimiento",
        },
        {
          label: "Catálogo general",
          value: "Protegido",
          detail: "snapshots aislados por solicitud",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb",
      featured: true,
    },
    {
      id: "logstream",
      title: "LogStream",
      slug: "logstream",
      tagline: "Broker de mensajería distribuido y concurrente de alto rendimiento sobre sockets TCP puros.",
      archType: "Distributed Systems · Pure Go · Zero-deps",
      description:
        "Broker de mensajería con protocolo binario personalizado y motor de almacenamiento Write-Ahead Log (WAL) para publicación/suscripción en sub-milisegundos.",
      challenge:
        "Los brokers de mensajería tradicionales introducen alta sobrecarga de recursos y dependencias complejas cuando se requieren comunicaciones de ultrabaja latencia entre nodos de backend.",
      solution:
        "Implementación de arquitectura orientada a cero-copias en Go con sockets TCP crudos, serialización binaria propietaria y persistencia garantizada en disco mediante WAL antes de responder ACK al emisor.",
      techStack: ["Go", "Sockets TCP", "WAL Storage", "Concurrencia", "Zero-Copy"],
      metrics: [
        {
          label: "Latencia Pub → Ack",
          value: "< 4 ms",
          detail: "escritura y fsync en almacenamiento",
        },
        {
          label: "Pérdida de datos",
          value: "0%",
          detail: "recuperación limpia post-caída",
        },
        {
          label: "Binario estático",
          value: "Ligero",
          detail: "sin dependencias de terceros",
        },
      ],
      githubUrl: "https://github.com/gaelgrcb/LogStream",
      featured: false,
    },
  ],
  experience: [
    {
      commitHash: "e4f8b1c",
      branch: "main",
      date: "2026-05",
      period: "Mayo 2026 — Presente",
      role: "Desarrollador de Software",
      company: "ATP SOFOM",
      location: "Mazatlán, Sinaloa",
      impactSummaries: [
        "Desarrollé módulos de bonos por contención de cartera sobre el sistema interno principal en PHP y Angular, mejorando la salud de la cartera de crédito y participando en la definición de requerimientos con el área de negocio.",
        "Automaticé el proceso de carga, identificación y aplicación de ingresos bancarios desde archivos de BBVA, asociando depósitos a préstamos y aplicando abonos con trazabilidad completa de la conciliación.",
        "Implementé un mecanismo de snapshot de datos del cliente al registrar solicitudes de préstamo, permitiendo consulta, modificación y generación de formatos sin afectar el catálogo general, con auditoría de cambios en cada movimiento.",
      ],
      technologies: ["PHP", "Angular", "MySQL", "SQL Server", "Conciliación BBVA", "Snapshots", "Auditoría"],
    },
    {
      commitHash: "d2a7c9f",
      branch: "main",
      date: "2025-01",
      period: "Enero 2025 — Mayo 2026",
      role: "Desarrollador de Software",
      company: "Besson Seguros",
      location: "Guadalajara, Jalisco",
      impactSummaries: [
        "Migré completamente un sistema legacy de Java 5 a Java 21, integrando Spring Boot y Spring Batch para procesar archivos de +2.5M de líneas, reduciendo el tiempo de ejecución de 5 días a 20 minutos mediante batch processing, validaciones y control de pool de conexiones.",
        "Diseñé e implementé un chatbot de cotizaciones para MetLife: OCR de INE con Ollama, RAG sobre coberturas para resolución de dudas, motor de automatización GUI (PyAutoGUI + FastAPI) y frontend en React Native, logrando cotizaciones en ~5s.",
        "Diseñé un sistema de notificaciones automatizadas con Laravel y Webhooks, reemplazando flujos manuales por alertas de WhatsApp para siniestros y pagos.",
        "Desarrollé una plataforma interna (Laravel) para el cálculo automatizado de bonos y comisiones, impulsando un incremento del 32.3% en rendimiento de ventas y cobranza.",
      ],
      technologies: ["Java 21", "Spring Boot", "Spring Batch", "Python", "FastAPI", "Ollama (RAG/OCR)", "React Native", "Laravel", "Webhooks", "PostgreSQL"],
    },
    {
      commitHash: "a1c3e7b",
      branch: "main",
      date: "2024-05",
      period: "Mayo 2024 — Diciembre 2024",
      role: "Desarrollador Web",
      company: "Toolsnet",
      location: "Zapopan, Jalisco",
      impactSummaries: [
        "Desarrollé soluciones a medida en PHP para PyMEs (tiendas en línea, landing pages y sistemas internos), cubriendo desde la toma de requerimientos hasta la puesta en producción.",
        "Gestioné el ciclo completo con clientes mediante reuniones de descubrimiento, presentación de MVPs, iteraciones y entregas progresivas.",
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git", "Ciclo Completo"],
    },
    {
      commitHash: "upsin21",
      branch: "education",
      date: "2021-09",
      period: "2021 — 2024",
      role: "Ingeniería en Tecnologías de la Información",
      company: "Universidad Politécnica de Sinaloa",
      location: "Mazatlán, Sinaloa",
      impactSummaries: [
        "Graduado de Ingeniería en Tecnologías de la Información con especialización en desarrollo de software, bases de datos relacionales y arquitectura de sistemas.",
        "Certificación Cisco Certified Network Associate (CCNA): Network Security, Enterprise Networking, Security and Automation, Switching, Routing and Wireless Essentials.",
      ],
      technologies: ["Ingeniería TI", "Bases de Datos", "CCNA Security", "Enterprise Networking", "Arquitectura de Software"],
    },
  ],
  ui: {
    nav: {
      overview: "inicio",
      stack: "habilidades",
      projects: "proyectos",
      log: "experiencia",
      contact: "contacto",
    },
    hireBtn: "./contacto",
    skipToContent: "Saltar al contenido",
    hero: {
      statusLabel: "Estado",
      locationLabel: "Ubicación",
      uptimeLabel: "experiencia",
      headLabel: "HEAD",
      cleanTree: "(limpio)",
      initCmd: "init --portfolio --profile",
      githubBtn: "github",
      linkedinBtn: "linkedin",
      cvBtn: "cv.pdf",
      contactBtn: "./contacto",
      badges: [
        "backend & apis",
        "sector financiero y seguros",
        "ia aplicada (rag y ocr)",
        "certificación ccna",
      ],
    },
    skillsSection: {
      kicker: "02 // ARQUITECTURA Y STACK",
      title: "Habilidades Técnicas y Competencias",
      description:
        "Capacidades probadas en producción en los sectores financiero y asegurador, con fuerte enfoque en backend y automatización.",
      softSkillsTitle: "Habilidades Blandas y Metodología",
      credentialsTitle: "Educación y Certificaciones",
    },
    projectsSection: {
      kicker: "03 // PROYECTOS DESTACADOS",
      title: "Implementaciones y Proyectos",
      description:
        "Soluciones reales, retos de modernización de arquitecturas legacy y métricas comprobables de impacto.",
      problemSolutionToggle: "desafío → solución",
      challengePrefix: "DESAFÍO",
      solutionPrefix: "SOLUCIÓN",
      sourceBtn: "código",
      demoBtn: "demo",
    },
    experienceSection: {
      kicker: "04 // TRAYECTORIA LABORAL",
      title: "Experiencia Profesional",
      description:
        "Historial cronológico de roles, desarrollos de software de alto impacto y resultados de negocio.",
    },
    contactSection: {
      kicker: "05 // BANDEJA DE SALIDA",
      title: "Canales Directos de Contacto",
      description:
        "Contáctame por correo electrónico, teléfono/WhatsApp, LinkedIn o a través de la consola interactiva. Respuesta garantizada en menos de 24h.",
      responseWindow: "tiempo de respuesta: < 24h",
      timezone: "zona horaria: UTC-6 (Mazatlán)",
      copy: "Copiar",
      copied: "Copiado",
    },
    terminal: {
      prompt: "~/portfolio",
      bootHint: "escribe  help  para explorar, o  send --to Gael García --message \"...\" para contactar.",
      helpHeader: "Comandos disponibles:",
      statusLabels: {
        user: "usuario",
        role: "rol",
        status: "estado",
        location: "ubicación",
        uptime: "tiempo_activo",
        kernel: "kernel",
        head: "head",
      },
    },
    footer: {
      builtWith: "EOF — Gael García · Desarrollador de Software",
    },
    langSwitcher: {
      label: "Idioma",
      en: "Inglés",
      es: "Español",
    },
  },
},
};
