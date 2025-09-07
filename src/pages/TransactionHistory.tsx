import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, CheckCircle, XCircle, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const transactions = [
  {
    id: "TRX001",
    product: "Telkomsel 5K",
    amount: 5000,
    status: "completed",
    date: "2024-01-15 14:30",
    phone: "081234567890"
  },
  {
    id: "TRX002",
    product: "PLN 50K",
    amount: 50000,
    status: "pending",
    date: "2024-01-15 13:15",
    phone: "081234567890"
  },
  {
    id: "TRX003",
    product: "Mobile Legends 86 Diamond",
    amount: 20000,
    status: "failed",
    date: "2024-01-14 20:45",
    phone: "081234567890"
  },
  {
    id: "TRX004",
    product: "XL 5GB Data",
    amount: 35000,
    status: "completed",
    date: "2024-01-14 16:20",
    phone: "081234567890"
  }
];

export default function TransactionHistory() {
  const navigate = useNavigate();
  const [statusFilter, setStatusFilter] = useState("all");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-success/20 text-success border-success/30">
            <CheckCircle className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "pending":
        return (
          <Badge className="bg-warning/20 text-warning border-warning/30">
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </Badge>
        );
      case "failed":
        return (
          <Badge className="bg-destructive/20 text-destructive border-destructive/30">
            <XCircle className="w-3 h-3 mr-1" />
            Failed
          </Badge>
        );
      default:
        return null;
    }
  };

  const filteredTransactions = statusFilter === "all" 
    ? transactions 
    : transactions.filter(t => t.status === statusFilter);

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
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">Transaction History</h1>
            <p className="text-muted-foreground">Track all your transactions</p>
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40 bg-secondary/50 border-border">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="p-6 bg-gradient-dark border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-muted-foreground">{transaction.id}</span>
                    {getStatusBadge(transaction.status)}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{transaction.product}</h3>
                  <p className="text-sm text-muted-foreground">
                    To: {transaction.phone} • {transaction.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-neon-cyan">
                    Rp {transaction.amount.toLocaleString('id-ID')}
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Details
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <Card className="p-12 text-center bg-gradient-dark border-border/50">
            <p className="text-muted-foreground">No transactions found for the selected filter.</p>
          </Card>
        )}
      </div>
    </div>
  );
}