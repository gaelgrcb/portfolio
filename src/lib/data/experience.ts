import type { ExperienceCommit } from "@/types/portfolio";

export const experience: ExperienceCommit[] = [
  {
    commitHash: "e4f8b1c",
    branch: "main",
    date: "2026-05",
    period: "Mayo 2026 — Presente",
    role: "Desarrollador de Software",
    company: "ATP SOFOM",
    location: "Mazatlán, Sinaloa",
    impactSummaries: [
      "Desarrollé módulos de bonos por contención de cartera sobre el sistema interno principal en PHP y Angular, mejorando la salud de la cartera de crédito y participando en la definición de requerimientos con negocio.",
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
      "Migré completamente un sistema legacy de Java 5 a Java 21, integrando Spring Boot y Spring Batch para procesar archivos de +2.5M de líneas, reduciendo el tiempo de ejecución de 5 días a 20 minutos mediante batch processing y control de pool de conexiones.",
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
      "Graduado de Ingeniería en Tecnologías de la Información con especialización en desarrollo de software, bases de datos y arquitectura de sistemas.",
      "Certificación Cisco Certified Network Associate (CCNA): Network Security, Enterprise Networking, Security and Automation, Switching, Routing and Wireless Essentials.",
    ],
    technologies: ["Ingeniería TI", "Bases de Datos", "CCNA Security", "Enterprise Networking", "Arquitectura de Software"],
  },
];
