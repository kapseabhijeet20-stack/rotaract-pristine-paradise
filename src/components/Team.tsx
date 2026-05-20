"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section id="team" className="section-spacing bg-gradient-to-b from-white via-rotaract-soft/20 to-white relative overflow-hidden">
      <div className="absolute top-40 left-0 w-72 h-72 bg-rotaract-purple/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-rotaract-pink/5 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-label">Our Team</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-rotaract-dark text-center">
            Meet Our <span className="gradient-text italic font-elegant">Board of Directors</span>
          </h2>
          <div className="divider-fancy">
            <span className="text-rotaract-pink text-xl">✦</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-elegant italic text-center max-w-2xl mx-auto">
            Passionate leaders driving our mission forward
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-rotaract-pink/20 transition-all duration-300"
            >
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-rotaract-pink/10 to-rotaract-gold/10">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-5 text-center">
                <span className="inline-block px-2.5 py-1 bg-rotaract-pink/10 text-rotaract-pink rounded-full text-xs font-semibold mb-2">
                  {member.position}
                </span>
                <h3 className="text-base font-display font-bold text-rotaract-dark mb-2">
                  {member.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-3 font-elegant italic line-clamp-3">
                  {member.description}
                </p>

                <div className="flex gap-2 justify-center pt-3 border-t border-gray-100">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-rotaract-pink hover:text-white flex items-center justify-center text-xs font-bold text-gray-600 transition-all">
                    in
                  </a>
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-rotaract-pink hover:text-white flex items-center justify-center text-xs font-bold text-gray-600 transition-all">
                    ig
                  </a>
                </div>
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
          className="flex justify-center"
        >
          <div className="bg-gradient-to-br from-rotaract-soft to-rotaract-cream rounded-3xl p-12 md:p-16 border border-rotaract-pink/10 shadow-md max-w-3xl w-full text-center">
            <div className="text-6xl mb-6">🤝</div>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-rotaract-dark mb-4 leading-tight">
              Want to Join <span className="gradient-text italic font-elegant">Our Team?</span>
            </h3>
            <p className="text-gray-600 mb-10 font-elegant italic text-lg md:text-xl leading-relaxed" style={{ textAlign: 'center' }}>
              Become part of our amazing community of changemakers
            </p>
            <div className="flex justify-center">
              <a href="#join" style={{ padding: '14px 40px', fontSize: '15px' }} className="inline-flex items-center justify-center gap-2 gradient-bg text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Apply Now →
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
