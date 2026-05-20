"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section-spacing bg-white relative overflow-hidden">
      <div className="absolute top-40 right-0 w-72 h-72 bg-rotaract-pink/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-40 left-0 w-72 h-72 bg-rotaract-gold/5 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-label">About Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-rotaract-dark text-center">
            Who We <span className="gradient-text italic font-elegant">Are</span>
          </h2>
          <div className="divider-fancy">
            <span className="text-rotaract-pink text-xl">✦</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-elegant italic text-center max-w-3xl mx-auto">
            Rotaract Club of Pune Pristine Paradise is a vibrant community of young leaders dedicated to making a meaningful impact through service, fellowship, and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: "🎯",
              title: "Our Mission",
              description: "To empower young professionals through impactful community service, leadership development, and meaningful fellowship.",
              gradient: "from-rose-400 via-pink-500 to-red-500",
              pattern: "🌸",
              accentColor: "text-rose-500",
            },
            {
              icon: "👁️",
              title: "Our Vision",
              description: "To be a leading force in our community, inspiring young leaders to drive innovation and foster meaningful connections.",
              gradient: "from-blue-400 via-indigo-500 to-purple-500",
              pattern: "🌟",
              accentColor: "text-indigo-500",
            },
            {
              icon: "💎",
              title: "Our Values",
              description: "Service above self, integrity, diversity, fellowship, leadership, and the belief that synergy sparks success.",
              gradient: "from-amber-400 via-orange-500 to-yellow-500",
              pattern: "✨",
              accentColor: "text-amber-500",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-rotaract-pink/20 transition-all duration-300"
            >
              <div className={`relative h-44 bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-3 left-3 text-2xl opacity-50">{item.pattern}</div>
                <div className="absolute top-3 right-3 text-2xl opacity-50">{item.pattern}</div>
                <div className="absolute bottom-3 left-3 text-2xl opacity-50">{item.pattern}</div>
                <div className="absolute bottom-3 right-3 text-2xl opacity-50">{item.pattern}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-5xl border-4 border-white/40 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  {item.icon}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-display font-bold text-rotaract-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-elegant italic">
                  {item.description}
                </p>
              </div>

              <div className="h-1 gradient-bg" />
            </motion.div>
          ))}
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
          className="max-w-6xl mx-auto"
        >
          <div className="bg-gradient-to-br from-rotaract-soft via-white to-rotaract-cream rounded-3xl p-10 md:p-14 border border-rotaract-pink/10 shadow-md">
            <div className="text-center mb-10">
              <span className="section-label">What is Rotaract?</span>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-rotaract-dark mb-4 text-center">
                Service <span className="gradient-text italic font-elegant">Above Self</span>
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-center font-elegant italic text-lg max-w-3xl mx-auto mb-10">
              Rotaract is a global service club for young professionals aged 18-30, sponsored by Rotary International. As part of Rotary International, we have access to a worldwide network of over <span className="font-bold text-rotaract-pink not-italic">1.4 million members</span> across <span className="font-bold text-rotaract-pink not-italic">200+ countries</span>.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-3xl mb-2">🌟</div>
                <div className="text-2xl md:text-3xl font-display font-black gradient-text mb-1">1968</div>
                <div className="text-xs text-gray-600 font-elegant italic">Founded</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-3xl mb-2">🌍</div>
                <div className="text-2xl md:text-3xl font-display font-black gradient-text mb-1">200+</div>
                <div className="text-xs text-gray-600 font-elegant italic">Countries</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-3xl mb-2">🏛️</div>
                <div className="text-2xl md:text-3xl font-display font-black gradient-text mb-1">10K+</div>
                <div className="text-xs text-gray-600 font-elegant italic">Clubs</div>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1">
                <div className="text-3xl mb-2">👥</div>
                <div className="text-2xl md:text-3xl font-display font-black gradient-text mb-1">1.4M+</div>
                <div className="text-xs text-gray-600 font-elegant italic">Members</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
