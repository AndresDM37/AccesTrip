import Header from "./Header";
import BottomNavigation from "./BottomNavigation";

export default function PageLayout({ children, activeTab, setActiveTab }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - solo visible en pantallas medianas y grandes */}
      {/* <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} /> */}

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col">
        {/* Cabecera */}
        <Header />

        {/* Contenido */}
        <main className="container mx-auto px-4 py-6 flex-1">
          {children}
        </main>

        {/* Navegación inferior - solo visible en dispositivos móviles */}
        <div className="block md:hidden">
          <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}