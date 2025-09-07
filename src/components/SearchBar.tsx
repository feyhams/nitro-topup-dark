import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router-dom";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ searchTerm, onSearchChange, placeholder = "Cari produk..." }: SearchBarProps) => {
  const navigate = useNavigate();

  const filterOptions = [
    { label: "Semua Produk", value: "all" },
    { label: "Pulsa & Data", value: "mobile" },
    { label: "Token PLN", value: "electricity" },
    { label: "Internet", value: "data" },
    { label: "Voucher Game", value: "games" },
  ];

  const handleFilterSelect = (category: string) => {
    if (category === "all") {
      onSearchChange("");
    } else {
      navigate(`/products/${category}`);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="relative w-full max-w-2xl">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground w-5 h-5 z-10" />
        <Input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-12 pr-14 py-4 text-lg glass-card border-0 focus:ring-2 focus:ring-primary/50 focus:border-transparent"
          aria-label="Search products"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-primary/10"
              aria-label="Filter products"
            >
              <Filter className="w-4 h-4 text-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="glass-card border-primary/30">
            {filterOptions.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => handleFilterSelect(option.value)}
                className="cursor-pointer hover:bg-primary/10"
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};