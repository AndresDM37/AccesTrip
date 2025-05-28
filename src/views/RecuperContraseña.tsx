import React, { useState } from "react";

type RecuperarContrProps = {
  setActiveTab: (tab: string) => void;
};

const EmailSent = ({ email }: { email: string }) => (
  <div className="min-h-screen flex items-start sm:items-center justify-center pt-10 sm:pt-0 px-4 bg-gradient-to-br from-orange-100 via-white to-orange-200 sm:from-orange-200 sm:via-orange-100 sm:to-orange-300 transition-all duration-300">
    <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-orange-100 text-center">
      <h1 className="text-3xl font-bold text-orange-600 mb-4">Correo enviado</h1>
      <p className="text-gray-700 mb-6">
        Hemos enviado un correo a <span className="font-semibold">{email}</span> con instrucciones para recuperar tu contraseña.
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-400/30"
      >
        Volver
      </button>
    </div>
  </div>
);

const RecuperarContr = ({ setActiveTab }: RecuperarContrProps) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real para enviar correo de recuperación
    setEmailSent(true);
  };

  if (emailSent) {
    return <EmailSent email={email} />;
  }

  return (
    <div className="min-h-screen flex items-start sm:items-center justify-center pt-10 sm:pt-0 px-4 bg-gradient-to-br from-orange-100 via-white to-orange-200 sm:from-orange-200 sm:via-orange-100 sm:to-orange-300 transition-all duration-300">
      <div className="w-full max-w-md p-4 sm:p-8 bg-transparent sm:bg-white/80 sm:backdrop-blur-md sm:rounded-2xl sm:shadow-xl sm:border sm:border-orange-100">
        <h1 className="text-4xl sm:text-3xl font-bold text-center text-slate-900">
          ¿Olvidaste tu contraseña?
        </h1>
        <p className="mt-3 text-gray-600 text-center text-lg sm:text-base">
          Ingresa tu correo para recuperar tu contraseña
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-5 sm:py-4 border border-gray-300 rounded-2xl text-lg sm:text-base bg-white focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
          />

          <button
            type="submit"
            className="w-full py-5 sm:py-4 bg-orange-500 text-white font-semibold rounded-2xl text-lg sm:text-base hover:bg-orange-600 transition duration-300 shadow-md hover:shadow-lg shadow-orange-400/30 cursor-pointer"
          >
            Recuperar contraseña
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          ¿Recordaste tu contraseña?{" "}
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className="text-orange-500 hover:underline cursor-pointer font-medium"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecuperarContr;
