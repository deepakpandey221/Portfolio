import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Summer Intern",
      company: "Linux World Informatics",
    
      description:
        "Engineered real-time AWS S3–SNS notifications with Boto3, designed a covert SSH proxy network for secure client access, and built a Python CGI web interface reducing response time by 30%.",
    },
    {
      role: "PHP Trainee",
      company: "Infowiz",
    
      description:
        "Developed 10+ web applications with PHP (Laravel, CodeIgniter), built 15+ responsive interfaces using HTML/CSS/JavaScript, and optimized large-scale MySQL databases for performance and security.",
    },
    
  ];

  return (
    <section
      id="experience"
      className="relative px-6 sm:px-10 md:px-16 lg:px-20 py-20 
      bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-10 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16"
      >
        💼 My <span className="text-blue-400">Experience</span>
      </motion.h2>

      {/* Timeline */}
      <div className="relative z-10 flex flex-col gap-10 max-w-4xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="relative group bg-gray-800/40 backdrop-blur-lg border border-gray-700 
            hover:border-blue-500/40 p-6 sm:p-8 rounded-2xl shadow-lg shadow-blue-500/10 
            transition hover:shadow-blue-500/30"
          >
            {/* Icon Badge */}
            <div className="absolute -top-6 left-6 bg-blue-500 p-3 rounded-full shadow-lg shadow-blue-500/40">
              <Briefcase className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-400">
              {exp.role}
            </h3>
            <p className="text-gray-400 text-sm sm:text-base mb-2">
              {exp.company} • <span className="text-gray-500">{exp.period}</span>
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Timeline Line (Futuristic glowing line in background) */}
      <div className="absolute left-1/2 top-40 bottom-20 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 blur-[1px] opacity-30 hidden md:block"></div>
    </section>
  );
}
