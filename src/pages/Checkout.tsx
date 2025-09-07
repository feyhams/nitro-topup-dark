import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Shield, Lock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PaymentMethods } from "@/components/PaymentMethods";
import { useToast } from "@/hooks/use-toast";

export default function Checkout() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [customerData, setCustomerData] = useState({
    phone: "",
    email: "",
    playerID: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Order Submitted",
      description: "Your transaction is being processed.",
    });
    navigate("/history");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
            <p className="text-muted-foreground">Complete your transaction</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-dark border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Order Details</h3>
              <div className="flex justify-between items-center p-4 bg-secondary/30 rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Telkomsel 5K</p>
                  <p className="text-sm text-neon-blue">Bonus 2GB</p>
                </div>
                <p className="text-xl font-bold text-neon-cyan">Rp 5.000</p>
              </div>
            </Card>

            {/* Customer Information */}
            <Card className="p-6 bg-gradient-dark border-border/50">
              <h3 className="text-lg font-semibold mb-4 text-foreground">Customer Information</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="081234567890"
                    value={customerData.phone}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, phone: e.target.value }))}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">Email (Optional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={customerData.email}
                    onChange={(e) => setCustomerData(prev => ({ ...prev, email: e.target.value }))}
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>
              </form>
            </Card>

            <PaymentMethods />

            <Button type="submit" variant="neon" size="lg" className="w-full" onClick={handleSubmit}>
              <Lock className="w-4 h-4 mr-2" />
              Complete Payment
            </Button>
          </div>

          {/* Security Info */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-dark border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-neon-cyan" />
                <h3 className="text-lg font-semibold text-foreground">Secure Transaction</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Trusted Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-sm text-muted-foreground">Instant Delivery</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-dark border-border/50">
              <h4 className="font-semibold mb-3 text-foreground">Total Summary</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Product</span>
                  <span className="text-foreground">Rp 5.000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Admin Fee</span>
                  <span className="text-foreground">Rp 0</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between font-bold">
                  <span className="text-foreground">Total</span>
                  <span className="text-neon-cyan">Rp 5.000</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}