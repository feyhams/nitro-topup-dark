import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}

export const CategoryCard = ({ title, description, icon: Icon, onClick, className }: CategoryCardProps) => {
  return (
    <Card 
      className={`p-6 cursor-pointer glass-card transition-all duration-300 hover:scale-[1.02] ${className}`}
      onClick={onClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-primary/10 border border-primary/30">
          <Icon className="w-8 h-8 text-neon-cyan" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-heading font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </Card>
  );
};