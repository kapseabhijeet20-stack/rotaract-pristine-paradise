"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-rotaract-soft/30 to-white" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-rotaract-pink/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-rotaract-gold/10 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-rotaract-purple/10 rounded-full filter blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="absolute top-10 left-10 text-4xl opacity-10">✦</div>
        <div className="absolute top-10 right-10 text-4xl opacity-10">✦</div>
        <div className="absolute bottom-10 left-10 text-4xl opacity-10">✦</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-10">✦</div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-10"
          >
            <div className="px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-rotaract-pink/20 shadow-sm">
              <p className="text-rotaract-pink text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                <span className="text-rotaract-gold">✦</span>
                Rotaract Club of Pune Pristine Paradise
                <span className="text-rotaract-gold">✦</span>
              </p>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-4 text-rotaract-dark leading-none tracking-tight"
            style={{ textAlign: 'center' }}
          >
            SYNERGY
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center justify-center gap-4 my-6"
          >
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-transparent to-rotaract-gold" />
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-elegant italic text-rotaract-gold font-bold">
              Sparks
            </h2>
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-transparent to-rotaract-gold" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-12 gradient-text leading-none tracking-tight"
            style={{ textAlign: 'center' }}
          >
            SUCCESS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg md:text-2xl text-gray-600 mb-14 leading-relaxed font-elegant italic"
            style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}
          >
            Empowering young leaders through <span className="text-rotaract-pink font-semibold not-italic">service</span>, <span className="text-rotaract-gold font-semibold not-italic">fellowship</span>, and <span className="text-rotaract-purple font-semibold not-italic">innovation</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ marginBottom: '26px' }}

          >
            <a href="#join" style={{ padding: '14px 40px', fontSize: '15px' }} className="inline-flex items-center justify-center gap-2 gradient-bg text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Join Our Community →
            </a>
            <a href="#about" style={{ padding: '14px 40px', fontSize: '15px' }} className="inline-flex items-center justify-center gap-2 bg-white text-rotaract-dark font-bold rounded-full shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-rotaract-pink transition-all duration-300">
              Discover More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5" style={{ maxWidth: '900px', width: '100%' }}>
              {[
                { number: "16", label: "Board Members", icon: "👥" },
                { number: "25+", label: "Events Hosted", icon: "🎉" },
                { number: "5000+", label: "Lives Impacted", icon: "❤️" },
                { number: "100+", label: "Volunteers", icon: "🤝" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-display font-black gradient-text mb-1" style={{ textAlign: 'center' }}>
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
      >
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-xs font-semibold uppercase tracking-widest font-elegant italic">Scroll</span>
          <div className="w-5 h-9 border-2 border-gray-300 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-1.5 bg-gray-400 rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
