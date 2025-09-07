import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const productData = {
  mobile: [
    { id: 1, name: "Telkomsel 5K", price: 5000, provider: "Telkomsel", bonus: "Bonus 2GB", popular: true },
    { id: 2, name: "Telkomsel 10K", price: 10000, provider: "Telkomsel", bonus: "Bonus 5GB", popular: false },
    { id: 3, name: "XL 5K", price: 5000, provider: "XL", bonus: "Bonus 1GB", popular: false },
    { id: 4, name: "Indosat 15K", price: 15000, provider: "Indosat", bonus: "Bonus 7GB", popular: true },
  ],
  electricity: [
    { id: 5, name: "PLN 20K", price: 20000, provider: "PLN", bonus: "Token 20.000", popular: true },
    { id: 6, name: "PLN 50K", price: 50000, provider: "PLN", bonus: "Token 50.000", popular: false },
    { id: 7, name: "PLN 100K", price: 100000, provider: "PLN", bonus: "Token 100.000", popular: true },
  ],
  data: [
    { id: 8, name: "Telkomsel 3GB", price: 25000, provider: "Telkomsel", bonus: "30 Days", popular: true },
    { id: 9, name: "XL 5GB", price: 35000, provider: "XL", bonus: "30 Days", popular: false },
    { id: 10, name: "Indosat 10GB", price: 50000, provider: "Indosat", bonus: "30 Days", popular: true },
  ],
  games: [
    { id: 11, name: "Mobile Legends 86 Diamond", price: 20000, provider: "Moonton", bonus: "Instant", popular: true },
    { id: 12, name: "Free Fire 70 Diamond", price: 15000, provider: "Garena", bonus: "Instant", popular: false },
    { id: 13, name: "Steam Wallet 50K", price: 50000, provider: "Steam", bonus: "Global", popular: true },
  ],
};

export default function Products() {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const products = productData[category as keyof typeof productData] || [];
  const categoryName = {
    mobile: "Mobile Credit",
    electricity: "Electricity Tokens",
    data: "Data Packages",
    games: "Game Vouchers"
  }[category as string] || "Products";

  const handleSelectProduct = (productId: number) => {
    setSelectedProduct(productId);
    navigate(`/checkout/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{categoryName}</h1>
            <p className="text-muted-foreground">Choose your preferred option</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="p-6 hover-glow cursor-pointer bg-gradient-dark border-border/50 transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleSelectProduct(product.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-neon-cyan" />
                  <span className="text-sm font-medium text-muted-foreground">{product.provider}</span>
                </div>
                {product.popular && (
                  <Badge className="bg-gradient-accent text-accent-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </Badge>
                )}
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                <p className="text-neon-blue text-sm">{product.bonus}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neon-cyan">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <Button variant="neon" size="sm">
                    Select
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}