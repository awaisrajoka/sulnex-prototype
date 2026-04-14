"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown, Stethoscope } from "lucide-react";

const portals = [
  { name: "Recepção", href: "/recepcao", color: "text-blue-600" },
  { name: "Médico", href: "/medico", color: "text-teal-600" },
  { name: "Admin", href: "/admin", color: "text-purple-600" },
  { name: "WhatsApp", href: "/whatsapp", color: "text-green-600" },
  { name: "Automações", href: "/automacoes", color: "text-orange-600" },
  { name: "Esquema BD", href: "/esquema", color: "text-slate-600" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

          {/* Portal Selector Dropdown */}
          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-sm font-medium text-slate-700"
              >
                {currentPortal ? currentPortal.name : "Selecionar Portal"}
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
            {/* Prototype Badge */}
            <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700">
              Protótipo - Dados Simulados
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
          <div className="px-4 py-2 border-t border-slate-100">
            <div className="px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-medium text-amber-700 text-center">
              Protótipo - Dados Simulados
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
