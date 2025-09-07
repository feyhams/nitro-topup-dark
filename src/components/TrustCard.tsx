import { Card } from "@/components/ui/card";
import { Shield, Users, Clock, Award } from "lucide-react";

export const TrustCard = () => {
  const trustMetrics = [
    {
      icon: Users,
      value: "1M+",
      label: "Pengguna Aktif",
      color: "text-neon-cyan"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: "Tingkat Keberhasilan",
      color: "text-success"
    },
    {
      icon: Clock,
      value: "< 5 detik",
      label: "Waktu Proses",
      color: "text-neon-blue"
    },
    {
      icon: Award,
      value: "5 Tahun",
      label: "Pengalaman",
      color: "text-neon-purple"
    }
  ];

  return (
    <div className="sticky top-24">
      <Card className="p-6 glass-card">
        <div className="text-center mb-6">
          <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
            Mengapa Pilih Gilz<span className="text-neon-cyan">Go</span>?
          </h3>
          <p className="text-sm text-muted-foreground">
            Platform terpercaya untuk semua kebutuhan top-up Anda
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {trustMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="text-center p-3 rounded-lg bg-background/30 border border-border/30 hover:border-primary/30 transition-all duration-200"
              >
                <div className="flex justify-center mb-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Icon className={`w-4 h-4 ${metric.color}`} />
                  </div>
                </div>
                <div className={`text-lg font-bold ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 pt-6 border-t border-border/30">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-success" />
            <span>Dilindungi SSL & Diawasi OJK</span>
          </div>
        </div>
      </Card>
    </div>
  );
};