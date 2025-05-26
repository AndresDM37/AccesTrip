import { createContext, useState, useContext } from "react";
import { destinations as destinationsData } from "../data/destinations";

// Crear el contexto
const DestinationContext = createContext();

// Proveedor del contexto
export function DestinationProvider({ children }) {
  const [destinations, setDestinations] = useState(destinationsData);
  const [favorites, setFavorites] = useState([]);

  // Función para agregar/quitar de favoritos
  const toggleFavorite = (destinationId) => {
    if (favorites.includes(destinationId)) {
      setFavorites(favorites.filter(id => id !== destinationId));
    } else {
      setFavorites([...favorites, destinationId]);
    }
  };

  // Función para obtener destinos favoritos
  const getFavoriteDestinations = () => {
    return destinations.filter(destination => favorites.includes(destination.id));
  };

  // Función para filtrar destinos por categoría
  const filterByCategory = (category) => {
    // Implementar la lógica de filtrado según categoría
    // Por ahora retornamos todos los destinos
    return destinations;
  };

  // Función para buscar destinos por nombre o ubicación
  const searchDestinations = (query) => {
    if (!query) return destinations;
    
    const lowercaseQuery = query.toLowerCase();
    return destinations.filter(destination => 
      destination.name.toLowerCase().includes(lowercaseQuery) || 
      destination.location.toLowerCase().includes(lowercaseQuery) ||
      destination.country.toLowerCase().includes(lowercaseQuery)
    );
  };

  const value = {
    destinations,
    favorites,
    toggleFavorite,
    getFavoriteDestinations,
    filterByCategory,
    searchDestinations,
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
    throw new Error("useDestinations debe usarse dentro de un DestinationProvider");
  }
  return context;
}