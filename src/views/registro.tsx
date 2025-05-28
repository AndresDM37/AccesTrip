import React, { useState, useEffect, useRef } from "react";
import BackButton from "../components/ui/BackButton";
import { FiMail } from "react-icons/fi";

// Modal reutilizable para mensaje de activación
const ActivationEmailModal = ({ email, onClose }: { email: string; onClose: () => void }) => {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => setOpen(true), []);
  useEffect(() => {
    if (closing) {
      const timeout = setTimeout(onClose, 300);
      return () => clearTimeout(timeout);
    }
  }, [closing, onClose]);

  useEffect(() => {
    modalRef.current?.focus();
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={modalRef}
      className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300 ${
        closing ? "opacity-0" : "opacity-100"
      } bg-black/20`}
    >
      <div
        className={`bg-white p-8 rounded-2xl shadow-xl max-w-md w-full text-center transform transition-transform duration-300 ${
          closing
            ? "-translate-y-full opacity-0"
            : open
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <div className="flex justify-center mb-4 text-orange-500 text-6xl">
          <FiMail aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">¡Correo enviado!</h1>
        <p className="text-gray-700 mb-6">
          Se ha enviado un correo de activación a{" "}
          <span className="font-semibold text-orange-600">{email}</span>. Por favor, revisa tu
          bandeja de entrada para confirmar tu cuenta.
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

// Componente Registro con modal
const Registro = ({ setActiveTab }: { setActiveTab: (tab: string) => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Solo mostramos el modal de confirmación
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-100 via-white to-orange-200 sm:from-orange-200 sm:via-orange-100 sm:to-orange-300 transition-all duration-300 relative">
      <BackButton onClick={() => setActiveTab("login")} />

      <div className="w-full max-w-md p-4 sm:p-8 bg-transparent sm:bg-white/80 sm:backdrop-blur-md sm:rounded-2xl sm:shadow-xl sm:border sm:border-orange-100">
        <h1 className="text-4xl sm:text-3xl font-bold text-center text-slate-900">Registrarse</h1>
        <p className="mt-3 text-gray-600 text-center text-lg sm:text-base">
          Por favor, ingresa tus datos para registrarte
        </p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <input
            id="name"
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-5 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            id="email"
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-5 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <input
            id="password"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={8}
            className="w-full px-4 py-5 border border-gray-300 rounded-2xl bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <p className="text-sm text-gray-600">La contraseña debe tener al menos 8 caracteres</p>

          <button
            type="submit"
            className="w-full py-5 bg-orange-500 text-white font-semibold rounded-2xl hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-400/30"
          >
            Registro
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <button
            type="button"
            onClick={() => setActiveTab("login")}
            className="text-orange-500 hover:underline font-medium cursor-pointer"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>

      {showModal && (
        <ActivationEmailModal
          email={email}
          onClose={() => {
            setShowModal(false);
            setActiveTab("login");
          }}
        />
      )}
    </div>
  );
};

export default Registro;
