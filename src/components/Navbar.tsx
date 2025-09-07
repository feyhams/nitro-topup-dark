import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, User, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Beranda", href: "/", icon: Zap },
    { label: "Riwayat", href: "/history", icon: History },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary group-hover:animate-glow">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              TopUp<span className="text-neon-cyan">Pro</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
              Saldo: Rp 50.000
            </Badge>
            <Button variant="outline" size="sm" className="border-primary/20 hover:bg-primary/10">
              <User className="w-4 h-4 mr-2" />
              Akun
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              <div className="px-4 py-3 space-y-3 border-t border-border/50 mt-3">
                <Badge variant="secondary" className="bg-success/10 text-success border-success/20 w-full justify-center">
                  Saldo: Rp 50.000
                </Badge>
                <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/10">
                  <User className="w-4 h-4 mr-2" />
                  Akun Saya
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};