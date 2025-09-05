import { motion } from "framer-motion";
import { FileDown, Briefcase, Users, Clock } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
    >
      {/* Decorative background glows (kept subtle, don't affect padding) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full bg-blue-500/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-purple-500/15 blur-3xl"
      />

      {/* CENTERED CONTAINER to ensure equal left/right padding */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
        >
          👨‍💻 About <span className="text-blue-400">Me</span>
        </motion.h2>

        {/* Content Grid */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
          {/* Profile (Left) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 justify-self-center lg:justify-self-start"
          >
            <div className="relative rounded-2xl p-1 bg-white/10 backdrop-blur-lg border border-white/15 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
              <div className="rounded-xl overflow-hidden bg-gray-900">
                <img
                  src="/deepak-profile.jpeg"
                  alt="Deepak - DevOps Engineer"
                  className="w-[18rem] h-[18rem] md:w-[20rem] md:h-[20rem] object-cover"
                />
              </div>
              {/* Inner glow kept inside the box (no negative insets) */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
            </div>
          </motion.div>

          {/* Text (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 max-w-3xl justify-self-center lg:justify-self-stretch"
          >
            <div className="space-y-6 text-center lg:text-left">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Hi, I’m <span className="text-blue-400 font-semibold">Deepak</span>, a{" "}
                <span className="text-purple-400 font-semibold">DevOps Engineer</span> who
                loves building reliable CI/CD pipelines, automating repeatable workflows,
                and running scalable, secure cloud infrastructure.
              </p>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                I’m <span className="text-blue-400">open to full-time roles</span> and currently
                taking on <span className="text-purple-400">freelance projects</span> for startups and
                growing teams—turning manual ops into elegant automation.
              </p>

              <a
                href="/Deepak-Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition text-white font-medium shadow-lg shadow-blue-500/30"
              >
                <FileDown className="w-5 h-5" />
                Download Resume
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition shadow-lg backdrop-blur">
                <Users className="w-7 h-7 text-blue-400 mb-3" />
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-gray-400 text-sm">Happy Clients</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition shadow-lg backdrop-blur">
                <Briefcase className="w-7 h-7 text-purple-400 mb-3" />
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-gray-400 text-sm">Projects Delivered</div>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 transition shadow-lg backdrop-blur">
                <Clock className="w-7 h-7 text-green-400 mb-3" />
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
