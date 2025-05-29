import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
        <div className="flex-1" />
        <a href="/perfil" className="flex items-center space-x-4">
          <span className="text-gray-700 font-semibold">Usuario</span>
          <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
            <img
              src="https://i.pravatar.cc/40"
              alt="Perfil"
              className="w-10 h-10 object-cover"
            />
          </div>
        </a>
      </div>
    </header>
  );
}
