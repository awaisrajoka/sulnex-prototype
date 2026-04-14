"use client";

import Link from "next/link";
import {
  Stethoscope,
  ClipboardList,
  UserCog,
  ShieldCheck,
  MessageCircle,
  Workflow,
  Database,
  ArrowRight,
  Sparkles,
  Zap,
  Globe,
  Lock,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/context";

export default function Home() {
  const { t } = useI18n();

  const portals = [
    {
      title: t("landing.portalReception"),
      description: t("landing.portalReceptionDesc"),
      href: "/recepcao",
      icon: ClipboardList,
      gradient: "from-blue-500 to-blue-700",
      stats: t("landing.portalReceptionStat"),
    },
    {
      title: t("landing.portalDoctor"),
      description: t("landing.portalDoctorDesc"),
      href: "/medico",
      icon: Stethoscope,
      gradient: "from-teal-500 to-teal-700",
      stats: t("landing.portalDoctorStat"),
    },
    {
      title: t("landing.portalAdmin"),
      description: t("landing.portalAdminDesc"),
      href: "/admin",
      icon: UserCog,
      gradient: "from-purple-500 to-purple-700",
      stats: t("landing.portalAdminStat"),
    },
  ];

  const extraPages = [
    {
      title: t("landing.whatsappFlow"),
      description: t("landing.whatsappFlowDesc"),
      href: "/whatsapp",
      icon: MessageCircle,
      color: "text-green-600 bg-green-50",
    },
    {
      title: t("landing.automationPipeline"),
      description: t("landing.automationPipelineDesc"),
      href: "/automacoes",
      icon: Workflow,
      color: "text-orange-600 bg-orange-50",
    },
    {
      title: t("landing.databaseSchema"),
      description: t("landing.databaseSchemaDesc"),
      href: "/esquema",
      icon: Database,
      color: "text-slate-600 bg-slate-50",
    },
  ];

  const stats = [
    { label: t("landing.statsPortals"), value: "3", icon: Globe },
    { label: t("landing.statsTables"), value: "20+", icon: Database },
    { label: t("landing.statsModules"), value: "7", icon: Workflow },
    { label: t("landing.statsAutomations"), value: "30+", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-[#0B3D5B] to-primary-800" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent-400 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                <Stethoscope className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                Sul<span className="text-accent-300">nex</span>
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl mx-auto leading-tight">
              {t("landing.heroSubtitle")}
              <br />
              <span className="text-accent-300">{t("landing.heroHighlight")}</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
              {t("landing.heroDescription")}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-4 border border-white/10"
                  >
                    <Icon className="w-5 h-5 text-accent-300 mx-auto mb-1" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-blue-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400/20 backdrop-blur-sm border border-amber-300/30 rounded-full text-sm text-amber-100">
              <Sparkles className="w-4 h-4" />
              {t("landing.interactivePrototype")}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60V20C240 0 480 40 720 30C960 20 1200 0 1440 20V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Main Portals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-accent-500 uppercase tracking-wider mb-2">
            {t("landing.accessPortals")}
          </h3>
          <h2 className="text-3xl font-bold text-slate-900">
            {t("landing.threeExperiences")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {portals.map((portal) => {
            const Icon = portal.icon;
            return (
              <Link
                key={portal.href}
                href={portal.href}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-slate-300 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${portal.gradient} rounded-xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{portal.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{portal.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
                    {portal.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-accent-500 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Extra Pages */}
        <div className="grid md:grid-cols-3 gap-4">
          {extraPages.map((page) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.href}
                href={page.href}
                className="group flex items-start gap-4 bg-slate-50 rounded-xl p-5 hover:bg-white hover:shadow-md border border-transparent hover:border-slate-200 transition-all"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${page.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{page.title}</h4>
                  <p className="text-xs text-slate-500">{page.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{t("landing.techStack")}</h3>
            <p className="text-slate-500 text-sm">{t("landing.techStackDesc")}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: "Next.js 14", desc: t("landing.frontend") },
              { name: "Supabase", desc: "Database + Auth" },
              { name: "n8n", desc: t("landing.automation") },
              { name: "WhatsApp API", desc: t("landing.communication") },
              { name: "Tailwind CSS", desc: t("landing.designSystem") },
              { name: "Vercel", desc: t("landing.deploy") },
            ].map((tech) => (
              <div key={tech.name} className="bg-white rounded-xl p-4 text-center border border-slate-100 shadow-sm">
                <div className="font-semibold text-slate-900 text-sm">{tech.name}</div>
                <div className="text-xs text-slate-400 mt-0.5">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl p-8 sm:p-12 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{t("landing.securityTitle")}</h3>
          <p className="text-blue-100 text-sm max-w-lg mx-auto mb-6">
            {t("landing.securityDesc")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Multi-tenant", "RBAC", "Audit Log", "LGPD Ready", "Row Level Security"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs text-white font-medium"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg text-white">
              Sul<span className="text-accent-400">nex</span>
            </span>
          </div>
          <p className="text-sm">
            {t("footer.preparedFor")}{" "}
            <span className="text-white font-semibold">Renato Pereira</span> - Sulnex |{" "}
            <span className="text-accent-400 font-semibold">BearPlex Technologies</span> | {t("footer.date")}
          </p>
        </div>
      </footer>
    </div>
  );
}
