"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import StatusBadge from "@/components/StatusBadge";
import { staffMembers, automationLogs, monthlyRevenue } from "@/lib/data";
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

const sidebarItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Equipe", href: "/admin", icon: Users2 },
  { name: "Financeiro", href: "/admin", icon: DollarSign },
  { name: "WhatsApp", href: "/admin", icon: MessageSquare },
  { name: "Automações", href: "/admin", icon: Workflow },
  { name: "Configurações", href: "/admin", icon: Settings },
];

const metricCards = [
  { label: "Total Pacientes", value: "847", change: "+23 este mês", icon: Users2, color: "text-blue-600 bg-blue-50" },
  { label: "Consultas Hoje", value: "23", change: "8 confirmadas", icon: CalendarCheck, color: "text-teal-600 bg-teal-50" },
  { label: "Taxa de Confirmação", value: "94.2%", change: "+2.1% vs mês anterior", icon: CheckCircle, color: "text-green-600 bg-green-50" },
  { label: "Receita Mensal", value: "R$ 47.850", change: "+8% vs março", icon: Banknote, color: "text-purple-600 bg-purple-50" },
];

const operationalAlerts = [
  { type: "warning", icon: XCircle, message: "3 cancelamentos tardios hoje (< 24h)", time: "Hoje" },
  { type: "error", icon: AlertCircle, message: "2 no-shows registrados (Maria Rosa, Pedro Alves)", time: "Hoje" },
  { type: "info", icon: CreditCard, message: "5 pagamentos pendentes totalizando R$ 1.750", time: "Esta semana" },
];

export default function AdminPage() {
  const maxRevenue = Math.max(...monthlyRevenue.map((r) => r.value));

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar items={sidebarItems} title="Administração" accentColor="bg-purple-600" />
        <main className="flex-1 p-6 lg:p-8 overflow-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Painel Administrativo</h1>
              <p className="text-sm text-slate-500">Clínica Bem Estar - Visão Geral</p>
            </div>
            <div className="px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700">
              Protótipo - Dados Simulados
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
                  WhatsApp Business
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Wifi className="w-4 h-4 text-green-600" />
                      <span className="text-xs font-medium text-green-700">Conectado</span>
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />
                    </div>
                    <div className="text-sm font-mono text-green-800">+55 (11) 3456-7890</div>
                    <div className="text-xs text-green-600 mt-1">Clínica Bem Estar</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Send className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-blue-700">Msgs Enviadas Hoje</span>
                    </div>
                    <div className="text-2xl font-bold text-blue-800">47</div>
                    <div className="text-xs text-blue-600 mt-1">Confirmações + Lembretes</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="w-4 h-4 text-purple-600" />
                      <span className="text-xs font-medium text-purple-700">Taxa de Entrega</span>
                    </div>
                    <div className="text-2xl font-bold text-purple-800">98.4%</div>
                    <div className="text-xs text-purple-600 mt-1">Últimos 30 dias</div>
                  </div>
                </div>
              </div>

              {/* Staff Table */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Users2 className="w-4 h-4 text-purple-600" />
                    Equipe
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs font-medium text-slate-400 uppercase tracking-wider">
                        <th className="px-5 py-3">Nome</th>
                        <th className="px-5 py-3">Cargo</th>
                        <th className="px-5 py-3">Email</th>
                        <th className="px-5 py-3">Último Acesso</th>
                        <th className="px-5 py-3">Status</th>
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
                  Receita Mensal (R$)
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
                  Alertas Operacionais
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
                  Atividade de Automação
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
                  Ver Todos os Logs
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
