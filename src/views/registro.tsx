import React, { useState, useEffect, useRef } from "react";
import { FiMail } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import BackButton from "../components/ui/BackButton";

type RegistroProps = {
  setActiveTab: (tab: string) => void;
};

const EmailSentModal = ({ email, onClose }: { email: string; onClose: () => void }) => {
  const [closing, setClosing] = useState(false);
  const [open, setOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(true);
  }, []);

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
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
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
        <h1 id="modal-title" className="text-3xl font-bold text-slate-900 mb-3">
          Correo enviado
        </h1>
        <p id="modal-desc" className="text-gray-700 mb-6">
          Se ha enviado un correo de activación a{" "}
          <span className="font-semibold text-orange-600">{email}</span>.
          Por favor, revisa tu bandeja de entrada para confirmar tu cuenta.
        </p>
        <button
          onClick={() => setClosing(true)}
          className="mt-2 px-6 py-3 bg-orange-500 text-white rounded-2xl hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-400/30 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
          autoFocus
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const Registro = ({ setActiveTab }: RegistroProps) => {
  // Añadidos los estados que faltaban para los inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sentEmail, setSentEmail] = useState("");

  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+$/.test(name.trim())) {
      alert("Por favor ingresa tu nombre completo.");
      return;
    }

    if (!email) {
      alert("Por favor ingresa un correo electrónico.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Por favor ingresa un correo electrónico válido.");
      return;
    }

    // Validar dominios permitidos
    const allowedDomains = [
      "@gmail.com",
      "@outlook.com",
      "@hotmail.com",
      "@yahoo.com",
      "@umb.edu.co",
    ];

    const emailLower = email.toLowerCase().trim();
    const isAllowedDomain = allowedDomains.some((domain) =>
      emailLower.endsWith(domain)
    );

    if (!isAllowedDomain) {
      alert(
        "El correo que ingresaste no es válido. Por favor, ingresa un correo con alguno de los siguientes dominios: gmail.com, outlook.com, hotmail.com, yahoo.com, umb.edu.co"
      );
      return;
    }

    if (password.length < 8) {
      alert("La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    //Usuarios
    const users = JSON.parse(localStorage.getItem("usuarios") || "[]")

    //Nuevo
    const newUser = { name, email, password}

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID2;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      alert("Configuración de EmailJS incompleta. Revisa las variables de entorno.");
      return;
    }

    setSending(true);

    const baseUrl = import.meta.env.VITE_APP_BASE_URL || window.location.origin;

    const templateParams = {
      to_email: email,
      verify_link: `${baseUrl}/login?email=${encodeURIComponent(email)}`,
    };

    //Usuario existente
    const userExist = users.some((user: any) => user.email === email)

    if (userExist) {
      alert("Este correo ya está registrado. Por favor, Inicia Sesión")
      setSending(false)
      return
    }

    localStorage.setItem("usuarios", JSON.stringify([...users, newUser]))

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setEmailSent(true);
      setSentEmail(email);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error("Error enviando correo:", error);
      alert("Hubo un problema enviando el correo. Por favor, intenta de nuevo más tarde.");
    } finally {
      setSending(false);
    }
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
            disabled={sending}
            className={`w-full py-5 bg-orange-500 text-white font-semibold rounded-2xl hover:bg-orange-600 transition duration-300 shadow-md shadow-orange-400/30 ${
              sending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {sending ? "Enviando..." : "Registro"}
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

      {/* Modal usando el estado emailSent y sentEmail */}
      {emailSent && (
        <EmailSentModal
          email={sentEmail}
          onClose={() => {
            setEmailSent(false);
            setActiveTab("login");
          }}
        />
      )}
    </div>
  );
};

export default Registro;
