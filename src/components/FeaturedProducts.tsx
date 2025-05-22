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
        "https://media.istockphoto.com/id/1384079782/photo/tilapia-in-the-tank-with-blur-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=RYmZZv5szR7zk5__v8eRAeSISP9AjA8BG7VRo1lAMB4=",
      farmer: "Budidaya Sungai Biru",
      location: "Portland, OR",
    },
    {
      id: "catfish-003",
      name: "Fillet Ikan Lele",
      price: 10.99 * 15000,
      image:
        "https://asset.kompas.com/crops/GvrHjuLvoaqPRA3MbYlXsNZWx3A=/100x67:900x600/1200x800/data/photo/2022/11/21/637aff41117d4.jpg",
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
      name: "Fillet ikan nila",
      price: 8.99 * 15000,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEaepi36AY7lF9CanJPyd5RWB_FvaOrQu2aQ&s",
      farmer: "Kolam Ikan Sejahtera",
      location: "Banda Aceh, ID",
    },
    {
      id: "seabass-006",
      name: "Gurame Fillet",
      price: 18.99 * 15000,
      image:
        "data:image/jpeg;base64,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",
      farmer: "Peternakan Laut Biru",
      location: "Bali, ID",
    },
    {
      id: "tuna-007",
      name: "Tuna Sirip Kuning",
      price: 22.99 * 15000,
      image:
        "https://media.istockphoto.com/id/187275440/photo/yellowfin-tuna-catch.webp?a=1&b=1&s=612x612&w=0&k=20&c=nOa0ERoMc7wcScxpqBcp1NYmenHpWECUhOoOc_FPeOo=",
      farmer: "Nelayan Samudera",
      location: "Ambon, ID",
    },
    {
      id: "cod-008",
      name: "Ikan Kod Segar",
      price: 14.99 * 15000,
      image:
        "data:image/jpeg;base64,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",
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
