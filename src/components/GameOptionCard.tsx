import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Clock } from "lucide-react";

interface GameOptionCardProps {
  id: number;
  name: string;
  price: number;
  provider: string;
  bonus: string;
  popular?: boolean;
  discount?: number;
  deliveryTime?: string;
  onClick: () => void;
}

export const GameOptionCard = ({
  id,
  name,
  price,
  provider,
  bonus,
  popular = false,
  discount,
  deliveryTime = "Instan",
  onClick,
}: GameOptionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const discountedPrice = discount ? price - (price * discount / 100) : price;

  return (
    <Card
      className="group relative overflow-hidden bg-gradient-dark border-border/50 hover:border-primary/30 transition-all duration-300 cursor-pointer animate-scale-in"
      style={{ animationDelay: `${id * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      {/* Popular Badge */}
      {popular && (
        <div className="absolute top-3 right-3 z-10">
          <Badge className="bg-gradient-accent text-white border-0 px-3 py-1 animate-glow">
            <Star className="w-3 h-3 mr-1" />
            Populer
          </Badge>
        </div>
      )}

      {/* Discount Badge */}
      {discount && (
        <div className="absolute top-3 left-3 z-10">
          <Badge className="bg-warning text-warning-foreground border-0 px-3 py-1">
            -{discount}%
          </Badge>
        </div>
      )}

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-neon-cyan" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">{provider}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" />
            {deliveryTime}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-neon-blue">{bonus}</p>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            {discount && (
              <span className="text-xs text-muted-foreground line-through">
                Rp {price.toLocaleString('id-ID')}
              </span>
            )}
            <div className="text-xl font-bold text-neon-cyan">
              Rp {discountedPrice.toLocaleString('id-ID')}
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            className={`border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 ${
              isHovered ? "scale-105 shadow-lg shadow-primary/20" : ""
            }`}
          >
            Pilih
          </Button>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300 pointer-events-none" />
    </Card>
  );
};