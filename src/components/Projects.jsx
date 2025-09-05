import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Rambo - Backup and Restore software",
      desc: "Engineered a backup and restore solution with 99.9% data protection, integrated AWS S3 using Python, and accelerated transfer speeds up to 11x with rsync.",
      img: "/cicd.png",
      tech: ["Jenkins", "Docker", "Kubernetes", "Helm"],
      github: "https://github.com/deepak/cicd-pipeline",
      demo: "https://cicd-demo.example.com",
    },
    {
      title: "DockEase - Container Management System",
      desc: "Developed a container management web app reducing complexity by 40%, optimized AWS Docker database replication by 30%, and integrated a Linux terminal improving customization by 50%.",
      img: "/docker-thumb.jpg",
      tech: ["Terraform", "AWS", "Ansible"],
      github: "https://github.com/deepak/terraform-infra",
      demo: "https://terraform-demo.example.com",
    },
    {
      title: "LinuxXpress - GUI For Linux",
      desc: "Developed a Linux GUI desktop app with one-click access and AWS email/SMS alerts saving 40–50% time, and integrated ML, gesture control, and a Docker web app reducing usage by 50–60%.",
      img: "/linux.png",
      tech: ["Python", "Panda", "Linux v9","Docker","Numpy","OpenCV2","Pandas"],
      github: "https://github.com/deepak/monitoring-stack",
      demo: "https://monitoring-demo.example.com",
    },
  ];

  return (
    <section
      id="projects"
      className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white"
    >
      {/* Futuristic background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulseSlow"></div>

      {/* Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14"
      >
        🚀 My <span className="text-blue-400">Projects</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg 
            hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition transform hover:-translate-y-2 overflow-hidden"
          >
            {/* Project Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm">{project.desc}</p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-purple-500 hover:bg-purple-600 rounded-lg transition"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
