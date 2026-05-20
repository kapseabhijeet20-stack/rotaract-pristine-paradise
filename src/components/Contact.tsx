"use client";

import { motion } from "framer-motion";

export default function Contact() {
  const INSTAGRAM_LINK = "https://www.instagram.com/racpunepristineparadise/";
  const GOOGLE_REVIEWS_LINK = "https://share.google/JSFjBokrq98tJFolz";
  const EMAIL = "racpunepristineparadise@gmail.com";
  const PHONE = "+91 98904 97441";


  const socialLinks = [
    {
      name: "Instagram",
      handle: "@racpunepristineparadise",
      icon: "📷",
      url: INSTAGRAM_LINK,
      gradient: "from-pink-400 via-purple-500 to-orange-500",
      description: "Follow our latest moments",
      pattern: "📸",
    },
    {
      name: "Google Reviews",
      handle: "Read & Review Us",
      icon: "⭐",
      url: GOOGLE_REVIEWS_LINK,
      gradient: "from-blue-400 via-cyan-500 to-teal-500",
      description: "See what people say",
      pattern: "✨",
    },
    {
      name: "Email",
      handle: EMAIL,
      icon: "✉️",
      url: `mailto:${EMAIL}`,
      gradient: "from-red-400 via-rose-500 to-pink-500",
      description: "Drop us a message",
      pattern: "💌",
    },
    {
      name: "Phone",
      handle: PHONE,
      icon: "📞",
      url: `tel:${PHONE.replace(/\s/g, "")}`,
      gradient: "from-green-400 via-emerald-500 to-teal-500",
      description: "Give us a call",
      pattern: "📱",
    },
  ];

  return (
    <section id="contact" className="bg-white relative overflow-hidden" style={{ paddingTop: '180px', paddingBottom: '180px' }}>
      <div className="absolute top-20 right-0 w-72 h-72 bg-rotaract-pink/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-rotaract-purple/5 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-rotaract-dark text-center">
            Connect <span className="gradient-text italic font-elegant">With Us</span>
          </h2>
          <div className="divider-fancy">
            <span className="text-rotaract-pink text-xl">✦</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-elegant italic text-center max-w-2xl mx-auto">
            Follow our journey, share your experience, or just say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group block bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-rotaract-pink/20 transition-all duration-300"
            >
              <div className={`relative h-32 bg-gradient-to-br ${link.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-2 left-2 text-xl opacity-40">{link.pattern}</div>
                <div className="absolute top-2 right-2 text-xl opacity-40">{link.pattern}</div>
                <div className="absolute bottom-2 left-2 text-xl opacity-40">{link.pattern}</div>
                <div className="absolute bottom-2 right-2 text-xl opacity-40">{link.pattern}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-4xl border-4 border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
              </div>

              <div className="p-6 text-center">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-2">
                  {link.name}
                </p>
                <h3 className="text-lg font-display font-bold text-rotaract-dark mb-2 truncate">
                  {link.handle}
                </h3>
                <p className="text-sm text-gray-600 font-elegant italic">
                  {link.description}
                </p>
              </div>

              <div className="h-1 gradient-bg" />
            </motion.a>
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
          className="flex justify-center"
        >
          <div className="relative bg-gradient-to-br from-rotaract-soft via-white to-rotaract-cream rounded-3xl border border-rotaract-pink/10 shadow-md overflow-hidden" style={{ maxWidth: '1000px', width: '100%', paddingTop: '100px', paddingBottom: '100px', paddingLeft: '60px', paddingRight: '60px' }}>
            <div className="absolute top-0 right-0 w-96 h-96 bg-rotaract-pink/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rotaract-gold/5 rounded-full filter blur-3xl" />
            <div className="absolute top-8 left-8 text-3xl opacity-20">✦</div>
            <div className="absolute top-8 right-8 text-3xl opacity-20">✦</div>
            <div className="absolute bottom-8 left-8 text-3xl opacity-20">✦</div>
            <div className="absolute bottom-8 right-8 text-3xl opacity-20">✦</div>

            <div className="relative z-10 text-center">
              <div className="inline-block mb-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-rotaract-pink to-rotaract-gold flex items-center justify-center text-4xl shadow-xl">
                  📍
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold text-rotaract-dark mb-4" style={{ textAlign: 'center' }}>
                Visit Us in <span className="gradient-text italic font-elegant">Pune</span>
              </h3>

              <p className="text-gray-600 mb-12 font-elegant italic text-lg" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                1410, near Deenanath Mangeshkar Hospital and Research Center,<br/>Pune, Maharashtra 411004
              </p>

              <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: '700px', width: '100%' }}>
                  <div className="bg-white rounded-2xl border border-rotaract-pink/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rotaract-pink/10 to-rotaract-gold/10 flex items-center justify-center text-2xl" style={{ marginBottom: '16px' }}>
                      🕐
                    </div>
                    <h4 className="text-base font-display font-bold text-rotaract-dark" style={{ textAlign: 'center', marginBottom: '4px' }}>Meeting Time</h4>
                    <p className="text-xs text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>Weekly Saturdays</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-rotaract-pink/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rotaract-pink/10 to-rotaract-gold/10 flex items-center justify-center text-2xl" style={{ marginBottom: '16px' }}>
                      🌟
                    </div>
                    <h4 className="text-base font-display font-bold text-rotaract-dark" style={{ textAlign: 'center', marginBottom: '4px' }}>Established</h4>
                    <p className="text-xs text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>Active Club</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-rotaract-pink/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rotaract-pink/10 to-rotaract-gold/10 flex items-center justify-center text-2xl" style={{ marginBottom: '16px' }}>
                      🌐
                    </div>
                    <h4 className="text-base font-display font-bold text-rotaract-dark" style={{ textAlign: 'center', marginBottom: '4px' }}>District</h4>
                    <p className="text-xs text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>RID 3131</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
