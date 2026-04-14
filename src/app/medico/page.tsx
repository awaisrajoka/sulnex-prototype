"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import { appointments, clinicalAlerts, patientTimeline, soapNote } from "@/lib/data";
import {
  CalendarDays,
  Users,
  FileText,
  AlertTriangle,
  Stethoscope,
  Clock,
  DollarSign,
  AlertCircle,
  ShieldAlert,
  RotateCcw,
  ChevronRight,
  Activity,
  ClipboardList,
  UserPlus,
  Calendar,
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { name: "Minha Agenda", href: "/medico", icon: CalendarDays },
  { name: "Pacientes", href: "/medico", icon: Users },
  { name: "Prontuários", href: "/medico", icon: FileText },
  { name: "Alertas", href: "/medico", icon: AlertTriangle },
];

const doctorAppointments = appointments.filter((a) => a.doctor === "Dr. Rafael Mendes");

const alertIcons: Record<string, typeof AlertCircle> = {
  allergy: ShieldAlert,
  pending: FileText,
  return: RotateCcw,
};

const alertColors: Record<string, string> = {
  high: "bg-red-50 border-red-200 text-red-700",
  medium: "bg-yellow-50 border-yellow-200 text-yellow-700",
  low: "bg-blue-50 border-blue-200 text-blue-700",
};

const timelineIcons: Record<string, typeof Activity> = {
  appointment: Stethoscope,
  exam: ClipboardList,
  registration: UserPlus,
};

// Mini calendar - next 7 days
const next7Days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(2026, 3, 14 + i);
  const weekdays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  return {
    day: d.getDate(),
    weekday: weekdays[d.getDay()],
    appointments: [8, 6, 7, 5, 4, 3, 0][i],
    isToday: i === 0,
  };
});

