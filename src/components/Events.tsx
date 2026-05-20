"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { events, Avenue } from "@/data/events";

export default function Events() {
  const [statusFilter, setStatusFilter] = useState<"all" | "past" | "upcoming">("all");
  const [avenueFilter, setAvenueFilter] = useState<Avenue | "all">("all");

  const allAvenues: Avenue[] = [
    "Professional Development",
    "Community Service",
    "Club Service",
    "DEI",
    "Rotary-Rotaract Relations",
    "International Service",
    "Health & Wellness",
  ];

  const filteredEvents = events.filter((event) => {
    const statusMatch = statusFilter === "all" || event.status === statusFilter;
    const avenueMatch = avenueFilter === "all" || event.avenues.includes(avenueFilter);
    return statusMatch && avenueMatch;
  });

  const upcomingCount = events.filter((e) => e.status === "upcoming").length;
  const pastCount = events.filter((e) => e.status === "past").length;

  const getAvenueIcon = (avenue: Avenue) => {
    if (avenue === "Professional Development") return "💼";
    if (avenue === "Community Service") return "🤝";
    if (avenue === "Club Service") return "🏛️";
    if (avenue === "DEI") return "🌈";
    if (avenue === "Rotary-Rotaract Relations") return "🔗";
    if (avenue === "International Service") return "🌍";
    if (avenue === "Health & Wellness") return "🧘";
    return "🎉";
  };

  return (
    <section id="events" className="section-spacing bg-gradient-to-b from-white via-rotaract-soft/20 to-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-rotaract-pink/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-rotaract-gold/5 rounded-full filter blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-heading"
        >
          <span className="section-label">Our Events</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display mb-6 text-rotaract-dark text-center">
            Our <span className="gradient-text italic font-elegant">Journey</span> of Impact
          </h2>
          <div className="divider-fancy">
            <span className="text-rotaract-pink text-xl">✦</span>
          </div>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-elegant italic text-center max-w-2xl mx-auto">
            Explore our events across the 6 avenues of Rotaract
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="btn-group mb-8"
        >
          <button
            onClick={() => setStatusFilter("all")}
            className={`btn-filter ${statusFilter === "all" ? "btn-filter-active" : "btn-filter-inactive"}`}
          >
            All Events ({events.length})
          </button>
          <button
            onClick={() => setStatusFilter("upcoming")}
            className={`btn-filter ${statusFilter === "upcoming" ? "btn-filter-active" : "btn-filter-inactive"}`}
          >
            Upcoming ({upcomingCount})
          </button>
          <button
            onClick={() => setStatusFilter("past")}
            className={`btn-filter ${statusFilter === "past" ? "btn-filter-active" : "btn-filter-inactive"}`}
          >
            Past ({pastCount})
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="btn-group mb-16"
        >
          <button
            onClick={() => setAvenueFilter("all")}
            className={`btn-avenue ${avenueFilter === "all" ? "btn-avenue-active" : "btn-avenue-inactive"}`}
          >
            🎯 All Avenues
          </button>
          {allAvenues.map((avenue) => (
            <button
              key={avenue}
              onClick={() => setAvenueFilter(avenue)}
              className={`btn-avenue ${avenueFilter === avenue ? "btn-avenue-active" : "btn-avenue-inactive"}`}
            >
              {getAvenueIcon(avenue)} {avenue}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:border-rotaract-pink/20 transition-all duration-300"
            >
              <div className="relative h-44 bg-gradient-to-br from-rotaract-pink via-rotaract-purple to-rotaract-blue flex items-center justify-center">
                <div className="text-6xl">
                  {getAvenueIcon(event.avenues[0])}
                </div>
                <div className="absolute top-3 right-3">
                  <span className={event.status === "upcoming" ? "px-2.5 py-1 rounded-full text-xs font-semibold bg-rotaract-gold text-white shadow-md" : "px-2.5 py-1 rounded-full text-xs font-semibold bg-white text-gray-700 shadow-md"}>
                    {event.status === "upcoming" ? "Upcoming" : "Past"}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs text-rotaract-pink font-semibold mb-2">
                  📅 {event.date}
                </p>
                <h3 className="text-xl font-display font-bold text-rotaract-dark mb-3 leading-tight">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-4 font-elegant italic">
                  {event.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {event.avenues.map((avenue) => (
                    <span
                      key={avenue}
                      className="inline-block px-2.5 py-1 bg-rotaract-purple/10 text-rotaract-purple rounded-full text-xs font-semibold"
                    >
                      {getAvenueIcon(avenue)} {avenue}
                    </span>
                  ))}
                </div>

                {event.location && (
                  <p className="text-xs text-gray-500 mt-2">
                    📍 {event.location}
                  </p>
                )}
              </div>

              <div className="h-1 gradient-bg" />
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <div className="text-5xl mb-4">🔍</div>
            <p className="text-lg text-gray-500 font-elegant italic">No events found for this filter</p>
          </div>
        )}
      </div>
    </section>
  );
}
