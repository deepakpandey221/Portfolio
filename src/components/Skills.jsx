import { motion } from "framer-motion";
import {
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiLinux,
  SiGit,
  SiAnsible,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { FaAws, FaDatabase, FaTerminal } from "react-icons/fa"; // Extra icons for SQL & Bash

export default function Skills() {
  const categories = [
    {
      title: "💻 Languages & Libraries",
      items: [
        { name: "Python", icon: <SiPython className="text-yellow-400 w-12 h-12" /> },
        { name: "SQL", icon: <FaDatabase className="text-green-400 w-12 h-12" /> },
        { name: "Bash", icon: <FaTerminal className="text-gray-300 w-12 h-12" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-500 w-12 h-12" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500 w-12 h-12" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-300 w-12 h-12" /> },
      ],
    },
    {
      title: "☁️ Cloud & Containers",
      items: [
        { name: "AWS", icon: <FaAws className="text-orange-400 w-12 h-12" /> },
        { name: "Linux", icon: <SiLinux className="text-yellow-400 w-12 h-12" /> },
        { name: "Docker", icon: <SiDocker className="text-blue-400 w-12 h-12" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="text-blue-500 w-12 h-12" /> },
        { name: "Apache", icon: <FaTerminal className="text-red-400 w-12 h-12" /> }, // no official icon
        { name: "Nginx", icon: <FaTerminal className="text-green-400 w-12 h-12" /> }, // no official icon
        { name: "Ansible", icon: <SiAnsible className="text-green-500 w-12 h-12" /> },
        { name: "GitLab", icon: <SiGit className="text-orange-500 w-12 h-12" /> }, // using Git icon
        { name: "Git", icon: <SiGit className="text-red-400 w-12 h-12" /> },
        { name: "CI/CD", icon: <SiJenkins className="text-red-500 w-12 h-12" /> },
        { name: "Terraform", icon: <SiTerraform className="text-purple-400 w-12 h-12" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500/20 rounded-full blur-3xl animate-pulseSlow"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
      >
        🚀 My <span className="text-blue-400">Skills</span>
      </motion.h2>

      {/* Skill Categories */}
      <div className="space-y-20 relative z-10">
        {categories.map((category, cIdx) => (
          <div key={cIdx}>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-10 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              {category.title}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
              {category.items.map((skill, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gray-800/40 hover:bg-gray-800/70 transition shadow-lg shadow-blue-500/10 backdrop-blur-lg"
                >
                  {skill.icon}
                  <span className="text-lg font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
