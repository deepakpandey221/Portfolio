import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[70%] 
        backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl 
        shadow-lg shadow-blue-500/20 z-50 px-6 py-3 flex items-center justify-between"
      >
        {/* Logo / Brand */}
        <div className="text-xl font-bold text-blue-400 tracking-wide">
          <span className="text-white">Deepak Pandey</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Hire Me Button */}
        <a
          href="mailto:deepakchandrapandey221@gmail.com"
          className="hidden md:flex px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
          rounded-xl shadow-lg shadow-blue-500/30 text-white font-semibold hover:scale-105 transition"
        >
          Hire Me
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-gray-900/95 
            backdrop-blur-lg border-l border-white/20 z-40 p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-blue-400">Menu</h2>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 text-gray-300 text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="mailto:deepak@example.com"
              className="mt-10 px-5 py-3 text-center bg-gradient-to-r 
              from-blue-500 to-purple-600 rounded-xl shadow-lg shadow-blue-500/30 
              text-white font-semibold hover:scale-105 transition"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
