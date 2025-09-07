import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/FilterBar";
import { GameOptionCard } from "@/components/GameOptionCard";
import { TrustCard } from "@/components/TrustCard";
import { HeadBanner } from "@/components/HeadBanner";

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
  const [searchValue, setSearchValue] = useState("");
  const [selectedProvider, setSelectedProvider] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  const products = productData[category as keyof typeof productData] || [];
  const categoryName = {
    mobile: "Pulsa & Paket Data",
    electricity: "Token PLN",
    data: "Paket Internet",
    games: "Voucher Game"
  }[category as string] || "Produk";

  const categoryDescription = {
    mobile: "Isi pulsa dan beli paket data dengan mudah",
    electricity: "Beli token PLN listrik prabayar",
    data: "Paket internet murah untuk semua operator",
    games: "Top-up game favorit dengan harga terbaik"
  }[category as string] || "Pilih produk yang Anda butuhkan";

  const categoryImages = {
    mobile: "/placeholder.svg",
    electricity: "/placeholder.svg", 
    data: "/placeholder.svg",
    games: "/placeholder.svg"
  };

  // Get unique providers for filter
  const providers = Array.from(new Set(products.map(p => p.provider)));

  // Filter products based on search and filters
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
                         product.provider.toLowerCase().includes(searchValue.toLowerCase());
    const matchesProvider = selectedProvider === "all" || product.provider === selectedProvider;
    
    let matchesPrice = true;
    if (priceRange === "under-10k") matchesPrice = product.price < 10000;
    else if (priceRange === "10k-50k") matchesPrice = product.price >= 10000 && product.price <= 50000;
    else if (priceRange === "over-50k") matchesPrice = product.price > 50000;

    return matchesSearch && matchesProvider && matchesPrice;
  });

  const handleSelectProduct = (productId: number) => {
    setSelectedProduct(productId);
    navigate(`/checkout/${productId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Head Banner */}
      <HeadBanner 
        imageUrl={categoryImages[category as keyof typeof categoryImages] || "/placeholder.svg"}
        title={categoryName}
        subtitle={categoryDescription}
        height="md"
      />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-in">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="hover:bg-secondary/50"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-display font-bold text-foreground mb-2">
              {categoryName}
            </h1>
            <p className="text-muted-foreground">{categoryDescription}</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
          <FilterBar
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            selectedProvider={selectedProvider}
            onProviderChange={setSelectedProvider}
            providers={providers}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} style={{ animationDelay: `${200 + index * 50}ms` }}>
                    <GameOptionCard
                      id={product.id}
                      name={product.name}
                      price={product.price}
                      provider={product.provider}
                      bonus={product.bonus}
                      popular={product.popular}
                      discount={product.popular ? 10 : undefined}
                      onClick={() => handleSelectProduct(product.id)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="text-muted-foreground mb-4">
                  <span className="text-4xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Produk tidak ditemukan
                </h3>
                <p className="text-muted-foreground">
                  Coba ubah kata kunci pencarian atau filter yang Anda gunakan
                </p>
              </div>
            )}
          </div>

          {/* Trust Card */}
          <div className="lg:col-span-1 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <TrustCard />
          </div>
        </div>
      </div>
    </div>
  );
}