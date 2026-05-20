"use client";

import { motion } from "framer-motion";
import { awards } from "@/data/awards";

export default function Awards() {
  const getAwardGradient = (index: number) => {
    const gradients = [
      { gradient: "from-amber-400 via-orange-500 to-yellow-500", pattern: "🏆" },
      { gradient: "from-rose-400 via-pink-500 to-red-500", pattern: "🎖️" },
      { gradient: "from-emerald-400 via-teal-500 to-cyan-500", pattern: "🌿" },
      { gradient: "from-blue-400 via-indigo-500 to-purple-500", pattern: "⭐" },
      { gradient: "from-violet-400 via-purple-500 to-fuchsia-500", pattern: "💫" },
      { gradient: "from-pink-400 via-rose-500 to-orange-500", pattern: "🏅" },
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="awards" className="section-spacing bg-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-rotaract-gold/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-rotaract-pink/5 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-label">🏆 Recognition</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-rotaract-dark text-center">
            Awards & <span className="gradient-text italic font-elegant">Achievements</span>
          </h2>
          <div className="divider-fancy">
            <span className="text-rotaract-pink text-xl">✦</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-elegant italic text-center max-w-2xl mx-auto">
            Celebrating our journey of excellence and impact recognized by prestigious organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {awards.map((award, index) => {
            const theme = getAwardGradient(index);
            return (
              <motion.div
                key={award.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-rotaract-gold/30 transition-all duration-300"
              >
                <div className={`relative h-40 bg-gradient-to-br ${theme.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute top-2 left-2 text-lg opacity-40">{theme.pattern}</div>
                  <div className="absolute top-2 right-2 text-lg opacity-40">{theme.pattern}</div>
                  <div className="absolute bottom-2 left-2 text-lg opacity-40">{theme.pattern}</div>
                  <div className="absolute bottom-2 right-2 text-lg opacity-40">{theme.pattern}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-4xl border-4 border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    🏆
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-rotaract-gold-dark rounded-full text-xs font-bold shadow-md">
                      {award.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 text-center">
                    <span className="inline-block px-2.5 py-1 bg-rotaract-pink/10 text-rotaract-pink rounded-full text-xs font-semibold">
                      {award.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-display font-bold text-rotaract-dark mb-3 leading-tight text-center">
                    {award.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4 font-elegant italic text-center">
                    {award.description}
                  </p>

                  <div className="pt-4 border-t border-gray-100 text-center">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1 font-semibold">
                      Awarded By
                    </p>
                    <p className="text-sm text-rotaract-pink font-semibold">
                      {award.awardedBy}
                    </p>
                  </div>
                </div>

                <div className="h-1 gradient-bg" />
              </motion.div>
            );
          })}
        </div>

        <div className="py-20 md:py-32">
          <div className="divider-fancy max-w-md mx-auto">
            <span className="text-rotaract-pink text-2xl">✦</span>
            <span className="text-rotaract-gold text-xl">✦</span>
            <span className="text-rotaract-pink text-2xl">✦</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="section-label">Our Impact</span>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-rotaract-dark mb-4 text-center">
              By the <span className="gradient-text italic font-elegant">Numbers</span>
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { number: "3", label: "Awards Won", icon: "🏆" },
              { number: "6", label: "Years of Excellence", icon: "⭐" },
              { number: "200+", label: "Projects Completed", icon: "✨" },
              { number: "800+", label: "Lives Impacted", icon: "❤️" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-white via-rotaract-cream/20 to-rotaract-soft/20 rounded-2xl p-6 shadow-md border border-gray-100 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-display font-black gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-gray-600 font-elegant italic">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
