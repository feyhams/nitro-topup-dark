import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  selectedProvider?: string;
  onProviderChange?: (provider: string) => void;
  providers?: string[];
  priceRange?: string;
  onPriceRangeChange?: (range: string) => void;
}

export const FilterBar = ({
  searchValue,
  onSearchChange,
  selectedProvider,
  onProviderChange,
  providers = [],
  priceRange,
  onPriceRangeChange,
}: FilterBarProps) => {
  const priceRanges = [
    { label: "Semua Harga", value: "all" },
    { label: "< 10K", value: "under-10k" },
    { label: "10K - 50K", value: "10k-50k" },
    { label: "> 50K", value: "over-50k" },
  ];

  return (
    <div className="space-y-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Cari produk atau provider..."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
        />
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 shrink-0">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium text-muted-foreground">Filter:</span>
        </div>

        {/* Provider Filter */}
        {providers.length > 0 && (
          <div className="flex gap-2">
            <Badge
              variant={selectedProvider === "all" ? "default" : "secondary"}
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => onProviderChange?.("all")}
            >
              Semua Provider
            </Badge>
            {providers.map((provider) => (
              <Badge
                key={provider}
                variant={selectedProvider === provider ? "default" : "secondary"}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onProviderChange?.(provider)}
              >
                {provider}
              </Badge>
            ))}
          </div>
        )}

        {/* Price Range Filter */}
        {onPriceRangeChange && (
          <div className="flex gap-2 border-l border-border/50 pl-4">
            {priceRanges.map((range) => (
              <Badge
                key={range.value}
                variant={priceRange === range.value ? "default" : "secondary"}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => onPriceRangeChange(range.value)}
              >
                {range.label}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};