import React from "react";
import { Button } from "@/components/ui/button";
import { Verified, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { formatPrice } from "@/lib/utils";
import { useUser } from "@/contexts/UserContext";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  farmer: string;
  location: string;
}

interface FeaturedProductsProps {
  fullCatalog?: boolean;
}

export const FeaturedProducts = ({
  fullCatalog = false,
}: FeaturedProductsProps) => {
  const { addToCart } = useCart();
  const { user } = useUser();

  const allProducts: Product[] = [
    {
      id: "trout-001",
      name: "Fillet Ikan Trout Pelangi",
      price: 12.99 * 15000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFhqarf-YcRhUdVaqN_4CJvF91bAMWrmBqjQ&s",
      farmer: "Peternakan ",
      location: "Springfield, OR",
    },
    {
      id: "tilapia-002",
      name: "Ikan Tilapia Segar",
      price: 9.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1594044534949-28737ddc9e94?w=500&auto=format&fit=crop&q=80",
      farmer: "Budidaya Sungai Biru",
      location: "Portland, OR",
    },
    {
      id: "catfish-003",
      name: "Fillet Ikan Lele",
      price: 10.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1565529197662-af732fb4a1ff?w=500&auto=format&fit=crop&q=80",
      farmer: "Peternakan Riverside",
      location: "Eugene, OR",
    },
    {
      id: "salmon-004",
      name: "Ikan Salmon Steelhead",
      price: 15.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=500&auto=format&fit=crop&q=80",
      farmer: "Perikanan Arus Gunung",
      location: "Bend, OR",
    },
    {
      id: "carp-005",
      name: "Ikan Mas Segar",
      price: 8.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1611704067869-5af327381cac?w=500&auto=format&fit=crop&q=80",
      farmer: "Kolam Ikan Sejahtera",
      location: "Banda Aceh, ID",
    },
    {
      id: "seabass-006",
      name: "Kakap Putih Premium",
      price: 18.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1573093092871-46ef4ab2b52c?w=500&auto=format&fit=crop&q=80",
      farmer: "Peternakan Laut Biru",
      location: "Bali, ID",
    },
    {
      id: "tuna-007",
      name: "Tuna Sirip Kuning",
      price: 22.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1544551763-92ab472cad5f?w=500&auto=format&fit=crop&q=80",
      farmer: "Nelayan Samudera",
      location: "Ambon, ID",
    },
    {
      id: "cod-008",
      name: "Ikan Kod Segar",
      price: 14.99 * 15000,
      image:
        "https://images.unsplash.com/photo-1559376767-54104ae6eb97?w=500&auto=format&fit=crop&q=80",
      farmer: "Peternakan Teluk Biru",
      location: "Manado, ID",
    },
  ];

  // Show only first 4 products on home page
  const products = fullCatalog ? allProducts : allProducts.slice(0, 4);

  const handleAddToCart = (product: Product) => {
    if (!user) {
      toast.error("Silakan masuk untuk menambahkan produk ke keranjang");
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      farmer: product.farmer,
    });
  };

  const getFallbackImage = () => {
    return "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=500&auto=format&fit=crop&q=80";
  };

  return (
    <div id="products" className={fullCatalog ? "" : "bg-gray-50 py-16"}>
      <div className="section-container">
        {!fullCatalog && (
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="section-title">Produk Unggulan</h2>
            <p className="section-subtitle">
              Jelajahi pilihan ikan yang baru dipanen dari peternakan lokal,
              semuanya bersumber secara berkelanjutan dan dikirim dengan
              kesegaran terbaik.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="card opacity-0 animate-fade-in rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-all"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div
                className="h-48 bg-gray-200 relative pointer-events-none"
                style={{
                  backgroundImage: `url('${
                    product.image || getFallbackImage()
                  }')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 text-green-600 rounded-full px-2 py-1 text-xs font-medium flex items-center space-x-1">
                    <Verified className="h-3 w-3" />
                    <span>Terverifikasi</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>

                <p className="text-gray-500 text-sm mb-3">
                  Oleh {product.farmer} • {product.location}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">
                    {formatPrice(product.price)}
                  </span>
                  <Button
                    variant="outline"
                    className="hover:bg-ocean hover:text-white"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Tambah
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!fullCatalog && (
          <div className="text-center mt-12">
            <Link to="/products">
              <Button className="bg-ocean hover:bg-ocean-dark">
                Lihat Semua Produk
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
