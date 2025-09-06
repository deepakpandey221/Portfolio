import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9627805857"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white 
      p-5 rounded-full shadow-lg shadow-green-500/40 transition transform hover:scale-110 
      animate-pulse z-50"
    >
      <FaWhatsapp className="w-9 h-9" />
    </a>
  );
}
