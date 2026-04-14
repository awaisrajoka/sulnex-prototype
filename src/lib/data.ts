// Simulated data for Sulnex prototype

export const appointments = [
  { id: 1, patient: "Maria Silva", cpf: "123.456.789-00", phone: "(11) 98765-4321", doctor: "Dr. Rafael Mendes", time: "08:00", type: "Retorno", status: "confirmed", payment: "paid", value: 200 },
  { id: 2, patient: "João Santos", cpf: "234.567.890-11", phone: "(11) 97654-3210", doctor: "Dra. Camila Rodrigues", time: "08:30", type: "Primeira Consulta", status: "confirmed", payment: "pending", value: 350 },
  { id: 3, patient: "Ana Oliveira", cpf: "345.678.901-22", phone: "(11) 96543-2109", doctor: "Dr. Rafael Mendes", time: "09:00", type: "Procedimento", status: "pending", payment: "pending", value: 280 },
  { id: 4, patient: "Carlos Pereira", cpf: "456.789.012-33", phone: "(11) 95432-1098", doctor: "Dr. Rafael Mendes", time: "09:30", type: "Retorno", status: "confirmed", payment: "paid", value: 200 },
  { id: 5, patient: "Fernanda Costa", cpf: "567.890.123-44", phone: "(11) 94321-0987", doctor: "Dra. Camila Rodrigues", time: "10:00", type: "Primeira Consulta", status: "cancelled", payment: "refunded", value: 350 },
  { id: 6, patient: "Roberto Lima", cpf: "678.901.234-55", phone: "(11) 93210-9876", doctor: "Dr. Rafael Mendes", time: "10:30", type: "Retorno", status: "confirmed", payment: "paid", value: 200 },
  { id: 7, patient: "Luciana Ferreira", cpf: "789.012.345-66", phone: "(11) 92109-8765", doctor: "Dra. Camila Rodrigues", time: "11:00", type: "Procedimento", status: "in_progress", payment: "paid", value: 280 },
  { id: 8, patient: "Marcos Almeida", cpf: "890.123.456-77", phone: "(11) 91098-7654", doctor: "Dr. Rafael Mendes", time: "11:30", type: "Retorno", status: "pending", payment: "pending", value: 200 },
  { id: 9, patient: "Patricia Souza", cpf: "901.234.567-88", phone: "(11) 90987-6543", doctor: "Dra. Camila Rodrigues", time: "14:00", type: "Primeira Consulta", status: "confirmed", payment: "pending", value: 350 },
  { id: 10, patient: "Diego Nascimento", cpf: "012.345.678-99", phone: "(11) 89876-5432", doctor: "Dr. Rafael Mendes", time: "14:30", type: "Retorno", status: "confirmed", payment: "paid", value: 200 },
];

export const waitlist = [
  { position: 1, patient: "Renata Barbosa", phone: "(11) 97777-1234", requestedDoctor: "Dr. Rafael Mendes", since: "08/04/2026", type: "Primeira Consulta" },
  { position: 2, patient: "Felipe Gomes", phone: "(11) 96666-5678", requestedDoctor: "Dra. Camila Rodrigues", since: "10/04/2026", type: "Procedimento" },
  { position: 3, patient: "Juliana Martins", phone: "(11) 95555-9012", requestedDoctor: "Dr. Rafael Mendes", since: "11/04/2026", type: "Retorno" },
  { position: 4, patient: "André Rocha", phone: "(11) 94444-3456", requestedDoctor: "Dra. Camila Rodrigues", since: "12/04/2026", type: "Primeira Consulta" },
];

export const recentCheckins = [
  { patient: "Maria Silva", time: "07:52", method: "WhatsApp ARRIVED" },
  { patient: "João Santos", time: "08:15", method: "WhatsApp ARRIVED" },
  { patient: "Carlos Pereira", time: "09:18", method: "Recepção" },
];

export const clinicalAlerts = [
  { id: 1, type: "allergy", patient: "Ana Oliveira", message: "Alergia a dipirona registrada - verificar prescrição", severity: "high" },
  { id: 2, type: "pending", patient: "Carlos Pereira", message: "Prontuário do último atendimento pendente de assinatura", severity: "medium" },
  { id: 3, type: "return", patient: "Fernanda Costa", message: "Retorno agendado há 45 dias não realizado", severity: "low" },
];

