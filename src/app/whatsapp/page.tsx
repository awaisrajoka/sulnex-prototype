"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { whatsappTemplates } from "@/lib/data";
import {
  MessageCircle,
  CheckCheck,
  Send,
  Bot,
  ArrowRight,
  Smartphone,
  Zap,
  Router,
} from "lucide-react";

const flowSteps = [
  {
    step: 1,
    label: "Agendamento",
    description: "Paciente agenda consulta (portal ou WhatsApp)",
    icon: "calendar",
    color: "bg-blue-500",
  },
  {
    step: 2,
    label: "Confirmação",
    description: "Sistema envia confirmação automática",
    icon: "send",
    color: "bg-green-500",
  },
  {
    step: 3,
    label: "Lembrete 48h",
    description: "Lembrete enviado 48 horas antes",
    icon: "clock",
    color: "bg-yellow-500",
  },
  {
    step: 4,
    label: "Lembrete 24h",
    description: "Lembrete final com instrução de CHEGUEI",
    icon: "alert",
    color: "bg-orange-500",
  },
  {
    step: 5,
    label: "Confirma",
    description: 'Paciente responde "1" para confirmar',
    icon: "check",
    color: "bg-teal-500",
  },
  {
    step: 6,
    label: "Check-in",
    description: 'Paciente envia "CHEGUEI" na recepção',
    icon: "checkin",
    color: "bg-emerald-500",
  },
];

// Phone mockup messages for the conversation demo
const conversationMessages = [
  { from: "system", text: "Olá Maria! Sua consulta está confirmada:\n14/04/2026 às 08:00\nDr. Rafael Mendes\nClínica Bem Estar\n\nResponda:\n1 - Confirmar\n2 - Reagendar\n3 - Cancelar", time: "12/04 10:30", status: "read" },
  { from: "patient", text: "1", time: "12/04 10:32", status: "read" },
  { from: "system", text: "Consulta confirmada! Você receberá um lembrete antes da consulta.", time: "12/04 10:32", status: "read" },
  { from: "system", text: "Olá Maria! Lembrete: sua consulta é em 2 dias!\n14/04 às 08:00\nDr. Rafael Mendes\n\nResponda 1 para confirmar presença.", time: "12/04 10:00", status: "read" },
  { from: "system", text: "Olá Maria! Sua consulta é AMANHÃ!\n14/04 às 08:00\nDr. Rafael Mendes\nRua Augusta, 1234 - São Paulo\n\nEnvie CHEGUEI quando estiver na clínica.", time: "13/04 08:00", status: "read" },
  { from: "patient", text: "CHEGUEI", time: "14/04 07:52", status: "read" },
  { from: "system", text: "Check-in confirmado, Maria!\n\nVocê está na posição 1 da fila.\nTempo estimado: 8 minutos.\n\nAguarde ser chamada.", time: "14/04 07:52", status: "delivered" },
];

export default function WhatsappPage() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-medium text-green-700 mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            WhatsApp Business API
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Fluxo de Automação WhatsApp</h1>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Visualização completa do ciclo automatizado de comunicação com pacientes,
            do agendamento ao check-in na clínica.
          </p>
        </div>

        {/* Flow Steps */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 mb-8">
          <h2 className="font-semibold text-lg text-slate-900 mb-6 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-600" />
            Jornada Automatizada do Paciente
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-2 lg:gap-0">
            {flowSteps.map((step, idx) => (
              <div key={step.step} className="flex items-center">
                <div className="flex flex-col items-center w-32 lg:w-36">
                  <div className={`w-12 h-12 ${step.color} rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg mb-2`}>
                    {step.step}
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 text-center">{step.label}</h3>
                  <p className="text-xs text-slate-500 text-center mt-0.5 leading-tight">{step.description}</p>
                </div>
                {idx < flowSteps.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-slate-300 mx-1 shrink-0 hidden lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Phone Mockup */}
          <div className="flex justify-center">
            <div className="w-80">
              <h2 className="font-semibold text-lg text-slate-900 mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-green-600" />
                Conversa Simulada
              </h2>
              <div className="bg-slate-900 rounded-[2.5rem] p-3 shadow-2xl">
                <div className="bg-[#ECE5DD] rounded-[2rem] overflow-hidden">
                  {/* WhatsApp Header */}
                  <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">Clínica Bem Estar</div>
                      <div className="text-[10px] text-green-200">online</div>
                    </div>
                  </div>
                  {/* Messages */}
                  <div className="p-3 space-y-2 h-[28rem] overflow-y-auto">
                    {conversationMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`flex ${msg.from === "patient" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[85%] rounded-lg px-3 py-2 ${
                            msg.from === "patient"
                              ? "bg-[#DCF8C6] rounded-tr-none"
                              : "bg-white rounded-tl-none"
                          }`}
                        >
                          <p className="text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                            {msg.text}
                          </p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-slate-400">{msg.time}</span>
                            {msg.from === "system" && (
                              <CheckCheck className={`w-3 h-3 ${msg.status === "read" ? "text-blue-500" : "text-slate-400"}`} />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Templates & MSG-ROUTER */}
          <div className="space-y-6">
            {/* MSG-ROUTER */}
            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <Router className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">MSG-ROUTER</h3>
                  <p className="text-green-100 text-xs">Roteador Inteligente de Mensagens</p>
                </div>
              </div>
              <p className="text-sm text-green-100 mb-4 leading-relaxed">
                O MSG-ROUTER é o componente central que recebe todas as mensagens de entrada,
                classifica a intenção do paciente e encaminha para o fluxo n8n correto automaticamente.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Entrada", desc: "Webhook WhatsApp" },
                  { label: "Classificação", desc: "Regex + Keywords" },
                  { label: "Roteamento", desc: "8 fluxos n8n" },
                  { label: "Fallback", desc: "Fila humana" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs font-semibold">{item.label}</div>
                    <div className="text-xs text-green-200">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Template Previews */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-5 border-b border-slate-100">
                <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                  <Send className="w-4 h-4 text-green-600" />
                  8 Templates de Mensagem
                </h2>
              </div>
              <div className="divide-y divide-slate-50">
                {whatsappTemplates.map((tmpl, idx) => (
                  <button
                    key={tmpl.id}
                    onClick={() => setSelectedTemplate(idx)}
                    className={`w-full text-left px-5 py-3.5 hover:bg-slate-50 transition-colors ${
                      selectedTemplate === idx ? "bg-green-50/50 border-l-4 border-green-500" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-medium text-slate-900">{tmpl.name}</div>
                        <div className="text-xs text-slate-400 mt-0.5">Gatilho: {tmpl.trigger}</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Template Preview */}
            {whatsappTemplates[selectedTemplate] && (
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
                <h3 className="font-semibold text-sm text-slate-900 mb-3">
                  Preview: {whatsappTemplates[selectedTemplate].name}
                </h3>
                <div className="bg-[#ECE5DD] rounded-lg p-4">
                  <div className="bg-white rounded-lg px-3 py-2 max-w-[90%] shadow-sm">
                    <p className="text-xs text-slate-800 whitespace-pre-line leading-relaxed">
                      {whatsappTemplates[selectedTemplate].message}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-slate-400">10:30</span>
                      <CheckCheck className="w-3 h-3 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
