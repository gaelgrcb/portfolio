import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
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
];
