"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import { appointments, waitlist, recentCheckins } from "@/lib/data";
import { useI18n } from "@/i18n/context";
import {
  LayoutDashboard,
  CalendarPlus,
  Users,
  ListOrdered,
  LogIn,
  Phone,
  Search,
  Clock,
  MessageCircle,
  CheckCircle2,
  Wifi,
} from "lucide-react";

export default function RecepcaoPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const { t } = useI18n();

  const sidebarItems = [
    { name: t("recepcao.dashboard"), href: "/recepcao", icon: LayoutDashboard },
    { name: t("recepcao.schedule"), href: "/recepcao", icon: CalendarPlus },
    { name: t("recepcao.patients"), href: "/recepcao", icon: Users },
    { name: t("recepcao.waitlist"), href: "/recepcao", icon: ListOrdered },
    { name: t("recepcao.checkin"), href: "/recepcao", icon: LogIn },
  ];

  const filteredAppointments = appointments.filter(
    (a) =>
      a.patient.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.cpf.includes(searchTerm)
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} title={t("recepcao.sidebarTitle")} accentColor="bg-blue-600" />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{t("recepcao.pageTitle")}</h1>
              <p className="text-sm text-slate-500">Clínica Bem Estar - 14/04/2026</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
                <Wifi className="w-3.5 h-3.5 text-green-600" />
                <span className="text-xs font-medium text-green-700">{t("recepcao.whatsappConnected")}</span>
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left Column - Appointments */}
            <div className="lg:col-span-2 space-y-6">
              {/* Today's Appointments */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-600" />
                      {t("recepcao.todayAppointments")}
                      <span className="ml-2 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                        {appointments.length}
                      </span>
                    </h2>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={t("recepcao.searchPlaceholder")}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 w-64"
                      />
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                        <th className="px-5 py-3">{t("recepcao.thTime")}</th>
                        <th className="px-5 py-3">{t("recepcao.thPatient")}</th>
                        <th className="px-5 py-3">{t("recepcao.thCpf")}</th>
                        <th className="px-5 py-3">{t("recepcao.thDoctor")}</th>
                        <th className="px-5 py-3">{t("recepcao.thType")}</th>
                        <th className="px-5 py-3">{t("recepcao.thStatus")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {filteredAppointments.map((apt) => (
                        <tr key={apt.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-5 py-3.5">
                            <span className="font-mono text-sm font-semibold text-slate-900">{apt.time}</span>
                          </td>
                          <td className="px-5 py-3.5">
                            <div className="font-medium text-sm text-slate-900">{apt.patient}</div>
                            <div className="text-xs text-slate-400 flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {apt.phone}
                            </div>
                          </td>
                          <td className="px-5 py-3.5 font-mono text-xs text-slate-500">{apt.cpf}</td>
                          <td className="px-5 py-3.5 text-sm text-slate-600">{apt.doctor}</td>
                          <td className="px-5 py-3.5">
                            <span className="text-xs font-medium text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                              {apt.type}
                            </span>
                          </td>
                          <td className="px-5 py-3.5">
                            <StatusBadge status={apt.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Quick Scheduling Form */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <CalendarPlus className="w-4 h-4 text-blue-600" />
                  {t("recepcao.quickScheduling")}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">{t("recepcao.labelPatient")}</label>
                    <div className="relative">
                      <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder={t("recepcao.searchPatient")}
                        className="w-full pl-9 pr-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">{t("recepcao.labelDoctor")}</label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => setSelectedDoctor(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    >
                      <option value="">{t("recepcao.selectOption")}</option>
                      <option value="rafael">Dr. Rafael Mendes</option>
                      <option value="camila">Dra. Camila Rodrigues</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">{t("recepcao.labelDateTime")}</label>
                    <input
                      type="datetime-local"
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1.5">{t("recepcao.labelType")}</label>
                    <select
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="w-full px-3 py-2.5 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    >
                      <option value="">{t("recepcao.selectOption")}</option>
                      <option value="primeira_consulta">{t("recepcao.firstConsultation")}</option>
                      <option value="retorno">{t("recepcao.returnVisit")}</option>
                      <option value="procedimento">{t("recepcao.procedure")}</option>
                    </select>
                  </div>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    {t("recepcao.scheduleAppointment")}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Waitlist & Check-ins */}
            <div className="space-y-6">
              {/* Recent Check-ins */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  {t("recepcao.recentCheckins")}
                </h2>
                <div className="space-y-3">
                  {recentCheckins.map((ci, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg border border-green-100"
                    >
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-slate-900 truncate">{ci.patient}</div>
                        <div className="text-xs text-slate-500">{ci.method}</div>
                      </div>
                      <div className="text-xs font-mono text-slate-400">{ci.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Waitlist */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <ListOrdered className="w-4 h-4 text-orange-600" />
                  {t("recepcao.waitlistTitle")}
                  <span className="ml-auto px-2 py-0.5 bg-orange-50 text-orange-600 rounded-full text-xs font-medium">
                    {waitlist.length}
                  </span>
                </h2>
                <div className="space-y-3">
                  {waitlist.map((w) => (
                    <div
                      key={w.position}
                      className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
                    >
                      <div className="w-7 h-7 bg-orange-100 rounded-full flex items-center justify-center text-xs font-bold text-orange-600 shrink-0">
                        {w.position}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm text-slate-900">{w.patient}</div>
                        <div className="text-xs text-slate-500">{w.requestedDoctor}</div>
                        <div className="text-xs text-slate-400 mt-0.5">{w.type} - {t("recepcao.since")} {w.since}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-2 text-sm font-medium text-orange-600 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  {t("recepcao.manageList")}
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
