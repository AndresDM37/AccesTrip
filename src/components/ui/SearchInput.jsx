import { Search } from "lucide-react";

export default function SearchInput() {
  return (
    <div className="relative flex-1 max-w-xl mx-4">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder="Buscar destinos..."
      />
    </div>
  );
}