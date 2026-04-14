"use client";

import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-slate-900 text-slate-400 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>
          {t("footer.preparedFor")}{" "}
          <span className="text-white font-semibold">Renato Pereira</span> - Sulnex |{" "}
          <span className="text-accent-400 font-semibold">BearPlex Technologies</span> | {t("footer.date")}
        </p>
      </div>
    </footer>
  );
}
