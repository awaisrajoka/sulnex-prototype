"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Stethoscope } from "lucide-react";
import { useI18n } from "@/i18n/context";

const portalKeys = [
  { key: "recepcao", href: "/recepcao", color: "text-blue-600" },
  { key: "medico", href: "/medico", color: "text-teal-600" },
  { key: "admin", href: "/admin", color: "text-purple-600" },
  { key: "whatsapp", href: "/whatsapp", color: "text-green-600" },
  { key: "automacoes", href: "/automacoes", color: "text-orange-600" },
  { key: "esquema", href: "/esquema", color: "text-slate-600" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useI18n();

  const portals = portalKeys.map((p) => ({
    ...p,
    name: t(`nav.${p.key}`),
  }));

  const currentPortal = portals.find((p) => pathname.startsWith(p.href));

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-primary-500">
              Sul<span className="text-accent-500">nex</span>
            </span>
          </Link>

          {/* Portal Selector Dropdown + Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700"
              >
                {currentPortal ? currentPortal.name : t("nav.selectPortal")}
                <ChevronDown className="w-4 h-4" />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full mt-1 right-0 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50">
                  {portals.map((portal) => (
                    <Link
                      key={portal.href}
                      href={portal.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${
                        pathname.startsWith(portal.href)
                          ? "bg-primary-50 text-primary-500 font-semibold"
                          : "text-slate-700"
                      }`}
                    >
                      {portal.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-0.5">
              <button
                onClick={() => setLanguage("pt-BR")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === "pt-BR"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === "en"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                EN
              </button>
            </div>

            {/* Prototype Badge */}
            <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700">
              {t("nav.prototypeBadge")}
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {portals.map((portal) => (
              <Link
                key={portal.href}
                href={portal.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm ${
                  pathname.startsWith(portal.href)
                    ? "bg-primary-50 text-primary-500 font-semibold"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {portal.name}
              </Link>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-slate-100 flex items-center justify-between">
            <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700 text-center">
              {t("nav.prototypeBadge")}
            </div>
            {/* Mobile Language Toggle */}
            <div className="flex items-center bg-slate-100 rounded-full p-0.5">
              <button
                onClick={() => setLanguage("pt-BR")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === "pt-BR"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  language === "en"
                    ? "bg-white text-primary-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
