interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md";
}

const statusConfig: Record<string, { label: string; classes: string }> = {
  confirmed: { label: "Confirmado", classes: "bg-green-50 text-green-700 border-green-200" },
  pending: { label: "Pendente", classes: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  cancelled: { label: "Cancelado", classes: "bg-red-50 text-red-700 border-red-200" },
  in_progress: { label: "Em Andamento", classes: "bg-blue-50 text-blue-700 border-blue-200" },
  paid: { label: "Pago", classes: "bg-green-50 text-green-700 border-green-200" },
  refunded: { label: "Reembolsado", classes: "bg-slate-50 text-slate-600 border-slate-200" },
  success: { label: "Sucesso", classes: "bg-green-50 text-green-700 border-green-200" },
  warning: { label: "Alerta", classes: "bg-yellow-50 text-yellow-700 border-yellow-200" },
  error: { label: "Erro", classes: "bg-red-50 text-red-700 border-red-200" },
  active: { label: "Ativo", classes: "bg-green-50 text-green-700 border-green-200" },
  planned: { label: "Planejado", classes: "bg-slate-50 text-slate-600 border-slate-200" },
  online: { label: "Online", classes: "bg-green-50 text-green-700 border-green-200" },
  offline: { label: "Offline", classes: "bg-slate-50 text-slate-500 border-slate-200" },
};

export default function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const config = statusConfig[status] || { label: status, classes: "bg-slate-50 text-slate-600 border-slate-200" };

  return (
    <span
      className={`inline-flex items-center border rounded-full font-medium ${config.classes} ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
    >
      {config.label}
    </span>
  );
}
