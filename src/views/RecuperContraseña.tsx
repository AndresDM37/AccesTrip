import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import BackButton from "../components/ui/BackButton";

type RecuperarContrProps = {
  setActiveTab: (tab: string) => void;
};

const EmailSentModal = ({
  email,
  onClose,
}: {
  email: string;
  onClose: () => void;
}) => {
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(onClose, 300);
      return () => clearTimeout(timeout);
    }
  }, [closing, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm transition-opacity duration-300"
    >
      <div
        className={`bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center transform transition-transform duration-300 ${
          closing ? "translate-y-[-40px] opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="flex justify-center mb-4 text-orange-500 text-6xl">
          <FiMail aria-hidden="true" />
        </div>
        <h1 id="modal-title" className="text-3xl font-bold text-slate-900 mb-3">
          Correo enviado
        </h1>
        <p id="modal-desc" className="text-gray-700 mb-6">
          Hemos enviado un correo a{" "}
          <span className="font-semibold text-orange-600">{email}</span> con
          instrucciones para recuperar tu contraseña.
        </p>
        <button
          onClick={() => setClosing(true)}
          className="mt-2 px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-400/30 cursor-pointer"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const RecuperarContr = ({ setActiveTab }: RecuperarContrProps) => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmailSent(true);
  };

  return (
    <div className="relative min-h-screen flex items-start sm:items-center justify-center pt-10 sm:pt-0 px-4 bg-gradient-to-br from-orange-100 via-white to-orange-200 sm:from-orange-200 sm:via-orange-100 sm:to-orange-300 transition-all duration-300">
      
      {/* Botón de retroceso solo en móvil */}
      <BackButton onClick={() => setActiveTab("login")} />

      {/* Formulario */}
      <div className="w-full max-w-md p-4 sm:p-8 bg-transparent sm:bg-white/80 sm:backdrop-blur-md sm:rounded-2xl sm:shadow-xl sm:border sm:border-orange-100">
        <h1 className="text-4xl sm:text-3xl font-bold text-center text-slate-900">
          ¿Olvidaste tu contraseña?
        </h1>
        <p className="mt-3 text-gray-600 text-center text-lg sm:text-base">
          Ingresa tu correo para recuperar tu contraseña
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <label htmlFor="email" className="sr-only">
            Correo electrónico
          </label>
          <input
            id="email"
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
            className="text-orange-500 hover:underline font-medium cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      {/* Modal de correo enviado */}
      {emailSent && (
        <EmailSentModal
          email={email}
          onClose={() => {
            setEmailSent(false);
            setActiveTab("login");
          }}
        />
      )}
    </div>
  );
};

export default RecuperarContr;
