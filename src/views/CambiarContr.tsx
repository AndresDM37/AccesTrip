import React, { useState } from "react";
import BackButton from "../components/ui/BackButton";

const CambiCont = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      setError("La contraseña debe tener al menos 8 caracteres");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    setError("");
    setActiveTab("login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-100 via-white to-orange-200 sm:from-orange-200 sm:via-orange-100 sm:to-orange-300 transition-all duration-300 relative">
      
      {/* Botón de retroceso solo en móvil */}
      <BackButton onClick={() => setActiveTab("login")} />

      <div className="w-full max-w-md p-4 sm:p-8 bg-white sm:rounded-2xl sm:shadow-xl sm:border sm:border-orange-100 sm:hover:shadow-2xl sm:hover:scale-[1.02] sm:transition sm:duration-300 sm:ease-in-out">
        
        <h1 className="text-4xl sm:text-3xl font-bold text-center text-slate-900 cursor-default">
          Cambio de contraseña
        </h1>

        <p className="mt-3 text-gray-600 text-center text-lg sm:text-base cursor-default">
          Ingresa tu nueva contraseña y confírmala
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <input
            id="new-password"
            type="password"
            placeholder="Nueva contraseña"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            minLength={8}
            className="w-full px-4 py-5 sm:py-4 border border-gray-300 rounded-2xl text-lg sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
          />

          <input
            id="confirm-password"
            type="password"
            placeholder="Confirmar nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            minLength={8}
            className="w-full px-4 py-5 sm:py-4 border border-gray-300 rounded-2xl text-lg sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
          />

          {error && (
            <p className="text-red-600 text-sm text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-5 sm:py-4 bg-orange-500 text-white font-semibold rounded-2xl text-lg sm:text-base hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg shadow-orange-400/30 cursor-pointer"
          >
            Cambiar contraseña
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          ¿Recuerdas tu contraseña?{" "}
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className="text-orange-500 hover:underline font-medium cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default CambiCont;
