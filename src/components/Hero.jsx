import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between 
      px-6 sm:px-10 md:px-16 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-28 
      bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden"
    >
      {/* Glowing Background Orbs */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-float"></div>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
        className="flex-1 space-y-6 z-10 text-center lg:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Deepak
          </span>
        </h1>

        {/* Typing effect style subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium"
        >
          <span className="text-purple-400">DevOps Engineer</span> 🚀 |{" "}
          <span className="text-blue-400">Cloud Enthusiast</span> |{" "}
          <span className="text-green-400">Automation Lover</span>
        </motion.h2>

        <p className="text-gray-400 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
          Passionate about{" "}
          <span className="text-blue-300">automation</span>,{" "}
          <span className="text-green-300">cloud infrastructure</span>, and{" "}
          <span className="text-pink-300">scalable systems</span>.  
          Always exploring cutting-edge DevOps tools and delivering efficient, 
          reliable solutions for modern businesses.
        </p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 sm:gap-6 mt-8"
        >
          <a
            href="/Deepak-Resume.pdf"
            download
            className="flex items-center justify-center gap-2 px-6 py-3 text-base
            bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700
            rounded-2xl shadow-lg shadow-blue-500/30 transition transform hover:scale-105"
          >
            <Download size={20} /> Download Resume
          </a>

          <a
            href="mailto:deepakchandrapandey221@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 text-base
            bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700
            rounded-2xl shadow-lg shadow-purple-500/30 transition transform hover:scale-105"
          >
            <Mail size={20} /> Hire Me
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex justify-center lg:justify-start gap-6 mt-8"
        >
          <a
            href="https://github.com/deepakpandey221"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://linkedin.com/in/deepakpandey221"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-400 transition transform hover:scale-110"
          >
            <Linkedin className="w-7 h-7" />
          </a>
        </motion.div>
      </motion.div>

      {/* Right Content - Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 flex justify-center mb-12 lg:mb-0 z-10"
      >
        <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/40">
          <img
            src="/deepak.jpeg"
            alt="Deepak - DevOps Engineer"
            className="w-full h-full object-cover"
          />
          {/* Rotating Glow Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-blue-400/40 animate-spin-slow"></div>
        </div>
      </motion.div>
    </section>
  );
}
