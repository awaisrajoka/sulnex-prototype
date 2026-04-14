"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import { staffMembers, automationLogs, monthlyRevenue } from "@/lib/data";
import { useI18n } from "@/i18n/context";
import {
  LayoutDashboard,
  Users2,
  DollarSign,
  MessageSquare,
  Workflow,
  Settings,
  TrendingUp,
  CalendarCheck,
  CheckCircle,
  Banknote,
  Wifi,
  Send,
  BarChart3,
  AlertTriangle,
  Clock,
  Zap,
  XCircle,
  AlertCircle,
  CreditCard,
} from "lucide-react";

export default function AdminPage() {
  const { t } = useI18n();
  const maxRevenue = Math.max(...monthlyRevenue.map((r) => r.value));

  const sidebarItems = [
    { name: t("admin.dashboard"), href: "/admin", icon: LayoutDashboard },
    { name: t("admin.team"), href: "/admin", icon: Users2 },
    { name: t("admin.financial"), href: "/admin", icon: DollarSign },
    { name: t("admin.whatsapp"), href: "/admin", icon: MessageSquare },
    { name: t("admin.automations"), href: "/admin", icon: Workflow },
    { name: t("admin.settings"), href: "/admin", icon: Settings },
  ];

  const metricCards = [
    { label: t("admin.totalPatients"), value: "847", change: t("admin.changeThisMonth"), icon: Users2, color: "text-blue-600 bg-blue-50" },
    { label: t("admin.todayAppointments"), value: "23", change: t("admin.changeConfirmed"), icon: CalendarCheck, color: "text-teal-600 bg-teal-50" },
    { label: t("admin.confirmationRate"), value: "94.2%", change: t("admin.changeVsLastMonth"), icon: CheckCircle, color: "text-green-600 bg-green-50" },
    { label: t("admin.monthlyRevenue"), value: "R$ 47.850", change: t("admin.changeVsMarch"), icon: Banknote, color: "text-purple-600 bg-purple-50" },
  ];

  const operationalAlerts = [
    { type: "warning", icon: XCircle, message: t("admin.alertLateCancellations"), time: t("admin.today") },
    { type: "error", icon: AlertCircle, message: t("admin.alertNoShows"), time: t("admin.today") },
    { type: "info", icon: CreditCard, message: t("admin.alertPendingPayments"), time: t("admin.thisWeek") },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} title={t("admin.sidebarTitle")} accentColor="bg-purple-600" />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{t("admin.pageTitle")}</h1>
              <p className="text-sm text-slate-500">{t("admin.subtitle")}</p>
            </div>
            <div className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700">
              {t("admin.prototypeBadge")}
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {metricCards.map((card) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">{card.label}</p>
                      <p className="text-2xl font-bold text-slate-900 mt-1">{card.value}</p>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-green-500" />
                        {card.change}
                      </p>
                    </div>
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${card.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left 2/3 */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp Status */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <MessageSquare className="w-4 h-4 text-green-600" />
                  {t("admin.whatsappBusiness")}
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Wifi className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-700">{t("admin.connected")}</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />
                    </div>
                    <div className="text-sm font-mono text-green-800">+55 (11) 3456-7890</div>
                    <div className="text-xs text-green-600 mt-1">Clínica Bem Estar</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Send className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-blue-700">{t("admin.msgsSentToday")}</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-800">47</div>
                    <div className="text-xs text-blue-600 mt-1">{t("admin.confirmationsReminders")}</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-purple-700">{t("admin.deliveryRate")}</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-800">98.4%</div>
                    <div className="text-xs text-purple-600 mt-1">{t("admin.last30Days")}</div>
                  </div>
                </div>
              </div>

              {/* Staff Table */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Users2 className="w-4 h-4 text-purple-600" />
                    {t("admin.teamTitle")}
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                        <th className="px-5 py-3">{t("admin.thName")}</th>
                        <th className="px-5 py-3">{t("admin.thRole")}</th>
                        <th className="px-5 py-3">{t("admin.thEmail")}</th>
                        <th className="px-5 py-3">{t("admin.thLastLogin")}</th>
                        <th className="px-5 py-3">{t("admin.thStatus")}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {staffMembers.map((member) => (
                        <tr key={member.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-5 py-3.5">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                                {member.name.charAt(0)}
                              </div>
                              <span className="font-medium text-sm text-slate-900">{member.name}</span>
                            </div>
                          </td>
                          <td className="px-5 py-3.5 text-sm text-slate-600">{member.role}</td>
                          <td className="px-5 py-3.5 text-sm text-slate-500">{member.email}</td>
                          <td className="px-5 py-3.5 text-xs text-slate-400 font-mono">{member.lastLogin}</td>
                          <td className="px-5 py-3.5">
                            <StatusBadge status={member.status} />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Revenue Chart */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-6">
                  <BarChart3 className="w-4 h-4 text-purple-600" />
                  {t("admin.revenueChart")}
                </h2>
                <div className="flex items-end gap-3 h-48">
                  {monthlyRevenue.map((m) => (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700">
                        {(m.value / 1000).toFixed(1)}k
                      </span>
                      <div
                        className="w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-lg transition-all hover:from-purple-700 hover:to-purple-500 cursor-pointer"
                        style={{ height: `${(m.value / maxRevenue) * 100}%` }}
                      />
                      <span className="text-xs text-slate-500 font-medium">{m.month}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Operational Alerts */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  {t("admin.operationalAlerts")}
                </h2>
                <div className="space-y-3">
                  {operationalAlerts.map((alert, idx) => {
                    const Icon = alert.icon;
                    const colors = {
                      warning: "bg-yellow-50 border-yellow-200 text-yellow-700",
                      error: "bg-red-50 border-red-200 text-red-700",
                      info: "bg-blue-50 border-blue-200 text-blue-700",
                    };
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-lg border ${colors[alert.type as keyof typeof colors]}`}
                      >
                        <div className="flex items-start gap-2">
                          <Icon className="w-4 h-4 mt-0.5 shrink-0" />
                          <div>
                            <div className="text-xs">{alert.message}</div>
                            <div className="text-[10px] opacity-60 mt-0.5">{alert.time}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Automation Activity */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-orange-500" />
                  {t("admin.automationActivity")}
                </h2>
                <div className="space-y-2">
                  {automationLogs.slice(0, 6).map((log) => (
                    <div
                      key={log.id}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="flex items-center gap-2 shrink-0">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs font-mono text-slate-400 w-10">{log.time}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-slate-700 leading-relaxed">{log.action}</div>
                      </div>
                      <StatusBadge status={log.status} />
                    </div>
                  ))}
                </div>
                <button className="w-full mt-3 py-2 text-xs font-medium text-purple-600 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                  {t("admin.viewAllLogs")}
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
