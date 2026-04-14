"use client";

import { useI18n } from "@/i18n/context";

interface StatusBadgeProps {
  status: string;
  size?: "sm" | "md";
}

const statusClasses: Record<string, string> = {
  confirmed: "bg-green-50 text-green-700 border-green-200",
  pending: "bg-yellow-50 text-yellow-700 border-yellow-200",
  cancelled: "bg-red-50 text-red-700 border-red-200",
  in_progress: "bg-blue-50 text-blue-700 border-blue-200",
  paid: "bg-green-50 text-green-700 border-green-200",
  refunded: "bg-slate-50 text-slate-600 border-slate-200",
  success: "bg-green-50 text-green-700 border-green-200",
  warning: "bg-yellow-50 text-yellow-700 border-yellow-200",
  error: "bg-red-50 text-red-700 border-red-200",
  active: "bg-green-50 text-green-700 border-green-200",
  planned: "bg-slate-50 text-slate-600 border-slate-200",
  online: "bg-green-50 text-green-700 border-green-200",
  offline: "bg-slate-50 text-slate-500 border-slate-200",
};

export default function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const { t } = useI18n();

  const classes = statusClasses[status] || "bg-slate-50 text-slate-600 border-slate-200";
  const label = t(`status.${status}`);
  // If translation returns the key itself, fall back to the raw status
  const displayLabel = label.startsWith("status.") ? status : label;

  return (
    <span
      className={`inline-flex items-center border rounded-full font-medium ${classes} ${
        size === "sm" ? "px-2.5 py-0.5 text-xs" : "px-3 py-1 text-sm"
      }`}
    >
      {displayLabel}
    </span>
  );
}
