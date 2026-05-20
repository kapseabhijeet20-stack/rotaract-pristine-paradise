"use client";

import { motion } from "framer-motion";

export default function Join() {
  const GOOGLE_FORM_LINK = "https://docs.google.com/forms/d/e/1FAIpQLSeviMRYZefM6lncAHHAWOpNwyFSgwXkDv0_0J1dZqvbvny-jg/viewform?usp=preview";
  

  const benefits = [
    {
      icon: "🌟",
      title: "Personal Growth",
      description: "Develop leadership and professional skills through workshops",
      gradient: "from-amber-400 via-orange-500 to-yellow-500",
      pattern: "✨",
    },
    {
      icon: "🤝",
      title: "Networking",
      description: "Connect with like-minded young professionals",
      gradient: "from-blue-400 via-indigo-500 to-purple-500",
      pattern: "💫",
    },
    {
      icon: "🌍",
      title: "Global Community",
      description: "Be part of an international network of 1.4M+ members",
      gradient: "from-emerald-400 via-teal-500 to-cyan-500",
      pattern: "🌐",
    },
    {
      icon: "💼",
      title: "Career Opportunities",
      description: "Access exclusive career events and internships",
      gradient: "from-rose-400 via-pink-500 to-red-500",
      pattern: "🎯",
    },
    {
      icon: "❤️",
      title: "Community Impact",
      description: "Make a real difference through service projects",
      gradient: "from-violet-400 via-purple-500 to-fuchsia-500",
      pattern: "💝",
    },
    {
      icon: "🎉",
      title: "Fellowship & Fun",
      description: "Enjoy social events and unforgettable experiences",
      gradient: "from-pink-400 via-rose-500 to-orange-500",
      pattern: "🎊",
    },
  ];

  return (
    <section id="join" className="section-spacing bg-gradient-to-b from-white via-rotaract-soft/20 to-white relative overflow-hidden">
      <div className="absolute top-20 left-0 w-72 h-72 bg-rotaract-pink/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-rotaract-gold/5 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-label">Join Us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-rotaract-dark text-center">
            Become a <span className="gradient-text italic font-elegant">Changemaker</span>
          </h2>
          <div className="divider-fancy">
            <span className="text-rotaract-pink text-xl">✦</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-elegant italic text-center max-w-2xl mx-auto">
            Take the first step towards an incredible journey of growth and meaningful connections
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-rotaract-pink/20 transition-all duration-300"
            >
              <div className={`relative h-40 bg-gradient-to-br ${benefit.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="absolute top-2 left-2 text-xl opacity-40">{benefit.pattern}</div>
                <div className="absolute top-2 right-2 text-xl opacity-40">{benefit.pattern}</div>
                <div className="absolute bottom-2 left-2 text-xl opacity-40">{benefit.pattern}</div>
                <div className="absolute bottom-2 right-2 text-xl opacity-40">{benefit.pattern}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="relative z-10 w-20 h-20 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-5xl border-4 border-white/40 shadow-xl group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-display font-bold text-rotaract-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed font-elegant italic">
                  {benefit.description}
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
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-rotaract-soft via-white to-rotaract-cream rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden border border-rotaract-pink/10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rotaract-pink/5 rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-rotaract-gold/5 rounded-full filter blur-3xl" />
            <div className="absolute top-10 left-10 text-4xl opacity-10">✦</div>
            <div className="absolute top-10 right-10 text-4xl opacity-10">✦</div>
            <div className="absolute bottom-10 left-10 text-4xl opacity-10">✦</div>
            <div className="absolute bottom-10 right-10 text-4xl opacity-10">✦</div>

            <div className="relative z-10 text-center">
              <div className="inline-block mb-6">
                <div className="px-5 py-2 rounded-full bg-rotaract-pink/10 border border-rotaract-pink/20">
                  <p className="text-rotaract-pink text-xs font-semibold uppercase tracking-widest flex items-center gap-2">
                    <span className="text-rotaract-gold">✦</span>
                    Ready to Make an Impact?
                    <span className="text-rotaract-gold">✦</span>
                  </p>
                </div>
              </div>

              <h3 className="text-3xl md:text-5xl font-display font-bold text-rotaract-dark mb-4 leading-tight" style={{ textAlign: 'center' }}>
                Apply to Join <span className="gradient-text italic font-elegant">Our Club</span>
              </h3>

              <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed font-elegant italic" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                Fill out our membership application form and take the first step
              </p>

              <div className="flex justify-center mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ maxWidth: '700px' }}>
                  <div className="bg-white rounded-2xl border border-rotaract-pink/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                    <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-xl font-black text-white shadow-md" style={{ marginBottom: '16px' }}>
                      1
                    </div>
                    <h4 className="text-base font-display font-bold text-rotaract-dark" style={{ textAlign: 'center', marginBottom: '4px' }}>Apply</h4>
                    <p className="text-xs text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>Fill the form</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-rotaract-pink/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                    <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-xl font-black text-white shadow-md" style={{ marginBottom: '16px' }}>
                      2
                    </div>
                    <h4 className="text-base font-display font-bold text-rotaract-dark" style={{ textAlign: 'center', marginBottom: '4px' }}>Connect</h4>
                    <p className="text-xs text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>We will reach out</p>
                  </div>
                  <div className="bg-white rounded-2xl border border-rotaract-pink/10 shadow-md hover:shadow-lg transition-all hover:-translate-y-1" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '180px' }}>
                    <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center text-xl font-black text-white shadow-md" style={{ marginBottom: '16px' }}>
                      3
                    </div>
                    <h4 className="text-base font-display font-bold text-rotaract-dark" style={{ textAlign: 'center', marginBottom: '4px' }}>Join</h4>
                    <p className="text-xs text-gray-600 font-elegant italic" style={{ textAlign: 'center' }}>Welcome aboard!</p>
                  </div>
                </div>
              </div>


              <div className="flex justify-center mb-42">

                <div className="flex justify-center" style={{ marginTop: '40px' }}>
                <a 
                  href={GOOGLE_FORM_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ padding: '12px 36px', fontSize: '14px' }}
                  className="inline-flex items-center justify-center gap-2 gradient-bg text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Fill Application Form →
                </a>
              </div>
              </div>

              <p className="text-sm text-gray-500 mt-6 font-elegant italic" style={{ textAlign: 'center' }}>
                Have questions? <a href="#contact" className="text-rotaract-pink font-semibold hover:underline">Contact us</a>
              </p>
            </div>
          </div>
        </motion.div>
         
      
      </div>
    </section>
  );
}
