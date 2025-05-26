import { motion } from "@motionone/react";
import CategoryCard from "../ui/CategoryCard";

export default function CategoriesSection() {
  const categories = [
    { name: "Playas", icon: "🏝️" },
    { name: "Montañas", icon: "⛰️" },
    { name: "Historia", icon: "🏛️" },
    { name: "Gastronomía", icon: "🍽️" },
    { name: "Aventura", icon: "🧗‍♀️" },
    { name: "Cultural", icon: "🎭" },
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Categorías</h2>
        <a href="#" className="text-orange-500 font-medium">
          Ver todas
        </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <CategoryCard 
            key={index} 
            category={category} 
            index={index} 
          />
        ))}
      </div>
    </div>
  );
}