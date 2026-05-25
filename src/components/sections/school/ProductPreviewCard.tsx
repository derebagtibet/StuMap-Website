import { ClipboardList } from "lucide-react";
import { clsx } from "clsx";

export type PreviewVariant = "dashboard" | "bulk" | "reports" | "guidance";

const previewRows: Record<PreviewVariant, string[]> = {
  dashboard: ["Kurum Paneli", "Sınıf Durumu", "Aktif Öğrenciler"],
  bulk: ["Toplu Aktarım", "Sınıf Eşleştirme", "Görev Atama"],
  reports: ["Katılım Analizi", "Kariyer Eğilimleri", "Gelişim Özeti"],
  guidance: ["Görüşme Planı", "Öğrenci Notları", "Takip Önceliği"]
};

const previewStats: Record<PreviewVariant, string[]> = {
  dashboard: ["84%", "216", "12"],
  bulk: ["320", "18", "6"],
  reports: ["92%", "4.8", "38"],
  guidance: ["24", "16", "7"]
};

export const ProductPreviewCard = ({ variant }: { variant: PreviewVariant }) => {
  const rows = previewRows[variant];
  const stats = previewStats[variant];

  return (
    <div className="mt-auto flex w-full justify-center pt-8" aria-hidden="true">
      <div className="w-full max-w-[28rem] overflow-hidden rounded-[1.35rem] border border-[#D9DDFE] bg-white shadow-[0_18px_46px_rgba(6,27,78,0.08)]">
        <div className="flex items-center justify-between border-b border-[#D9DDFE] bg-[#F7F6FF] px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#16B364]" />
          </div>
          <ClipboardList className="h-4 w-4 text-primary/70" />
        </div>

        <div className="space-y-4 p-5">
          <div className="grid grid-cols-3 gap-3">
            {stats.map((stat, index) => (
              <div
                key={`${variant}-stat-${stat}`}
                className={clsx(
                  "rounded-2xl border border-[#E6E8FF] px-3 py-3 text-center",
                  index === 0 ? "bg-primary text-white" : "bg-[#FAFAFF] text-dark"
                )}
              >
                <div className="text-lg font-extrabold leading-none">{stat}</div>
                <div
                  className={clsx(
                    "mt-2 h-1.5 rounded-full",
                    index === 0 ? "bg-white/55" : "bg-primary/15"
                  )}
                />
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {rows.map((row, index) => (
              <div
                key={`${variant}-row-${row}`}
                className="flex items-center gap-3 rounded-2xl bg-[#F8F8FF] px-4 py-3"
              >
                <span
                  className={clsx(
                    "h-9 w-9 shrink-0 rounded-xl",
                    index === 0 && "bg-primary/15",
                    index === 1 && "bg-accent/15",
                    index === 2 && "bg-[#16B364]/15"
                  )}
                />
                <div className="min-w-0 flex-1">
                  <div className="h-2.5 w-3/5 rounded-full bg-dark/18" />
                  <div className="mt-2 h-2 w-4/5 rounded-full bg-dark/10" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