export const staffMembers = [
  { id: 1, name: "Renato Pereira", role: "Administrador", email: "renato@sulnex.com.br", lastLogin: "14/04/2026 08:30", status: "online" },
  { id: 2, name: "Dr. Rafael Mendes", role: "Médico", email: "rafael@sulnex.com.br", lastLogin: "14/04/2026 07:45", status: "online" },
  { id: 3, name: "Dra. Camila Rodrigues", role: "Médica", email: "camila@sulnex.com.br", lastLogin: "14/04/2026 08:00", status: "online" },
  { id: 4, name: "Sandra Oliveira", role: "Recepcionista", email: "sandra@sulnex.com.br", lastLogin: "14/04/2026 07:30", status: "online" },
  { id: 5, name: "Enfermeira Paula", role: "Enfermeira", email: "paula@sulnex.com.br", lastLogin: "13/04/2026 17:00", status: "offline" },
  { id: 6, name: "Ricardo Financeiro", role: "Financeiro", email: "ricardo@sulnex.com.br", lastLogin: "11/04/2026 16:30", status: "offline" },
];

export const automationLogs = [
  { id: 1, time: "08:45", action: "Confirmação enviada para Maria Silva", flow: "appointment_confirm", status: "success" },
  { id: 2, time: "08:30", action: "Lembrete 24h enviado para João Santos", flow: "reminder_24h", status: "success" },
  { id: 3, time: "08:15", action: "NFS-e emitida #4521 - Carlos Pereira", flow: "nfse_emit", status: "success" },
  { id: 4, time: "08:00", action: "Lembrete 48h enviado para Patricia Souza", flow: "reminder_48h", status: "success" },
  { id: 5, time: "07:55", action: "Check-in confirmado via WhatsApp - Maria Silva", flow: "checkin_process", status: "success" },
  { id: 6, time: "07:45", action: "Alerta de alergia gerado - Ana Oliveira", flow: "clinical_alert", status: "warning" },
  { id: 7, time: "07:30", action: "Relatório diário gerado automaticamente", flow: "daily_report", status: "success" },
  { id: 8, time: "07:00", action: "Sincronização de agenda executada", flow: "schedule_sync", status: "success" },
];

export const monthlyRevenue = [
  { month: "Out", value: 38500 },
  { month: "Nov", value: 41200 },
  { month: "Dez", value: 35800 },
  { month: "Jan", value: 42100 },
  { month: "Fev", value: 44300 },
  { month: "Mar", value: 47850 },
];

interface Module {
  id: number;
  name: string;
  description: string;
  flows: number;
  templates?: number;
  dashboards?: number;
  status: string;
  integrations: string[];
  color: string;
  tables: string[];
}