export default function MedicoPage() {
  const [showSoap, setShowSoap] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} title="Portal Médico" accentColor="bg-teal-600" />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-slate-900">
              Bom dia, Dr. Rafael <span className="text-2xl">&#128075;</span>
            </h1>
            <p className="text-sm text-slate-500">
              Segunda-feira, 14 de Abril de 2026 - Clínica Bem Estar
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Schedule */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-teal-600" />
                    Agenda de Hoje
                    <span className="ml-2 px-2 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs font-medium">
                      {doctorAppointments.length} pacientes
                    </span>
                  </h2>
                </div>
                <div className="divide-y divide-slate-50">
                  {doctorAppointments.map((apt) => (
                    <div
                      key={apt.id}
                      className="px-5 py-4 hover:bg-slate-50/50 transition-colors flex items-center gap-4"
                    >
                      <div className="text-center shrink-0 w-14">
                        <div className="font-mono text-lg font-bold text-slate-900">{apt.time}</div>
                      </div>
                      <div className="w-px h-10 bg-slate-200" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm text-slate-900">{apt.patient}</span>
                          <span className="text-xs text-slate-400">{apt.cpf}</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">
                          {apt.type}
                          {apt.type === "Primeira Consulta" && (
                            <span className="ml-2 px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-medium">
                              NOVO
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs">
                          <DollarSign className="w-3 h-3" />
                          <StatusBadge status={apt.payment} />
                        </div>
                        <StatusBadge status={apt.status} />
                        <ChevronRight className="w-4 h-4 text-slate-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOAP Note View */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-teal-600" />
                      Prontuário - {soapNote.patient}
                    </h2>
                    <button
                      onClick={() => setShowSoap(!showSoap)}
                      className="text-xs font-medium text-teal-600 hover:text-teal-700"
                    >
                      {showSoap ? "Recolher" : "Expandir"} Nota SOAP
                    </button>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    {soapNote.date} - {soapNote.doctor}
                  </p>
                </div>
                {showSoap ? (
                  <div className="p-5 space-y-4">
                    {[
                      { label: "S - Subjetivo", content: soapNote.subjective, color: "border-blue-400 bg-blue-50/50" },
                      { label: "O - Objetivo", content: soapNote.objective, color: "border-green-400 bg-green-50/50" },
                      { label: "A - Avaliação", content: soapNote.assessment, color: "border-yellow-400 bg-yellow-50/50" },
                      { label: "P - Plano", content: soapNote.plan, color: "border-purple-400 bg-purple-50/50" },
                    ].map((section) => (
                      <div key={section.label} className={`border-l-4 ${section.color} rounded-r-lg p-4`}>
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                          {section.label}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-5">
                    <div className="text-sm text-slate-500 italic">
                      Clique em &quot;Expandir&quot; para ver a nota SOAP completa da última consulta.
                    </div>
                  </div>
                )}
              </div>

              {/* Patient Timeline */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <Activity className="w-4 h-4 text-teal-600" />
                  Histórico do Paciente - Maria Silva
                </h2>
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200" />
                  <div className="space-y-4">
                    {patientTimeline.map((event, idx) => {
                      const Icon = timelineIcons[event.type] || Activity;
                      return (
                        <div key={idx} className="relative flex items-start gap-4 pl-10">
                          <div className="absolute left-0 w-8 h-8 bg-teal-50 border-2 border-teal-200 rounded-full flex items-center justify-center">
                            <Icon className="w-3.5 h-3.5 text-teal-600" />
                          </div>
                          <div className="flex-1 bg-slate-50 rounded-lg p-3 border border-slate-100">
                            <div className="flex items-center justify-between mb-1">
                              <span className="font-medium text-sm text-slate-900">{event.event}</span>
                              <span className="text-xs text-slate-400">{event.date}</span>
                            </div>
                            <p className="text-xs text-slate-500">{event.notes}</p>
                            {event.doctor !== "-" && (
                              <p className="text-xs text-teal-600 mt-1">{event.doctor}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Mini Calendar */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <Calendar className="w-4 h-4 text-teal-600" />
                  Próximos 7 Dias
                </h2>
                <div className="grid grid-cols-7 gap-1">
                  {next7Days.map((day) => (
                    <div
                      key={day.day}
                      className={`text-center p-2 rounded-lg ${
                        day.isToday
                          ? "bg-teal-500 text-white"
                          : day.appointments === 0
                          ? "bg-slate-50 text-slate-400"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      } transition-colors cursor-pointer`}
                    >
                      <div className="text-[10px] font-medium">{day.weekday}</div>
                      <div className="text-sm font-bold">{day.day}</div>
                      <div className={`text-[10px] ${day.isToday ? "text-teal-100" : "text-slate-400"}`}>
                        {day.appointments > 0 ? `${day.appointments}p` : "-"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Alerts */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Alertas Clínicos
                  <span className="ml-auto px-2 py-0.5 bg-red-50 text-red-600 rounded-full text-xs font-bold">
                    {clinicalAlerts.length}
                  </span>
                </h2>
                <div className="space-y-3">
                  {clinicalAlerts.map((alert) => {
                    const Icon = alertIcons[alert.type] || AlertCircle;
                    return (
                      <div
                        key={alert.id}
                        className={`p-3 rounded-lg border ${alertColors[alert.severity]}`}
                      >
                        <div className="flex items-start gap-2">
                          <Icon className="w-4 h-4 mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold">{alert.patient}</div>
                            <div className="text-xs mt-0.5 opacity-80">{alert.message}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-teal-500 to-teal-700 rounded-xl p-5 text-white">
                <h3 className="font-semibold text-sm mb-4">Resumo de Hoje</h3>
                <div className="space-y-3">
                  {[
                    { label: "Total de consultas", value: doctorAppointments.length.toString() },
                    { label: "Confirmadas", value: doctorAppointments.filter((a) => a.status === "confirmed").length.toString() },
                    { label: "Pendentes", value: doctorAppointments.filter((a) => a.status === "pending").length.toString() },
                    { label: "Primeira consulta", value: doctorAppointments.filter((a) => a.type === "Primeira Consulta").length.toString() },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center justify-between">
                      <span className="text-sm text-teal-100">{stat.label}</span>
                      <span className="font-bold text-lg">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
