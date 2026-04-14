"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { databaseTables } from "@/lib/data";
import { useI18n } from "@/i18n/context";
import {
  Database,
  Table2,
  Lock,
  Layers,
  Shield,
  Link2,
  Hash,
} from "lucide-react";

const groups = Array.from(new Set(databaseTables.map((t) => t.group)));

export default function EsquemaPage() {
  const { t } = useI18n();
  const totalRecords = databaseTables.reduce((sum, tbl) => sum + tbl.records, 0);

  const phaseConfig: Record<number, { label: string; color: string; bgColor: string; borderColor: string; description: string }> = {
    1: { label: t("esquema.mvpPhase1"), color: "text-green-700", bgColor: "bg-green-50", borderColor: "border-green-200", description: t("esquema.phase1Desc") },
    2: { label: t("esquema.phase2"), color: "text-amber-700", bgColor: "bg-amber-50", borderColor: "border-amber-200", description: t("esquema.phase2Desc") },
    3: { label: t("esquema.phase3"), color: "text-slate-500", bgColor: "bg-slate-50", borderColor: "border-slate-200", description: t("esquema.phase3Desc") },
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-medium text-slate-600 mb-4">
            <Database className="w-3.5 h-3.5" />
            {t("esquema.headerBadge")}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t("esquema.pageTitle")}</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            {t("esquema.pageDescription")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: t("esquema.totalTables"), value: "20", icon: Table2 },
            { label: t("esquema.simulatedRecords"), value: totalRecords.toLocaleString("pt-BR"), icon: Hash },
            { label: t("esquema.isolationPattern"), value: "org_id", icon: Lock },
            { label: t("esquema.groups"), value: groups.length.toString(), icon: Layers },
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
              <h3 className="font-bold text-lg mb-1">{t("esquema.orgIdTitle")}</h3>
              <p className="text-blue-100 text-sm leading-relaxed mb-3">
                {t("esquema.orgIdDescription")} <code className="bg-white/20 px-1.5 py-0.5 rounded text-xs font-mono">org_id UUID NOT NULL REFERENCES organizations(id)</code>{t("esquema.orgIdDescCont")}
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
            const count = databaseTables.filter((tbl) => tbl.phase === Number(phase)).length;
            return (
              <div
                key={phase}
                className={`flex items-center gap-2 px-3 py-2 ${config.bgColor} border ${config.borderColor} rounded-lg`}
              >
                <div className={`w-3 h-3 rounded-full ${
                  phase === "1" ? "bg-green-500" : phase === "2" ? "bg-amber-500" : "bg-slate-400"
                }`} />
                <span className={`text-sm font-medium ${config.color}`}>
                  {config.label} ({count} {t("esquema.tables")})
                </span>
              </div>
            );
          })}
        </div>

        {/* Tables by Group */}
        <div className="space-y-6">
          {groups.map((group) => {
            const groupTables = databaseTables.filter((tbl) => tbl.group === group);
            return (
              <div key={group} className="bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="p-5 border-b border-slate-100">
                  <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-slate-500" />
                    {t(`schemaGroup.${group}`)}
                    <span className="ml-2 px-2 py-0.5 bg-slate-100 text-slate-500 rounded-full text-xs">
                      {groupTables.length} {t("esquema.tables")}
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
                            <p className="text-xs text-slate-500 mt-0.5">{t(`tableDesc.${table.name}`)}</p>
                          </div>

                          {/* Records */}
                          <div className="text-right shrink-0">
                            <div className="text-sm font-mono font-semibold text-slate-900">
                              {table.records > 0 ? table.records.toLocaleString("pt-BR") : "-"}
                            </div>
                            <div className="text-[10px] text-slate-400">{t("esquema.records")}</div>
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
            {t("esquema.relationships")}
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
