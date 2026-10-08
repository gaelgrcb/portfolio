// One-shot generator: writes a valid single-page PDF for Gael Garcia.
// Run with: node tools/make-cv-pdf.mjs
import { writeFileSync, mkdirSync } from "node:fs";

const lines = [
  "GAEL GARCIA",
  "Desarrollador de Software | Mazatlan, Sinaloa, Mexico | (+52) 669 223 9400",
  "Correo: gaelgarciabst@gmail.com | LinkedIn: linkedin.com/in/gaelgrcb | GitHub: github.com/gaelgrcb",
  "",
  "PERFIL PROFESIONAL",
  "Desarrollador de software con 2+ anos de experiencia, con fuerte en backend. He trabajado en el sector",
  "financiero y asegurador, construyendo APIs, automatizando flujos operativos, con experiencia implementando",
  "soluciones de IA aplicada y asegurando la integridad de datos sensibles.",
  "",
  "HABILIDADES",
  "- Lenguajes y Frameworks: PHP (Laravel), Java (Spring Boot, Spring Batch), TypeScript (Angular, React Native), Python (FastAPI)",
  "- Bases de Datos e Infraestructura: MySQL, PostgreSQL, SQL Server, Docker, Git, GitHub Actions, Linux",
  "- Arquitectura y Seguridad: SOLID, Design Patterns, REST, Webhooks, RBAC, JWT, AES, TLS",
  "- Habilidades Blandas: Comunicacion con stakeholders, Autonomia / gestion de ciclo completo, Resolucion de problemas",
  "",
  "EXPERIENCIA PROFESIONAL",
  "ATP SOFOM | Mazatlan, Sinaloa | Desarrollador de Software | Mayo 2026 - Presente",
  "- Desarrolle modulos de bonos por contencion de cartera en PHP y Angular, mejorando la salud de la cartera de credito.",
  "- Automatice el proceso de carga, identificacion y aplicacion de ingresos bancarios BBVA con trazabilidad de conciliacion.",
  "- Implemente mecanismo de snapshot de datos del cliente en solicitudes de prestamo con auditoria completa de cambios.",
  "",
  "Besson Seguros | Guadalajara, Jalisco | Desarrollador de Software | Enero 2025 - Mayo 2026",
  "- Migre sistema legacy de Java 5 a Java 21 (Spring Boot & Batch) para archivos de +2.5M de lineas (5 dias a 20 min).",
  "- Chatbot cotizaciones MetLife: OCR de INE con Ollama, RAG de coberturas, automatizacion GUI y React Native (~5s).",
  "- Sistema de notificaciones automatizadas con Laravel y Webhooks (alertas de WhatsApp para siniestros y pagos).",
  "- Plataforma interna en Laravel para calculo de bonos y comisiones (+32.3% en rendimiento de ventas y cobranza).",
  "",
  "Toolsnet | Zapopan, Jalisco | Desarrollador Web | Mayo 2024 - Diciembre 2024",
  "- Desarrolle soluciones a medida en PHP para PyMEs (tiendas en linea, landing pages y sistemas internos).",
  "- Gestion del ciclo completo con clientes mediante reuniones de descubrimiento, MVPs e iteraciones progresivas.",
  "",
  "EDUCACION",
  "Universidad Politecnica de Sinaloa: Ingenieria en Tecnologias de la Informacion | 2021 - 2024",
  "",
  "CERTIFICACIONES",
  "Cisco Certified Network Associate (CCNA): Network Security | Enterprise Networking | Switching & Routing"
];

const content =
  "BT /F1 9 Tf 50 740 Td 11 TL\n" +
  lines.map((l) => `(${l.replace(/[()\\]/g, (m) => "\\" + m)}) Tj T*`).join("\n") +
  "\nET";

const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
  `<< /Length ${Buffer.byteLength(content)} >>\nstream\n${content}\nendstream`,
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
];

let pdf = "%PDF-1.4\n";
const offsets = [];
for (let i = 0; i < objects.length; i++) {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
}
const xrefPos = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (const off of offsets) {
  pdf += off.toString().padStart(10, "0") + " 00000 n \n";
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefPos}\n%%EOF\n`;

mkdirSync("public/cv", { recursive: true });
writeFileSync("public/cv/cv-gaelgarcia.pdf", pdf);
console.log("wrote public/cv/cv-gaelgarcia.pdf", Buffer.byteLength(pdf), "bytes");
