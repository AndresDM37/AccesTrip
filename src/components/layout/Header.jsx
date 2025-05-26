import { Search, Menu } from "lucide-react";
import SearchInput from "../ui/SearchInput";

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
        <SearchInput />
        <div className="flex items-center space-x-4">
          <span className="text-gray-700 font-semibold">Usuario</span>
          <div className="w-10 h-10 bg-gray-200 rounded-full">
            <img
              src="https://i.pravatar.cc/40"
              alt="Perfil"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}