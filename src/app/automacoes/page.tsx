"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatusBadge from "@/components/StatusBadge";
import { modules } from "@/lib/data";
import {
  Workflow,
  Zap,
  Database,
  ArrowRight,
  Layers,
  GitBranch,
} from "lucide-react";

const totalFlows = modules.reduce((sum, m) => sum + m.flows, 0);
const totalTemplates = modules.reduce((sum, m) => sum + (m.templates || 0), 0);
const totalDashboards = modules.reduce((sum, m) => sum + (m.dashboards || 0), 0);

export default function AutomacoesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 border border-orange-200 rounded-full text-xs font-medium text-orange-700 mb-4">
            <Workflow className="w-3.5 h-3.5" />
            Pipeline de Automação n8n
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">7 Módulos de Automação</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Cada módulo representa um conjunto de fluxos n8n que automatizam processos
            clínicos de ponta a ponta.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Módulos", value: "7", icon: Layers },
            { label: "Fluxos n8n", value: totalFlows.toString(), icon: GitBranch },
            { label: "Templates WhatsApp", value: totalTemplates.toString(), icon: Zap },
            { label: "Dashboards", value: totalDashboards.toString(), icon: Database },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-center">
                <Icon className="w-5 h-5 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Module Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {modules.map((mod, idx) => (
            <div
              key={mod.id}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="p-6">
                {/* Module header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${mod.color} rounded-lg flex items-center justify-center text-white font-bold shadow-md`}>
                      {mod.id}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{mod.name}</h3>
                      <StatusBadge status={mod.status} />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-slate-500 mb-4 leading-relaxed">{mod.description}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1.5 text-sm">
                    <GitBranch className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-semibold text-slate-900">{mod.flows}</span>
                    <span className="text-slate-400 text-xs">fluxos</span>
                  </div>
                  {mod.templates && mod.templates > 0 && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <Zap className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-slate-900">{mod.templates}</span>
                      <span className="text-slate-400 text-xs">templates</span>
                    </div>
                  )}
                  {mod.dashboards && mod.dashboards > 0 && (
                    <div className="flex items-center gap-1.5 text-sm">
                      <Database className="w-3.5 h-3.5 text-slate-400" />
                      <span className="font-semibold text-slate-900">{mod.dashboards}</span>
                      <span className="text-slate-400 text-xs">dashboards</span>
                    </div>
                  )}
                </div>

                {/* Integrations */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {mod.integrations.map((int) => (
                    <span
                      key={int}
                      className="px-2 py-0.5 bg-slate-100 text-slate-600 rounded text-xs font-medium"
                    >
                      {int}
                    </span>
                  ))}
                </div>

                {/* Tables */}
                <div className="pt-3 border-t border-slate-100">
                  <div className="text-xs text-slate-400 mb-1.5 font-medium">Tabelas relacionadas:</div>
                  <div className="flex flex-wrap gap-1">
                    {mod.tables.map((t) => (
                      <span key={t} className="px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded text-[10px] font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Overview */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Workflow className="w-5 h-5 text-orange-400" />
            Arquitetura de Integração
          </h2>
          <div className="grid sm:grid-cols-5 gap-4 items-center">
            {[
              { name: "Next.js 14", desc: "Frontend + API", color: "bg-slate-700" },
              { name: "Supabase", desc: "PostgreSQL + RLS", color: "bg-green-700" },
              { name: "n8n", desc: "Orquestração", color: "bg-orange-700" },
              { name: "WhatsApp API", desc: "Comunicação", color: "bg-emerald-700" },
              { name: "Prefeitura SP", desc: "NFS-e", color: "bg-purple-700" },
            ].map((tech, idx) => (
              <div key={tech.name} className="flex items-center gap-2">
                <div className={`${tech.color} rounded-xl p-4 w-full text-center`}>
                  <div className="text-sm font-bold">{tech.name}</div>
                  <div className="text-xs text-slate-300">{tech.desc}</div>
                </div>
                {idx < 4 && (
                  <ArrowRight className="w-4 h-4 text-slate-500 shrink-0 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400">
              Todos os módulos se comunicam via API interna do Next.js e webhooks n8n.
              <br />
              Isolamento multi-tenant garantido por Row Level Security (RLS) no Supabase.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
