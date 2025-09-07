import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFilterChange: (filter: string) => void;
}

export const SearchBar = ({ value, onChange, onFilterChange }: SearchBarProps) => {
  return (
    <div className="flex gap-3 w-full max-w-2xl">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          type="text"
          placeholder="Search products, games, or providers..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="pl-10 bg-secondary/50 border-border focus:border-primary focus:ring-1 focus:ring-primary"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" className="bg-secondary/50 border-border hover:bg-secondary">
            <Filter className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-card border-border">
          <DropdownMenuItem onClick={() => onFilterChange("all")}>
            All Categories
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onFilterChange("mobile")}>
            Mobile Credit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onFilterChange("electricity")}>
            Electricity
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onFilterChange("data")}>
            Data Packages
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => onFilterChange("games")}>
            Game Vouchers
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};