export const modules: Module[] = [
  {
    id: 1,
    name: "Agendamento",
    description: "Gestão completa de agenda, slots e confirmações",
    flows: 12,
    status: "active",
    integrations: ["Google Calendar", "WhatsApp", "n8n"],
    color: "bg-blue-500",
    tables: ["appointments", "slots", "appointment_types", "appointment_history"],
  },
  {
    id: 2,
    name: "NFS-e e Fiscal",
    description: "Emissão automática de notas fiscais e integração com prefeitura",
    flows: 6,
    status: "active",
    integrations: ["Prefeitura SP", "Receita Federal", "n8n"],
    color: "bg-purple-500",
    tables: ["invoices", "tax_config", "nfse_log"],
  },
  {
    id: 3,
    name: "Financeiro",
    description: "Controle de pagamentos, cobranças e fluxo de caixa",
    flows: 5,
    status: "active",
    integrations: ["Stripe", "PagSeguro", "Pix", "n8n"],
    color: "bg-green-500",
    tables: ["payments", "payment_plans", "financial_reports"],
  },
  {
    id: 4,
    name: "WhatsApp",
    description: "Automação de mensagens com 8 templates e MSG-ROUTER",
    flows: 3,
    templates: 8,
    status: "active",
    integrations: ["WhatsApp Business API", "n8n", "MSG-ROUTER"],
    color: "bg-emerald-500",
    tables: ["whatsapp_messages", "whatsapp_templates", "whatsapp_sessions"],
  },
  {
    id: 5,
    name: "Prontuários",
    description: "Prontuário eletrônico com notas SOAP e histórico completo",
    flows: 5,
    status: "active",
    integrations: ["Supabase", "n8n"],
    color: "bg-orange-500",
    tables: ["medical_records", "soap_notes", "prescriptions", "attachments"],
  },
  {
    id: 6,
    name: "Dashboard e Relatórios",
    description: "Painéis executivos e relatórios operacionais em tempo real",
    flows: 0,
    dashboards: 3,
    status: "active",
    integrations: ["Supabase", "Next.js"],
    color: "bg-indigo-500",
    tables: ["report_cache", "dashboard_config"],
  },
  {
    id: 7,
    name: "NPS e Retenção",
    description: "Pesquisas de satisfação e estratégias de retenção automatizadas",
    flows: 6,
    status: "planned",
    integrations: ["WhatsApp", "Email", "n8n"],
    color: "bg-pink-500",
    tables: ["nps_surveys", "nps_responses", "retention_campaigns"],
  },
];

export const databaseTables = [
  // MVP - Phase 1 (Green)
  { name: "organizations", phase: 1, records: 2, description: "Multi-tenant orgs (org_id isolation)", group: "Core" },
  { name: "users", phase: 1, records: 6, description: "Staff users with RBAC roles", group: "Core" },
  { name: "patients", phase: 1, records: 847, description: "Patient registry with CPF/phone", group: "Core" },
  { name: "doctors", phase: 1, records: 4, description: "Doctor profiles and specialties", group: "Core" },
  { name: "appointments", phase: 1, records: 2341, description: "All appointments with status tracking", group: "Scheduling" },
  { name: "appointment_types", phase: 1, records: 8, description: "Consultation types and pricing", group: "Scheduling" },
  { name: "whatsapp_messages", phase: 1, records: 15420, description: "Message log with delivery status", group: "Communication" },
  { name: "whatsapp_templates", phase: 1, records: 8, description: "Approved message templates", group: "Communication" },
  // Phase 2 (Amber)
  { name: "medical_records", phase: 2, records: 1893, description: "Electronic health records", group: "Clinical" },
  { name: "soap_notes", phase: 2, records: 3241, description: "SOAP clinical notes per visit", group: "Clinical" },
  { name: "prescriptions", phase: 2, records: 1567, description: "Prescriptions with medications", group: "Clinical" },
  { name: "payments", phase: 2, records: 2108, description: "Payment transactions", group: "Financial" },
  { name: "invoices", phase: 2, records: 1842, description: "NFS-e invoices", group: "Financial" },
  { name: "payment_plans", phase: 2, records: 89, description: "Installment payment plans", group: "Financial" },
  { name: "waitlist", phase: 2, records: 34, description: "Patient waitlist queue", group: "Scheduling" },
  { name: "slots", phase: 2, records: 480, description: "Available time slots per doctor", group: "Scheduling" },
  { name: "audit_log", phase: 2, records: 45672, description: "System audit trail", group: "System" },
  // Phase 3 (Gray)
  { name: "nps_surveys", phase: 3, records: 0, description: "Patient satisfaction surveys", group: "Retention" },
  { name: "nps_responses", phase: 3, records: 0, description: "Survey response data", group: "Retention" },
  { name: "retention_campaigns", phase: 3, records: 0, description: "Automated retention workflows", group: "Retention" },
];

