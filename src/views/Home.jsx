import { useState } from "react";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import CategoriesSection from "../components/home/CategoriesSection";
import PopularDestinations from "../components/home/PopularDestinations";
import FeaturedExperience from "../components/home/FeaturedExperience";
import DestinationDetail from "../components/destination/DestinationDetail";
import { destinations } from "../data/destinations";

export default function HomeView() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
  };

  const handleCloseDetail = () => {
    setSelectedDestination(null);
  };

  return (
    <>
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation Bar */}
        <Header />

        {/* Main Content Area */}
        <main className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Descubre las maravillas de{" "}
                <span className="text-orange-500">Colombia</span>
              </h1>
              <p className="text-gray-600 mt-1">
                Explora los destinos más hermosos del país
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">
                Planea tu viaje
              </button>
            </div>
          </div>

          {/* Categories */}
          <CategoriesSection />

          {/* Popular Destinations */}
          <PopularDestinations 
            destinations={destinations} 
            onSelectDestination={handleSelectDestination} 
          />

          {/* Featured Experience */}
          <FeaturedExperience />

          {/* Destination Detail Page */}
          {selectedDestination && (
            <DestinationDetail 
              destination={selectedDestination} 
              onClose={handleCloseDetail} 
            />
          )}
        </main>
      </div>
    </>
  );
}