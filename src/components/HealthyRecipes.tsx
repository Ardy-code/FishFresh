import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, X, Fish, EggFried } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

interface Recipe {
  id: string;
  title: string;
  prepTime: string;
  ingredients: number;
  calories: string;
  protein: string;
  image: string;
  chef: string;
  recipeContent?: {
    description: string;
    ingredientsList: string[];
    instructions: string[];
    tips: string;
  };
}

const HealthyRecipes = () => {
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);

  const recipes: Recipe[] = [
    {
      id: "recipe-1",
      title: "Ikan Trout Panggang dengan Lemon dan Rempah",
      prepTime: "25 menit",
      ingredients: 7,
      calories: "310",
      protein: "28g",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=80",
      chef: "Emma Wilson",
      recipeContent: {
        description:
          "Hidangan ikan trout panggang yang lembut dan lezat dengan tambahan rempah dan perasan lemon segar. Sangat bagus untuk makan malam keluarga yang sehat.",
        ingredientsList: [
          "2 fillet ikan trout (sekitar 170g per fillet)",
          "2 sendok makan minyak zaitun",
          "2 siung bawang putih, cincang halus",
          "1 sendok teh timi kering",
          "1 sendok makan daun peterseli cincang",
          "1 buah lemon, setengah dipotong tipis, setengah untuk perasan",
          "Garam dan merica secukupnya",
        ],
        instructions: [
          "Panaskan oven hingga suhu 200°C dan siapkan loyang panggang dengan aluminium foil.",
          "Letakkan fillet ikan trout di atas aluminium foil dengan kulit di bawah.",
          "Campurkan minyak zaitun, bawang putih cincang, timi, dan setengah dari peterseli dalam mangkuk kecil.",
          "Oleskan campuran minyak ke atas ikan dan bumbui dengan garam dan merica.",
          "Letakkan irisan lemon di atas ikan dan peras setengah lemon lainnya ke atasnya.",
          "Tutup dengan aluminium foil dan panggang selama 15-20 menit atau hingga ikan matang sempurna.",
          "Taburi dengan sisa peterseli sebelum disajikan.",
        ],
        tips: "Anda dapat mengganti ikan trout dengan ikan salmon atau ikan putih lokal lainnya sesuai ketersediaan.",
      },
    },
    {
      id: "recipe-2",
      title: "Keumamah ala aceh",
      prepTime: "20 menit",
      ingredients: 9,
      calories: "350",
      protein: "24g",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGZJlsSyr6T1D1jAD4TwLd4cmhMPabOapXzA&s",
      chef: "Michael Chen",
      recipeContent: {
        description:
          "Taco ikan tilapia yang renyah dengan salsa alpukat segar. Hidangan meksiko dengan sentuhan sehat yang sempurna untuk makan siang atau makan malam santai.",
        ingredientsList: [
          "500g fillet ikan tilapia",
          "2 sendok makan minyak zaitun",
          "1 sendok makan bubuk cabai",
          "1 sendok teh jintan bubuk",
          "8 tortilla jagung kecil",
          "2 buah alpukat matang",
          "1 buah tomat, potong dadu kecil",
          "1/4 bawang bombay, cincang halus",
          "1 buah jeruk nipis",
          "Daun ketumbar secukupnya",
          "Garam dan merica secukupnya",
        ],
        instructions: [
          "Campurkan bubuk cabai, jintan, garam dan merica dalam mangkuk kecil.",
          "Lumuri ikan dengan campuran bumbu dan diamkan selama 10 menit.",
          "Panaskan minyak zaitun dalam penggorengan anti lengket dengan api sedang.",
          "Goreng ikan selama 3-4 menit per sisi hingga matang dan mudah dipisahkan dengan garpu.",
          "Untuk salsa: campurkan alpukat yang dihaluskan, tomat cincang, bawang bombay, perasan jeruk nipis, daun ketumbar, garam dan merica dalam mangkuk.",
          "Panaskan tortilla jagung di atas api atau dalam wajan.",
          "Isi tortilla dengan potongan ikan tilapia dan salsa alpukat.",
        ],
        tips: "Tambahkan kol ungu yang diiris tipis dan saus yogurt untuk rasa dan tekstur tambahan.",
      },
    },
    {
      id: "recipe-3",
      title: "Fillet Ikan Lele Berbalut Rempah",
      prepTime: "30 menit",
      ingredients: 8,
      calories: "290",
      protein: "26g",
      image:
        "https://images.unsplash.com/photo-1611599539392-0198d33c4c1e?w=500&auto=format&fit=crop&q=80",
      chef: "Sophia Rodriguez",
      recipeContent: {
        description:
          "Fillet ikan lele yang dibalut dengan campuran rempah, menghasilkan hidangan yang renyah di luar dan lembut di dalam. Cocok disajikan dengan salad segar.",
        ingredientsList: [
          "4 fillet ikan lele (sekitar 150g per fillet)",
          "1 cangkir tepung terigu",
          "2 sendok makan campuran rempah Italia kering",
          "1 sendok teh paprika bubuk",
          "2 butir telur, dikocok",
          "1 cangkir remah roti panko",
          "2 sendok makan minyak zaitun",
          "Garam dan merica secukupnya",
          "Irisan lemon untuk penyajian",
        ],
        instructions: [
          "Panaskan oven hingga suhu 200°C dan siapkan loyang panggang dengan aluminum foil.",
          "Dalam mangkuk pertama, campurkan tepung terigu, setengah campuran rempah, paprika, garam dan merica.",
          "Taruh telur kocok dalam mangkuk kedua.",
          "Dalam mangkuk ketiga, campurkan remah roti panko dengan sisa campuran rempah.",
          "Balut setiap fillet ikan dengan tepung berbumbu, celupkan ke dalam telur, kemudian balut dengan remah roti panko.",
          "Letakkan fillet ikan yang sudah dibalut di atas loyang panggang dan percikkan minyak zaitun di atasnya.",
          "Panggang selama 15-20 menit hingga keemasan dan matang sempurna.",
          "Sajikan dengan irisan lemon segar.",
        ],
        tips: "Untuk hasil yang lebih sehat, Anda dapat memanggang ikan ini alih-alih menggorengnya. Sajikan dengan salad segar atau kentang panggang.",
      },
    },
  ];

  const handleOpenRecipe = (id: string) => {
    setOpenRecipe(id);
  };

  return (
    <div id="recipes" className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">Panduan Memasak Sehat</h2>
          <p className="section-subtitle">
            Resep lezat dan bergizi untuk menyiapkan ikan Aquaharvest Anda,
            dibuat oleh koki profesional dan ahli gizi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <div
              key={recipe.id}
              className="card overflow-hidden opacity-0 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <div className="bg-white/80 backdrop-blur-sm text-sm rounded-full px-3 py-1 font-medium flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-ocean" />
                    {recipe.prepTime}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center mb-3">
                  <BookOpen className="h-4 w-4 text-ocean mr-1" />
                  <span className="text-sm text-gray-500">
                    Resep dari {recipe.chef}
                  </span>
                </div>

                <h3 className="font-bold text-xl mb-3">{recipe.title}</h3>

                <div className="flex space-x-4 mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Kalori</p>
                    <p className="font-bold">{recipe.calories}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Protein</p>
                    <p className="font-bold">{recipe.protein}</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500">Bahan</p>
                    <p className="font-bold">{recipe.ingredients}</p>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full hover:bg-ocean hover:text-white"
                  onClick={() => handleOpenRecipe(recipe.id)}
                >
                  Lihat Resep
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="btn-primary">Jelajahi Semua Resep</Button>
        </div>

        {recipes.map((recipe) => (
          <Dialog
            key={recipe.id}
            open={openRecipe === recipe.id}
            onOpenChange={(open) => !open && setOpenRecipe(null)}
          >
            <DialogContent className="max-w-3xl h-[80vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">{recipe.title}</DialogTitle>
                  <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Tutup</span>
                  </DialogClose>
                </div>
                <DialogDescription className="flex items-center space-x-4 text-left">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-ocean" />
                    <span>Waktu: {recipe.prepTime}</span>
                  </div>
                  <div className="flex items-center">
                    <Fish className="h-4 w-4 mr-1 text-ocean" />
                    <span>Oleh: {recipe.chef}</span>
                  </div>
                </DialogDescription>
              </DialogHeader>

              <div className="mt-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Deskripsi</h3>
                  <p>{recipe.recipeContent?.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h3 className="text-lg font-bold mb-2 flex items-center">
                      <EggFried className="h-5 w-5 mr-2 text-ocean" />
                      Bahan-bahan
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {recipe.recipeContent?.ingredientsList.map(
                        (ingredient, idx) => (
                          <li key={idx}>{ingredient}</li>
                        )
                      )}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-2">Info Nutrisi</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Kalori</p>
                        <p className="font-bold">{recipe.calories}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Protein</p>
                        <p className="font-bold">{recipe.protein}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-bold mb-2">Cara Memasak</h3>
                  <ol className="list-decimal pl-5 space-y-2">
                    {recipe.recipeContent?.instructions.map((step, idx) => (
                      <li key={idx} className="pl-2">
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-lg font-bold mb-2">Tips</h3>
                  <p>{recipe.recipeContent?.tips}</p>
                </div>
              </div>

              <DialogFooter className="mt-6">
                <Button onClick={() => setOpenRecipe(null)}>Tutup</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default HealthyRecipes;
