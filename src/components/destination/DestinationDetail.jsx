import { motion } from "@motionone/react";
import { ArrowLeft, Heart, MapPin, Star, Calendar, Users, Home } from "lucide-react";
import DestinationGallery from "./DestinationGallery";
import DestinationServices from "./DestinationServices";

export default function DestinationDetail({ destination, onClose }) {
  if (!destination) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
      key="detail"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="relative">
        {/* Header Image */}
        <div className="relative h-64 md:h-96">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>

          {/* Top Navigation */}
          <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-gray-700 cursor-pointer" />
            </button>
            <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Heart className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-t-3xl -mt-6 relative px-6 py-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold">
                {destination.name}
              </h1>
              <div className="flex items-center text-gray-600 mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{destination.location}</span>
              </div>
            </div>

            {/* User Avatar */}
            {destination.userAvatar && (
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img
                  src={destination.userAvatar}
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

          {/* Rating and Price */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">
                {destination.rating}
              </span>
              <span className="ml-1 text-gray-500">
                ({destination.reviews})
              </span>
            </div>
            <div className="font-bold text-xl text-orange-500">
              {destination.currency}
              {destination.price}/Persona
            </div>
          </div>

          {/* Country */}
          <div className="flex items-center mb-6">
            <MapPin className="w-4 h-4 mr-1 text-gray-500" />
            <span className="text-gray-500">
              {destination.country}
            </span>
          </div>

          {/* Image Gallery */}
          <DestinationGallery images={destination.galleryImages} />

          {/* Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-3">Más información</h2>
            <p className="text-gray-600">
              {destination.description}
            </p>
          </div>

          {/* Services */}
          <DestinationServices />

          {/* Booking Button */}
          <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t md:static md:border-t-0 md:p-0">
            <button className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl">
              Reserva
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}