import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { User, Mail, Lock, History, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface AccountDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AccountDialog = ({ open, onOpenChange }: AccountDialogProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleHistoryClick = () => {
    onOpenChange(false);
    navigate("/history");
  };

  if (isLoggedIn) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md glass-card no-hover-lift">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Akun Saya
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">John Doe</h3>
                <p className="text-muted-foreground text-sm">john.doe@email.com</p>
              </div>
              <Badge className="bg-success/10 text-success border-success/20">
                Saldo: Rp 50.000
              </Badge>
            </div>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleHistoryClick}
              >
                <History className="w-4 h-4 mr-3" />
                Riwayat Transaksi
              </Button>
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={() => window.open("mailto:support@gilzpro.com")}
              >
                <HelpCircle className="w-4 h-4 mr-3" />
                Pusat Bantuan
              </Button>
            </div>
            
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={() => setIsLoggedIn(false)}
            >
              Keluar
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md glass-card no-hover-lift">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <User className="w-5 h-5" />
            Masuk ke Akun
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Masuk</TabsTrigger>
            <TabsTrigger value="register">Daftar</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email atau Nomor HP</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="Masukkan email atau nomor HP"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password"
                  className="mt-1"
                />
              </div>
              <Button 
                className="w-full bg-gradient-accent"
                onClick={() => setIsLoggedIn(true)}
              >
                <Lock className="w-4 h-4 mr-2" />
                Masuk
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="register" className="space-y-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="reg-email">Email</Label>
                <Input
                  id="reg-email"
                  type="email"
                  placeholder="Masukkan email"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="reg-phone">Nomor HP</Label>
                <Input
                  id="reg-phone"
                  type="tel"
                  placeholder="Masukkan nomor HP"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="reg-password">Password</Label>
                <Input
                  id="reg-password"
                  type="password"
                  placeholder="Masukkan password"
                  className="mt-1"
                />
              </div>
              <Button 
                className="w-full bg-gradient-accent"
                onClick={() => setIsLoggedIn(true)}
              >
                <Mail className="w-4 h-4 mr-2" />
                Daftar
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};