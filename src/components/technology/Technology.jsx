import Header from "../common/Header";
import Footer from "../common/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const cards = [
  {
    id: 1,
    title: "Program & Services",
    bg: "./img/technology/Program-&-Services.jpg",
    description: "Manage multi-country program with multi-language website. Allows to control the duration of the program & services. Helps in configuring various earning/burning services with limited/unlimited/Fixed/Multiplier of points.",
  },
  {
    id: 2,
    title: "Members Management",
    bg: "./img/technology/Members-Management.jpg",
    description: "Helps in creating member categories basis the nature of the business (B2B or B2C). Manage hierarchy of members. Provides option to create country specific member profiling structure. Configure Online/Offline data capturing interfaces. Configure various integration points APIs or FTP. Create required workflow to handle data.",
  },
  {
    id: 3,
    category: "",
    title: "Transaction Management",
    bg: "./img/technology/Transaction-Management.jpg",
    description: "Helps in creating /configuring point transaction profiling structure for members. Configure Online/Offline data capturing interfaces. Configure various integration points APIs or FTP. Create required workflow to handle data.",
  },
  {
    id: 4,
    title: "Catalog Management",
    bg: "./img/technology/Catalog-Management.jpg",
    description: "Create country & audience specific catalog. Onboard catalog partners. Configure Online/Offline data capturing interfaces. Configure various integration points APIs or FTP.",
  },
  {
    id: 5,
    title: "Redemption Management",
    bg: "./img/technology/Redemption-Management.jpg",
    description: "Manage country specific redemption order. Configure interfaces to capture Online/Offline data. Helps in configuring integration points like APIs or FTP to send/receive data. Handle the orders with configurable workflows.",
  },
  {
    id: 6,
    title: "Communication",
    bg: "./img/technology/Communication.jpg",
    description: "Manage various communication templates based on business need. Configure service provider to send communications. Manage communication queue.",
  },
  {
    id: 7,
    title: "User Management",
    bg: "./img/technology/User-Management.jpg",
    description: "Manage operational users to handle back-end operations. Restrict the operational users with module access and the action they are allowed for. Bind users with a specific program country.",
  },
  {
    id: 8,
    title: "Dynamic Rules Engine",
    bg: "./img/technology/Dynamic-Rules-Engine.jpg",
    description: "Easy to use interface to build the program logic. Helps in configuring rules for Allocation of Promotional points. Setup Expiry of Points & Membership upgrade/downgrade/expiry. Configure & trigger the event based communication. Apply instantly or schedule rules for specific purpose as per business need.",
  },
  {
    id: 9,
    title: "Content Management System",
    bg: "./img/technology/Content-Management-System.jpg",
    description: "Create multi-lingual website. Create unlimited pages. Create language specific navigation. Manage the member website content.",
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
      style={{ background: "rgba(8,12,35,0.78)" }}
    >
      {/* LEFT ARROW */}
      <motion.button
        initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }}
        whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.88 }}
        onClick={prev}
        className="absolute z-10 flex items-center justify-center rounded-full border border-white/30 cursor-pointer"
        style={{ left: "calc(46% - 300px)", top: "50%", transform: "translateY(-50%)", width: 52, height: 52, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)", boxShadow: "0 8px 30px rgba(0,0,0,0.3)" }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M14 5L8 11L14 17" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.button>

      {/* POPUP CARD */}
      <div className="relative z-10 overflow-hidden rounded-3xl" style={{ width: "min(580px, 88vw)" }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current} custom={direction} variants={variants}
            initial="enter" animate="center" exit="exit"
            transition={{ duration: 0.38, ease: "easeInOut" }}
            className="bg-white rounded-3xl overflow-hidden"
            style={{ boxShadow: "0 50px 100px rgba(0,0,0,0.55)" }}
          >
            <div className="relative overflow-hidden" style={{ height: 400 }}>
              <img src={card.bg} className="w-full h-full object-cover" alt={card.title} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,35,0.88) 0%, transparent 55%)" }} />
              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={onClose}
                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg cursor-pointer border border-white/15"
                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}>×
              </motion.button>
              <div className="absolute bottom-4 left-4 right-4">
                <h2 className="text-white font-medium font-extrabold leading-snug" style={{ whiteSpace: "pre-line" }}>
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
    <div className="w-[calc(100%-4rem)] 2xl:w-[calc(100%-6rem)] min-h-screen bg-white">
      <Header />
      {/* ── Hero — Image 2 exact ── */}
      <div className="text-center" style={{ paddingTop: 52, paddingBottom: 36 }}>
        <div className=" text-[#272A59]">
                    Power your programs
                </div>
        <h1>
          TECHNOLOGY
        </h1>
        <div className="w-5/10 2xl:w-4/10 mx-auto text-center mt-8 mb-4 ">
          <p2>Main Modules : Power your programs with Robust yet Flexible tech platform</p2>
        </div>
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
      <div className="mx-auto pb-24" style={{ maxWidth: 980}}>

        {/* ROW 1: [wide] [normal] [normal] */}
        <div className="flex gap-2.5 mb-2.5">
          
          {/* Card 1 — wide, landscape ratio */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-shrink-0"
            style={{ width: "48%", height: 280, borderRadius:12}}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(0)}
          >
            <img src={cards[0].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[0].category}</div>
              <div className="text-white leading-snug" style={{ whiteSpace: "pre-line" }}>{cards[0].title}</div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 280, borderRadius:12}}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(1)}
          >
            <img src={cards[1].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[1].category}</div>
              <div className="text-white leading-snug" style={{whiteSpace: "pre-line" }}>{cards[1].title}</div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 280, borderRadius: 12}}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(2)}
          >
            <img src={cards[2].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[2].category}</div>
              <div className="text-white leading-snug" style={{whiteSpace: "pre-line" }}>{cards[2].title}</div>
            </div>
          </motion.div>
        </div>

        {/* ROW 2: [normal] [wide center] [normal] */}
        <div className="flex gap-2.5 mb-2.5">
          {/* Card 4 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 280, borderRadius:12 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(3)}
          >
            <img src={cards[3].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[3].category}</div>
              <div className="text-white leading-snug" style={{whiteSpace: "pre-line" }}>{cards[3].title}</div>
            </div>
          </motion.div>

          {/* Card 5 — wide center */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-shrink-0"
            style={{ width: "48%", height: 280, borderRadius:12}}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(4)}
          >
            <img src={cards[4].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[4].category}</div>
              <div className="text-white leading-snug" style={{whiteSpace: "pre-line" }}>{cards[4].title}</div>
            </div>
          </motion.div>

          {/* Card 6 */}
          <motion.div
            className="relative overflow-hidden cursor-pointer flex-1"
            style={{ height: 280, borderRadius: 16 }}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.016 }}
            onClick={() => setOpenIndex(5)}
          >
            <img src={cards[5].bg} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-3.5">
              <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[5].category}</div>
              <div className="text-white leading-snug" style={{whiteSpace: "pre-line" }}>{cards[5].title}</div>
            </div>
          </motion.div>
        </div>

        {/* ROW 3: all equal */}
        <div className="flex gap-2.5">
          {[6, 7, 8].map((idx, i) => (
            <motion.div
              key={cards[idx].id}
              className="relative overflow-hidden cursor-pointer flex-1"
              style={{ height: 280, borderRadius: 16 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.05 }}
              whileHover={{ scale: 1.016 }}
              onClick={() => setOpenIndex(idx)}
            >
              <img src={cards[idx].bg} className="w-full h-full object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,10,30,0.8) 0%, rgba(5,10,30,0.05) 55%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 right-0 p-3.5">
                <div className="text-white/70 font-bold uppercase mb-1" style={{ fontSize: 9, letterSpacing: "0.12em" }}>{cards[idx].category}</div>
                <div className="text-white leading-snug" style={{whiteSpace: "pre-line" }}>{cards[idx].title}</div>
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
      <Footer />
    </div>
  );
}