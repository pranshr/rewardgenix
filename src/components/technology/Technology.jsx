import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const cards = [
  {
    id: 1,
    category: "Travel",
    title: "5 Inspiring Apps\nfor Your Next Trip",
    bg: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    description: "Discover the best travel apps that will transform how you explore the world. From offline maps to hidden gems finders.",
  },
  {
    id: 2,
    category: "How to",
    title: "Contemplate the Meaning\nof Life Twice a Day",
    bg: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=85",
    description: "Build a mindfulness habit that sticks. Learn how structured reflection can improve focus, clarity, and overall wellbeing.",
  },
  {
    id: 3,
    category: "Steps",
    title: "Urban Exploration Apps\nfor the Vertically-Inclined",
    bg: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85",
    description: "Scale rooftops, bridges, and skyscrapers with confidence. These apps give you routes, safety tips and community.",
  },
  {
    id: 4,
    category: "Steps",
    title: "Urban Exploration Apps\nfor the Vertically-Inclined",
    bg: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=85",
    description: "Scale rooftops, bridges, and skyscrapers with confidence.",
  },
  {
    id: 5,
    category: "Hats",
    title: "Take Control of Your Hat Life\nWith This Stunning New App",
    bg: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=900&q=85",
    description: "Organize, discover, and style your hat collection like never before. AI-powered outfit matching included.",
  },
  {
    id: 6,
    category: "Steps",
    title: "Urban Exploration Apps\nfor the Vertically-Inclined",
    bg: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=900&q=85",
    description: "Scale rooftops, bridges, and skyscrapers with confidence.",
  },
  {
    id: 7,
    category: "Travel",
    title: "5 Inspiring Apps\nfor Your Next Trip",
    bg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900&q=85",
    description: "Discover the best travel apps that will transform how you explore the world.",
  },
  {
    id: 8,
    category: "How to",
    title: "Contemplate the Meaning\nof Life Twice a Day",
    bg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&q=85",
    description: "Build a mindfulness habit that sticks.",
  },
  {
    id: 9,
    category: "Steps",
    title: "Urban Exploration Apps\nfor the Vertically-Inclined",
    bg: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=85",
    description: "Scale rooftops, bridges, and skyscrapers with confidence.",
  },
];

