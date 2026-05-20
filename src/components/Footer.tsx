"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-rotaract-dark via-purple-900 to-rotaract-pink-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rotaract-pink/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rotaract-gold/20 rounded-full filter blur-3xl" />
      <div className="absolute top-8 left-8 text-3xl opacity-20">✦</div>
      <div className="absolute top-8 right-8 text-3xl opacity-20">✦</div>
      <div className="absolute bottom-8 left-8 text-3xl opacity-20">✦</div>
      <div className="absolute bottom-8 right-8 text-3xl opacity-20">✦</div>

      <div className="container-custom relative z-10" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center" style={{ marginBottom: '60px' }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-20 h-20 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl p-2 shadow-xl">
              <img src="/images/logo.png" alt="Rotaract Club Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-display font-bold text-white">Rotaract Club</h3>
              <p className="text-sm text-rotaract-gold font-semibold tracking-wider">Pune Pristine Paradise</p>
            </div>
          </div>
          <div className="my-8">
            <p className="text-4xl md:text-5xl font-display font-black mb-2" style={{ textAlign: 'center' }}>
              <span className="text-white">SYNERGY </span>
              <span className="italic font-elegant text-rotaract-gold">Sparks</span>
              <span className="gradient-text"> SUCCESS</span>
            </p>
          </div>

          <p className="text-base text-white/80 leading-relaxed font-elegant italic" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            Empowering young leaders through service, fellowship, and innovation
          </p>

          <div className="flex justify-center gap-3 mt-10">
            <a href="https://www.instagram.com/racpunepristineparadise/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl hover:bg-rotaract-pink hover:scale-110 transition-all duration-300 border border-white/20">
              📷
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl hover:bg-rotaract-pink hover:scale-110 transition-all duration-300 border border-white/20">
              💼
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl hover:bg-rotaract-pink hover:scale-110 transition-all duration-300 border border-white/20">
              👥
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-xl hover:bg-rotaract-pink hover:scale-110 transition-all duration-300 border border-white/20">
              🐦
            </a>
          </div>
        </motion.div>

        <div className="flex justify-center" style={{ marginBottom: '60px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ maxWidth: '700px', width: '100%' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-widest" style={{ marginBottom: '20px' }}>
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-sm text-white/70 hover:text-rotaract-gold transition-colors font-elegant italic">Home</a></li>
                <li><a href="#about" className="text-sm text-white/70 hover:text-rotaract-gold transition-colors font-elegant italic">About Us</a></li>
                <li><a href="#team" className="text-sm text-white/70 hover:text-rotaract-gold transition-colors font-elegant italic">Our Team</a></li>
                <li><a href="#events" className="text-sm text-white/70 hover:text-rotaract-gold transition-colors font-elegant italic">Events</a></li>
                <li><a href="#awards" className="text-sm text-white/70 hover:text-rotaract-gold transition-colors font-elegant italic">Awards</a></li>
                <li><a href="#join" className="text-sm text-white/70 hover:text-rotaract-gold transition-colors font-elegant italic">Join Us</a></li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} style={{ textAlign: 'center' }}>
              <h4 className="text-sm font-display font-bold text-white uppercase tracking-widest" style={{ marginBottom: '20px' }}>
                Contact Info
              </h4>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-center justify-center gap-2 font-elegant italic">
                  <span className="text-rotaract-gold">📍</span>
                  <span>Pune Pristine Paradise</span>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-rotaract-gold">✉️</span>
                  <a href="mailto:racpunepristineparadise@gmail.com" className="hover:text-rotaract-gold transition-colors font-elegant italic">racpunepristineparadise@gmail.com</a>
                </li>
                <li className="flex items-center justify-center gap-2">
                  <span className="text-rotaract-gold">📞</span>
                  <a href="tel:+919890497441" className="hover:text-rotaract-gold transition-colors font-elegant italic">+91 98904 97441</a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center" style={{ marginBottom: '40px' }}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20" style={{ padding: '32px', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
            <h4 className="text-xl font-display font-bold text-white mb-2" style={{ textAlign: 'center' }}>
              📬 Stay <span className="italic font-elegant text-rotaract-gold">Updated</span>
            </h4>
            <p className="text-sm text-white/70 mb-6 font-elegant italic" style={{ textAlign: 'center' }}>
              Subscribe to our newsletter for the latest updates
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email..." className="flex-1 px-4 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:border-rotaract-gold transition-colors" />
              <button style={{ padding: '10px 28px', fontSize: '14px' }} className="gradient-bg text-white font-bold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/60 mb-3 font-elegant italic" style={{ textAlign: 'center' }}>
            © {currentYear} <span className="text-rotaract-gold font-semibold">Rotaract Club of Pune Pristine Paradise</span>. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-xs mb-4">
            <a href="#" className="text-white/60 hover:text-rotaract-gold transition-colors font-elegant italic">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-rotaract-gold transition-colors font-elegant italic">Terms of Service</a>
            <a href="#" className="text-white/60 hover:text-rotaract-gold transition-colors font-elegant italic">Sitemap</a>
          </div>
          <p className="text-xs text-white/40 font-elegant italic" style={{ textAlign: 'center' }}>
            Made with ❤️ for the Rotaract Community
          </p>
        </div>
      </div>
    </footer>
  );
}
