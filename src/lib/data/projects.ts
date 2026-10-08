import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
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
];
