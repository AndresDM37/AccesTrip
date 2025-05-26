import { motion } from "@motionone/react";
import { Heart } from "lucide-react";

export default function DestinationCard({ destination, index, onClick }) {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer"
      onClick={() => onClick(destination)}
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="relative">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <Heart className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg">
          {destination.name}
        </h3>
        <div className="flex items-center text-gray-500 text-sm mt-1">
          <span>{destination.location}</span>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <span className="text-yellow-500">★</span>
            <span className="ml-1 font-medium">
              {destination.rating}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            {destination.views} visitas
          </div>
        </div>
      </div>
    </motion.div>
  );
}