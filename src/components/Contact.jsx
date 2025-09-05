import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="w-8 h-8 text-blue-400" />,
      link: "https://linkedin.com/in/deepakpandey221",
      color: "from-blue-500/20 to-blue-600/10 hover:from-blue-500/40 hover:to-blue-600/30",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="w-8 h-8 text-gray-300" />,
      link: "https://github.com/deepakpandey221",
      color: "from-gray-500/20 to-gray-700/10 hover:from-gray-500/40 hover:to-gray-700/30",
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="w-8 h-8 text-sky-400" />,
      link: "https://x.com/Deepak_pandey2?s=08",
      color: "from-sky-500/20 to-sky-600/10 hover:from-sky-500/40 hover:to-sky-600/30",
    },
  ];

  return (
    <section
      id="contact"
      className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          📬 Let’s <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          I’m open to freelance projects, collaborations, and DevOps opportunities.  
          Reach out via email or connect with me on social media!
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12">
        {/* Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 bg-gray-800/40 p-6 rounded-2xl backdrop-blur-md border border-gray-700/40 shadow-md hover:shadow-blue-500/20 transition">
            <Mail className="w-7 h-7 text-blue-400" />
            <span className="text-gray-300">deepak@example.com</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/40 p-6 rounded-2xl backdrop-blur-md border border-gray-700/40 shadow-md hover:shadow-green-500/20 transition">
            <Phone className="w-7 h-7 text-green-400" />
            <span className="text-gray-300">+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4 bg-gray-800/40 p-6 rounded-2xl backdrop-blur-md border border-gray-700/40 shadow-md hover:shadow-purple-500/20 transition">
            <MapPin className="w-7 h-7 text-purple-400" />
            <span className="text-gray-300">Noida , India</span>
          </div>
        </motion.div>

        {/* Social Media Cards */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {socials.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${social.color} transition transform hover:scale-105 backdrop-blur-md border border-gray-700/40 shadow-md`}
            >
              {social.icon}
              <span className="text-gray-300 font-medium">{social.name}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
