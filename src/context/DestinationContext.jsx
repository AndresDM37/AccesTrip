import { createContext, useState, useContext } from "react";
import { destinations as destinationsData } from "../data/destinations";

// Crear el contexto
const DestinationContext = createContext();

// Proveedor del contexto
export function DestinationProvider({ children }) {
  const [destinations, setDestinations] = useState(destinationsData);
  const [favorites, setFavorites] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null); // null, "precio", "ubicación", etc.

  // Función para agregar/quitar de favoritos
  const toggleFavorite = (destinationId) => {
    if (favorites.includes(destinationId)) {
      setFavorites(favorites.filter((id) => id !== destinationId));
    } else {
      setFavorites([...favorites, destinationId]);
    }
  };

  // Función para obtener destinos favoritos
  const getFavoriteDestinations = () => {
    return destinations.filter((destination) =>
      favorites.includes(destination.id)
    );
  };

  // Función para filtrar destinos por categoría
  const filterByCategory = (category) => {
    // Implementar la lógica de filtrado según categoría
    // Por ahora retornamos todos los destinos
    return destinations;
  };

  // Función para buscar destinos por nombre o ubicación
  const searchDestinations = (query) => {
    let results = destinations;

    if (query) {
      const lowercaseQuery = query.toLowerCase();
      results = results.filter(
        (destination) =>
          destination.name.toLowerCase().includes(lowercaseQuery) ||
          destination.location.toLowerCase().includes(lowercaseQuery) ||
          destination.country.toLowerCase().includes(lowercaseQuery)
      );
    }

    if (selectedFilter === "precio") {
      results = results.slice().sort((a, b) => a.price - b.price);
    } else if (selectedFilter === "ubicación") {
      results = results
        .slice()
        .sort((a, b) => a.location.localeCompare(b.location));
    } else if (selectedFilter === "popularidad") {
      results = results.slice().sort((a, b) => b.popularity - a.popularity); // si tienes esta propiedad
    } else if (selectedFilter === "accesibilidad") {
      results = results.filter((destination) => destination.accessible); // si tienes esta propiedad
    }

    return results;
  };

  const value = {
    destinations,
    favorites,
    toggleFavorite,
    getFavoriteDestinations,
    filterByCategory,
    searchDestinations,
    selectedFilter,
    setSelectedFilter,
  };

  return (
    <DestinationContext.Provider value={value}>
      {children}
    </DestinationContext.Provider>
  );
}

// Hook personalizado para usar el contexto
export function useDestinations() {
  const context = useContext(DestinationContext);
  if (context === undefined) {
    throw new Error(
      "useDestinations debe usarse dentro de un DestinationProvider"
    );
  }
  return context;
}