// ─── Popup ────────────────────────────────────────────────────────────────────
function Popup({ startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  const [direction, setDirection] = useState(0);

  const prev = () => { setDirection(-1); setCurrent((p) => (p - 1 + cards.length) % cards.length); };
  const next = () => { setDirection(1); setCurrent((p) => (p + 1) % cards.length); };

  useEffect(() => {
    const fn = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  const card = cards[current];
  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    center: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 z-50 flex items-center justify-center p-5"
      style={{ background: "rgba(8,12,35,0.78)", backdropFilter: "blur(22px)" }}
    >
      {/* LEFT ARROW */}
      <motion.button
        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.88 }}
        onClick={prev}
        className="absolute z-10 flex items-center justify-center rounded-full border border-white/30 cursor-pointer"
        style={{ left: "calc(46% - 300px)", top: "50%", transform: "translateY(-50%)", width: 52, height: 52, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M14 5L8 11L14 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* POPUP CARD */}
      <div className="relative z-10 overflow-hidden rounded-3xl" style={{ width: "min(480px, 88vw)" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current} custom={direction} variants={variants}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="bg-white rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 50px 100px rgba(0,0,0,0.55)" }}
          >
            <div className="relative overflow-hidden" style={{ height: 280 }}>
              <img src={card.bg} className="w-full h-full object-cover" alt={card.title} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,35,0.88) 0%, transparent 55%)" }} />
              <div
                className="absolute top-4 left-4 px-3 py-1 rounded-full text-white font-extrabold uppercase tracking-widest border border-white/20"
                style={{ fontSize: 10, background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)" }}
              >
                {card.category}
              </div>
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg cursor-pointer border border-white/15"
                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>×
              </motion.button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-white font-extrabold leading-snug" style={{ fontSize: 19, fontFamily: "'Georgia', serif", whiteSpace: "pre-line" }}>
                  {card.title}
                </h2>
              </div>
              <div className="absolute bottom-4 right-4 flex gap-1 items-center">
                {cards.map((_, i) => (
                  <motion.div key={i}
                    animate={{ scale: i === current ? 1 : 0.55, opacity: i === current ? 1 : 0.35 }}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className="w-1.5 h-1.5 rounded-full bg-white cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{card.description}</p>
              <div className="flex gap-2.5">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="flex-1 bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm py-3 px-4 rounded-xl cursor-pointer transition-colors duration-200">
                  Explore Now →
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onClose}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold text-sm py-3 px-4 rounded-xl cursor-pointer transition-colors duration-200">
                  Close
                </motion.button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT ARROW */}
      <motion.button
        initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 16 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.88 }}
        onClick={next}
        className="absolute z-10 flex items-center justify-center rounded-full border border-white/30 cursor-pointer"
        style={{ right: "calc(46% - 300px)", top: "50%", transform: "translateY(-50%)", width: 52, height: 52, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M8 5L14 11L8 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>
    </motion.div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function TechnologySection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif" }}>

      {/* ── Navbar — Image 2 exact ── */}
      <div className="bg-slate-100 px-8 py-4 flex items-center">
        <div>
          <div className="font-black text-blue-950" style={{ fontSize: 15, letterSpacing: "0.06em" }}>
            REWARDGENIX
          </div>
          <div className="text-blue-950/55 font-semibold" style={{ fontSize: 8, letterSpacing: "0.2em" }}>
            REWARD . ENABLE . ENGAGE
          </div>
        </div>
      </div>

      {/* ── Hero — Image 2 exact ── */}
      <div className="text-center" style={{ paddingTop: 52, paddingBottom: 36 }}>
        <p className="text-gray-400 mb-1.5" style={{ fontSize: 13 }}>What do we do</p>
        <h1
          className="font-black text-blue-950 leading-none"
          style={{
            fontSize: "clamp(56px, 8.5vw, 96px)",
            letterSpacing: "-0.02em",
          }}
        >
          TECHNOLOGY
        </h1>
      </div>

      {/* ── GRID — Image 2 exact layout ──
          Looking at Image 2 carefully:
          - Page has white background with wide left/right margins
          - Cards have visible rounded corners (border-radius ~16px)
          - Between cards: small uniform gap ~8-10px
          - Row 1: Card1 is WIDER (roughly 2x width), Card2 and Card3 are equal smaller
          - Row 2: Card4 small, Card5 is WIDER center, Card6 small
          - Row 3: all 3 equal width
          - All rows same height
          - Cards have soft shadow/border visible
      ── */}
      <div className="mx-auto pb-24" style={{ maxWidth: 860, paddingLeft: 40, paddingRight: 40 }}>

        {/* ROW 1: [wide] [normal] [normal] */}
        <div className="flex gap-2.5 mb-2.5">
          {/* Card 1 — wide, landscape ratio */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-shrink-0"
            style={{ width: "48%", height: 230, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(0)}
          >
            <img src={cards[0].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[0].category}</div>
              <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[0].title}</div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 230, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(1)}
          >
            <img src={cards[1].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[1].category}</div>
              <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[1].title}</div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 230, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(2)}
          >
            <img src={cards[2].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[2].category}</div>
              <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[2].title}</div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: [normal] [wide center] [normal] */}
        <div className="flex gap-2.5 mb-2.5">
          {/* Card 4 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 230, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(3)}
          >
            <img src={cards[3].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[3].category}</div>
              <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[3].title}</div>
            </div>
          </motion.div>

          {/* Card 5 — wide center */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-shrink-0"
            style={{ width: "48%", height: 230, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(4)}
          >
            <img src={cards[4].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[4].category}</div>
              <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[4].title}</div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 230, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(5)}
          >
            <img src={cards[5].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[5].category}</div>
              <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[5].title}</div>
            </div>
          </motion.div>
        </div>

        {/* ROW 3: all equal */}
        <div className="flex gap-2.5">
          {[6, 7, 8].map((idx, i) => (
            <motion.div
              key={cards[idx].id}
              className="relative overflow-hidden cursor-pointer flex-1"
              style={{ height: 230, borderRadius: 16 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.05 }}
              whileHover={{ scale: 1.016 }}
              onClick={() => setOpenIndex(idx)}
            >
              <img src={cards[idx].bg} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[idx].category}</div>
                <div className="text-white font-bold leading-snug" style={{ fontSize: 13, fontFamily: "'Georgia',serif", whiteSpace: "pre-line" }}>{cards[idx].title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {openIndex !== null && (
          <Popup startIndex={openIndex} onClose={() => setOpenIndex(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}