export const whatsappTemplates = [
  {
    id: "confirmation",
    name: "Confirmação de Consulta",
    message: "Olá {nome}! 👋\n\nSua consulta está confirmada:\n📅 {data} às {hora}\n👨‍⚕️ {medico}\n📍 Clínica Bem Estar\n\nResponda:\n1️⃣ - Confirmar\n2️⃣ - Reagendar\n3️⃣ - Cancelar",
    trigger: "Agendamento criado",
  },
  {
    id: "reminder_48h",
    name: "Lembrete 48h",
    message: "Olá {nome}! 📋\n\nLembrete: sua consulta é em 2 dias!\n📅 {data} às {hora}\n👨‍⚕️ {medico}\n\nResponda 1 para confirmar presença.",
    trigger: "48h antes da consulta",
  },
  {
    id: "reminder_24h",
    name: "Lembrete 24h",
    message: "Olá {nome}! ⏰\n\nSua consulta é AMANHÃ!\n📅 {data} às {hora}\n👨‍⚕️ {medico}\n📍 Rua Augusta, 1234 - São Paulo\n\nEnvie CHEGUEI quando estiver na clínica.",
    trigger: "24h antes da consulta",
  },
  {
    id: "cancellation",
    name: "Cancelamento",
    message: "Olá {nome},\n\nSua consulta do dia {data} às {hora} foi cancelada conforme solicitado.\n\nDeseja reagendar? Responda SIM para verificar horários disponíveis.",
    trigger: "Paciente cancela",
  },
  {
    id: "waitlist_offer",
    name: "Oferta Lista de Espera",
    message: "Olá {nome}! 🎉\n\nUm horário ficou disponível!\n📅 {data} às {hora}\n👨‍⚕️ {medico}\n\nDeseja agendar? Responda 1 para SIM ou 2 para NÃO.\n⏳ Válido por 2 horas.",
    trigger: "Cancelamento libera slot",
  },
  {
    id: "checkin_confirmation",
    name: "Confirmação Check-in",
    message: "✅ Check-in confirmado, {nome}!\n\nVocê está na posição {posicao} da fila.\nTempo estimado de espera: {tempo} minutos.\n\nAguarde ser chamado(a). 🏥",
    trigger: "Paciente envia CHEGUEI",
  },
  {
    id: "system_alert",
    name: "Alerta do Sistema",
    message: "⚠️ Alerta Clínica Bem Estar\n\n{mensagem}\n\nData: {data}\nAção necessária: {acao}",
    trigger: "Evento crítico do sistema",
  },
  {
    id: "opt_out",
    name: "Confirmação Opt-out",
    message: "Você foi removido(a) das notificações automáticas da Clínica Bem Estar.\n\nPara reativar, envie ATIVAR a qualquer momento.\n\nObrigado, {nome}! 🙏",
    trigger: "Paciente envia SAIR",
  },
];

export const patientTimeline = [
  { date: "14/04/2026", event: "Consulta de retorno", doctor: "Dr. Rafael Mendes", notes: "Paciente relata melhora significativa. Manter medicação.", type: "appointment" },
  { date: "01/04/2026", event: "Exames laboratoriais", doctor: "Dr. Rafael Mendes", notes: "Hemograma completo, glicemia de jejum, perfil lipídico.", type: "exam" },
  { date: "15/03/2026", event: "Primeira consulta", doctor: "Dr. Rafael Mendes", notes: "Queixa: dores abdominais recorrentes. Solicitados exames.", type: "appointment" },
  { date: "10/03/2026", event: "Cadastro realizado", doctor: "-", notes: "Paciente cadastrado via WhatsApp.", type: "registration" },
];

export const soapNote = {
  patient: "Maria Silva",
  date: "14/04/2026",
  doctor: "Dr. Rafael Mendes",
  subjective: "Paciente relata melhora das dores abdominais após início da medicação prescrita. Nega náuseas, vômitos ou alterações intestinais. Sono regular, apetite preservado.",
  objective: "PA: 120/80 mmHg, FC: 72 bpm, Temp: 36.5°C. Abdome: RHA+, flácido, indolor à palpação superficial e profunda. Sem visceromegalias.",
  assessment: "Melhora clínica significativa. Resultados laboratoriais dentro dos parâmetros normais. Hipótese diagnóstica: Dispepsia funcional em remissão.",
  plan: "1. Manter omeprazol 20mg 1x/dia por mais 30 dias\n2. Dieta leve, evitar alimentos gordurosos\n3. Retorno em 30 dias para reavaliação\n4. Solicitar endoscopia caso sintomas retornem",
};
