import { Menu } from "lucide-react";
import SearchInput from "../ui/SearchInput";
import { useUser } from "../../context/UserContext";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="bg-white shadow-sm p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden">
          <Menu className="w-6 h-6" />
        </div>
        <SearchInput />
        <a href="/perfil" className="flex items-center space-x-4">
          <div className="flex flex-col items-center">
            <span className="text-gray-700 font-semibold">
              {user?.name || "Usuario"}
            </span>
            <span className="text-gray-500 text-sm">
              {user?.email || "usuario@ejemplo.com"}
            </span>
          </div>
          <div className="w-10 h-10 bg-gray-200 rounded-full">
            <img
              src="https://i.pravatar.cc/256"
              alt="Perfil"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </a>
      </div>
    </header>
  );
}
