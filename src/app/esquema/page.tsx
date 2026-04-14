"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { databaseTables } from "@/lib/data";
import {
  Database,
  Table2,
  Lock,
  Layers,
  Shield,
  Link2,
  Hash,
} from "lucide-react";

const phaseConfig: Record<number, { label: string; color: string; bgColor: string; borderColor: string; description: string }> = {
  1: { label: "MVP - Fase 1", color: "text-green-700", bgColor: "bg-green-50", borderColor: "border-green-200", description: "8 tabelas essenciais para operação" },
  2: { label: "Fase 2", color: "text-amber-700", bgColor: "bg-amber-50", borderColor: "border-amber-200", description: "9 tabelas para funcionalidades avançadas" },
  3: { label: "Fase 3", color: "text-slate-500", bgColor: "bg-slate-50", borderColor: "border-slate-200", description: "3 tabelas para NPS e retenção" },
};

const groups = Array.from(new Set(databaseTables.map((t) => t.group)));

export default function EsquemaPage() {
  const totalRecords = databaseTables.reduce((sum, t) => sum + t.records, 0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-600 mb-4">
            <Database className="w-3.5 h-3.5" />
            Esquema do Banco de Dados
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">20 Tabelas PostgreSQL</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Estrutura completa do banco de dados com isolamento multi-tenant via org_id
            e Row Level Security no Supabase.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Tabelas", value: "20", icon: Table2 },
            { label: "Registros Simulados", value: totalRecords.toLocaleString("pt-BR"), icon: Hash },
            { label: "Padrão de Isolamento", value: "org_id", icon: Lock },
            { label: "Grupos", value: groups.length.toString(), icon: Layers },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 text-center">
                <Icon className="w-5 h-5 text-slate-500 mx-auto mb-2" />
                <div className="text-xl font-bold text-slate-900">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* org_id Pattern Highlight */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-xl p-6 mb-8 text-white">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">Padrão org_id - Isolamento Multi-Tenant</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-3">
                Cada tabela possui a coluna <code className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-mono">org_id UUID NOT NULL REFERENCES organizations(id)</code>.
                O Supabase aplica Row Level Security (RLS) para garantir que cada organização
                só acesse seus próprios dados.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/10 rounded text-xs font-mono">Org A: Clínica Bem Estar</span>
                <span className="px-2 py-1 bg-white/10 rounded text-xs font-mono">Org B: Consultório Dr. Mendes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          {Object.entries(phaseConfig).map(([phase, config]) => {
            const count = databaseTables.filter((t) => t.phase === Number(phase)).length;
            return (
              <div
                key={phase}
                className={`flex items-center gap-2 px-3 py-2 ${config.bgColor} border ${config.borderColor} rounded-lg`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  phase === "1" ? "bg-green-500" : phase === "2" ? "bg-amber-500" : "bg-slate-400"
                }`} />
                <span className={`text-sm font-medium ${config.color}`}>
                  {config.label} ({count} tabelas)
                </span>
              </div>
            );
          })}
        </div>

        {/* Tables by Group */}
        <div className="space-y-6">
          {groups.map((group) => {
            const groupTables = databaseTables.filter((t) => t.group === group);
            return (
              <div key={group} className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500" />
                    {group}
                    <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-xs">
                      {groupTables.length} tabelas
                    </span>
                  </h2>
                </div>
                <div className="divide-y divide-slate-50">
                  {groupTables.map((table) => {
                    const phase = phaseConfig[table.phase];
                    return (
                      <div key={table.name} className="px-5 py-4 hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-4">
                          {/* Phase indicator */}
                          <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                            table.phase === 1 ? "bg-green-500" : table.phase === 2 ? "bg-amber-500" : "bg-slate-400"
                          }`} />

                          {/* Table name */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <code className="text-sm font-mono font-bold text-slate-900">{table.name}</code>
                              <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${phase.bgColor} ${phase.color} border ${phase.borderColor}`}>
                                {phase.label}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mt-0.5">{table.description}</p>
                          </div>

                          {/* Records */}
                          <div className="text-right shrink-0">
                            <div className="text-sm font-mono font-semibold text-slate-900">
                              {table.records > 0 ? table.records.toLocaleString("pt-BR") : "-"}
                            </div>
                            <div className="text-[10px] text-slate-400">registros</div>
                          </div>

                          {/* org_id indicator */}
                          <div className="flex items-center gap-1 px-2 py-1 bg-blue-50 rounded text-[10px] font-mono text-blue-600 shrink-0">
                            <Link2 className="w-3 h-3" />
                            org_id
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Relationships Diagram */}
        <div className="mt-8 bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <h2 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
            <Link2 className="w-5 h-5 text-slate-500" />
            Relacionamentos Principais
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { from: "appointments", to: "patients", type: "patient_id" },
              { from: "appointments", to: "doctors", type: "doctor_id" },
              { from: "soap_notes", to: "medical_records", type: "record_id" },
              { from: "payments", to: "appointments", type: "appointment_id" },
              { from: "invoices", to: "payments", type: "payment_id" },
              { from: "whatsapp_messages", to: "patients", type: "patient_id" },
              { from: "prescriptions", to: "medical_records", type: "record_id" },
              { from: "waitlist", to: "patients", type: "patient_id" },
              { from: "slots", to: "doctors", type: "doctor_id" },
            ].map((rel, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                <code className="text-xs font-mono text-blue-600 font-semibold">{rel.from}</code>
                <div className="flex items-center gap-1 text-slate-400">
                  <div className="w-4 h-px bg-slate-300" />
                  <span className="text-[9px] font-mono">{rel.type}</span>
                  <div className="w-4 h-px bg-slate-300" />
                  <span className="text-[10px]">&rarr;</span>
                </div>
                <code className="text-xs font-mono text-green-600 font-semibold">{rel.to}</code>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
