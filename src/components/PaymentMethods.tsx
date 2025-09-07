import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const paymentMethods = [
  { name: "QRIS", logo: "🏦", type: "QR Code" },
  { name: "OVO", logo: "💙", type: "E-Wallet" },
  { name: "DANA", logo: "💚", type: "E-Wallet" },
  { name: "ShopeePay", logo: "🧡", type: "E-Wallet" },
  { name: "Bank Transfer", logo: "🏛️", type: "Transfer" },
  { name: "GoPay", logo: "💚", type: "E-Wallet" },
];

export const PaymentMethods = () => {
  return (
    <Card className="p-6 glass-card">
      <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">Payment Methods</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {paymentMethods.map((method) => (
          <div
            key={method.name}
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 border border-border/30 hover:border-primary/50 transition-colors cursor-pointer"
          >
            <span className="text-2xl">{method.logo}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{method.name}</p>
              <Badge variant="secondary" className="text-xs">
                {method.type}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};