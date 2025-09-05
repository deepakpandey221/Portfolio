import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";
import { SiDevdotto } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 px-6 md:px-20">
      {/* Glow background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Brand */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
          Deepak<span className="text-white">DevOps</span>
        </h2>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-2xl">
          <a
            href="https://github.com/deepakpandey221"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/deepakpandey221"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/Deepak_pandey2?s=08"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaTwitter />
          </a>
          
          
          <a
            href="mailto:deepakchandrapandey221@gmail.com"
            className="hover:text-blue-400 transition"
          >
            <Mail className="w-7 h-7" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 text-center mt-6">
          © {new Date().getFullYear()} DeepakDevOps — Built with ❤️ using React & Tailwind
        </p>
      </div>
    </footer>
  );
}
