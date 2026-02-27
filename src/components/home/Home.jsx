import { useState } from "react";
import solutionimg from '../../assets/index-loyalty-gfx.jpg'
import solutionimgbg from '../../assets/index-solution-bg.jpg'
import mobilebg from '../../assets/index-mobile-tab-bg.png'
import laptop  from '../../assets/index-laptop.png'
import ParallaxHeader from "./ParallaxHeader"
import CaseStudy from "./CaseStudy"
import IntegratedCX from "./IntegratedCX"

/* ─────────────────────────────────────────
   SOLUTIONS SECTION
───────────────────────────────────────── */
const SolutionsSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');
        .sol-section * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        .sol-section { position: relative; width: 100%; min-height: 560px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .sol-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          z-index: 0;
        }
        .sol-bg::before { content: ''; position: absolute; inset: 0; background-image: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px); z-index: 1; }
        .sol-bg::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.28) 100%); z-index: 2; }
        .sol-decor-circle { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); z-index: 1; }
        .sol-decor-circle.c1 { width: 320px; height: 320px; top: -80px; left: 10%; }
        .sol-decor-circle.c2 { width: 260px; height: 260px; bottom: -100px; right: 8%; }
        .sol-card { position: relative; z-index: 3; display: flex; width: 74%; max-width: 860px; min-height: 400px; border-radius: 6px; overflow: hidden; box-shadow: 0 24px 80px rgba(0,0,0,0.35); margin: 60px 0; }
        .sol-card-left { flex: 0 0 46%; background: #eeeef6; padding: 52px 44px 44px 44px; display: flex; flex-direction: column; justify-content: center; position: relative; }
        .sol-label {
    position: absolute;
    top: 0px;
    left: 0;
    background: #bd9067;
    color: #fff;
    font-size: 12px;
    letter-spacing: 2.5px;
    padding: 30px 10px;
}
        .sol-title { font-size: 25px; font-weight: 600; color: #0c2077; line-height: 1.25; margin: 44px 0 16px 0; text-transform: uppercase; }
        .sol-desc { font-size: 14px; color: #555; line-height: 1.85; margin-bottom: 34px; }
.sol-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: linear-gradient(to top right, #c79a73, #7a5132);
    color: #fff;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 50px;
    padding: 6px 18px;
    cursor: pointer;
    width: fit-content;
    transition: background 0.3s ease, transform 0.2s ease;
    text-decoration: none;
    box-shadow: 0 4px 16px rgba(201,168,124,0.35);
}
          .sol-btn:hover { background: #b8935f; transform: translateX(4px); color: #fff; }
        .sol-btn-arrow { font-size: 16px; display: inline-block; transition: transform 0.25s ease; }
        .sol-btn:hover .sol-btn-arrow { transform: translateX(5px); }
        .sol-card-right { flex: 1; position: relative; overflow: hidden; background: linear-gradient(135deg, #1a2f5a 0%, #0d3350 35%, #1a4a3a 65%, #0f2d45 100%); }
        .sol-blob { position: absolute; border-radius: 50%; filter: blur(48px); opacity: 0.55; }
        .sol-blob.b1 { width: 280px; height: 280px; background: radial-gradient(circle, #c9a87c, transparent); top: -60px; right: -60px; }
        .sol-blob.b2 { width: 220px; height: 220px; background: radial-gradient(circle, #2a6e8a, transparent); bottom: -40px; left: -40px; }
        .sol-blob.b3 { width: 160px; height: 160px; background: radial-gradient(circle, #4a9a7c, transparent); top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .sol-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(201,168,124,0.18); }
        .sol-ring.r1 { width: 320px; height: 320px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .sol-ring.r2 { width: 220px; height: 220px; top: 50%; left: 50%; transform: translate(-50%, -50%); border-color: rgba(201,168,124,0.28); }
        .sol-ring.r3 { width: 120px; height: 120px; top: 50%; left: 50%; transform: translate(-50%, -50%); border-color: rgba(201,168,124,0.45); background: rgba(201,168,124,0.06); }
        .sol-center-icon { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .sol-icon-star { font-size: 38px; color: #c9a87c; line-height: 1; filter: drop-shadow(0 0 12px rgba(201,168,124,0.6)); }
        .sol-icon-text { font-size: 11px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: rgba(255,255,255,0.5); }
        .sol-dots { position: absolute; display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; opacity: 0.18; }
        .sol-dots.d1 { bottom: 20px; right: 20px; } .sol-dots.d2 { top: 20px; left: 20px; }
        .sol-dot { width: 4px; height: 4px; border-radius: 50%; background: #c9a87c; }
        .sol-lines { position: absolute; inset: 0; overflow: hidden; opacity: 0.06; }
        .sol-lines::before { content: ''; position: absolute; width: 200%; height: 1px; background: linear-gradient(90deg, transparent, #c9a87c, transparent); top: 35%; left: -50%; transform: rotate(-25deg); }
      .sol-img-overlay {
    position: absolute;
    inset: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    /* opacity: 0.18; */
    /* mix-blend-mode: luminosity; */
}
        .sol-lines::after { content: ''; position: absolute; width: 200%; height: 1px; background: linear-gradient(90deg, transparent, #c9a87c, transparent); top: 60%; left: -50%; transform: rotate(-25deg); }
        @media (max-width: 960px) { .sol-card { flex-direction: column; width: 88%; } .sol-card-left { flex: none; padding: 44px 28px 32px; } .sol-card-right { min-height: 260px; } .sol-title { font-size: 22px; } }
      `}</style>
      <div className="sol-section">
        <div className="sol-bg" style={{ backgroundImage: `url(${solutionimgbg})` }} />
        <div className="sol-decor-circle c1" /><div className="sol-decor-circle c2" />
        <div className="sol-card">
          <div className="sol-card-left">
            <span className="sol-label">Solutions</span>
            <h2 className="sol-title">Loyalty &amp; Incentive<br />Programs</h2>
            <p className="sol-desc">Programs designed to deliver business objectives. Rewardgenix turns loyalty into a seamless, integrated member experience. Backed by loyalty, technology, and engagement.</p>
            <a href="#" className="sol-btn">More <span className="sol-btn-arrow">→</span></a>
          </div>
          <div className="sol-card-right">
            <div className="sol-blob b1" /><div className="sol-blob b2" /><div className="sol-blob b3" />
            <div className="sol-lines" />
            <div className="sol-ring r1" /><div className="sol-ring r2" /><div className="sol-ring r3" />
            <img src={solutionimg} alt="" className="sol-img-overlay" />
            <div className="sol-center-icon"><span className="sol-icon-star">✦</span><span className="sol-icon-text">Rewardgenix</span></div>
            <div className="sol-dots d1">{Array(25).fill(0).map((_, i) => <div className="sol-dot" key={i} />)}</div>
            <div className="sol-dots d2">{Array(25).fill(0).map((_, i) => <div className="sol-dot" key={i} />)}</div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ─────────────────────────────────────────
   MOBILE / SEAM SECTION  — pixel-perfect
───────────────────────────────────────── */
const MobileSection = () => {
  return (
    <>
      <style>{`
        .mob2-section * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }

        /* ── Outer wrapper ── */
        .mob2-section {
          width: 100%;
          min-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 50px 60px;
          position: relative;
          overflow: hidden;
          /* mobilebg inline style se aayega */
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* ✅ Overlay — bg dikh sake, text bhi readable rahe */
        .mob2-bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(232, 234, 244, 0.82);
          z-index: 0;
        }

        .mob2-arc {
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          border: 80px solid rgba(210,212,230,0.55);
          bottom: -260px; right: -200px;
          pointer-events: none;
          z-index: 1;
        }
        .mob2-arc2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          border: 60px solid rgba(210,212,230,0.3);
          bottom: -180px; right: -120px;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Inner layout ── */
        .mob2-inner {
          max-width: 960px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 40px;
          position: relative;
          z-index: 2;
        }

        /* ── LEFT: Laptop image ── */
        .mob2-device-wrap {
          flex: 0 0 55%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ✅ Real laptop image */
        .mob2-laptop-img {
          width: 100%;
          max-width: 520px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.22));
        }

        /* ── RIGHT: Text panel ── */
        .mob2-right {
          flex: 1;
          padding-left: 20px;
          padding-bottom: 60px;
          position: relative;
        }

        .mob2-badge-wrap {
          margin-bottom: 30px;
        }
        .mob2-badge {
          display: inline-block;
          background: #c9a87c;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 16px 30px 14px;
          line-height: 1.3;
        }

        .mob2-title {
          font-size: 30px;
          font-weight: 800;
          color: #1a2f5a;
          text-transform: uppercase;
          line-height: 1.2;
          margin: 0 0 14px 0;
          letter-spacing: 0.4px;
        }

        .mob2-desc {
          font-size: 14.5px;
          color: #555;
          line-height: 1.75;
          margin-bottom: 36px;
        }

        .mob2-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #c9a87c;
          color: #fff;
          font-size: 14px;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          border: none;
          border-radius: 50px;
          padding: 13px 32px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.3s ease, transform 0.2s ease;
          box-shadow: 0 4px 16px rgba(201,168,124,0.35);
        }
        .mob2-btn:hover { background: #b8935f; transform: translateX(4px); color: #fff; }
        .mob2-btn-arrow { font-size: 16px; display: inline-block; transition: transform 0.25s ease; }
        .mob2-btn:hover .mob2-btn-arrow { transform: translateX(5px); }

        @media (max-width: 1024px) {
          .mob2-inner { flex-direction: column; align-items: center; }
          .mob2-device-wrap { flex: none; width: 100%; }
          .mob2-right { padding-left: 0; padding-bottom: 0; text-align: center; }
          .mob2-title { font-size: 24px; }
        }
      `}</style>

      {/* ✅ mobilebg — section background inline style se */}
      <section
        className="mob2-section"
        style={{ backgroundImage: `url(${mobilebg})` }}
      >
        {/* ✅ Overlay */}
        <div className="mob2-bg-overlay" />

        {/* Arcs */}
        <div className="mob2-arc" />
        <div className="mob2-arc2" />

        <div className="mob2-inner">

          {/* ✅ LEFT: Real laptop image */}
          <div className="mob2-device-wrap">
            <img src={laptop} alt="Laptop" className="mob2-laptop-img" />
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="mob2-right">
            <div className="mob2-badge-wrap">
              <div className="mob2-badge">S.E.A.M. FRAMEWORK</div>
            </div>
            <h2 className="mob2-title">Integrated Member<br />Xperience</h2>
            <p className="mob2-desc">
              End-to-End program Experience a must<br />
              to Deliver Business Outcomes
            </p>
            <a href="#" className="mob2-btn">
              More <span className="mob2-btn-arrow">→</span>
            </a>
          </div>

        </div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────
   FAQ SECTION
───────────────────────────────────────── */
const faqs = [
  { question: "What types of solutions do you offer?", answer: "We offer a wide range of solutions including branding, digital marketing, product design, logistics, and sustainable packaging. Our team works closely with clients to deliver customized strategies that align with their goals and vision." },
  { question: "Do you deliver nationwide?", answer: "Yes, we proudly deliver our services and products nationwide. Whether you're based in a major city or a smaller town, our logistics network ensures timely and reliable delivery across the country." },
  { question: "Where can I find spaces in the lorem?", answer: "Our dedicated spaces are available through our online portal. Simply browse the listings, filter by location or category, and book a space that fits your needs. Our support team is always ready to assist you." },
  { question: "How do I approach you for brand solutions?", answer: "Getting in touch is simple! You can reach us via our contact form, send an email, or book a free discovery call through our website. Our brand strategists will get back to you within 24–48 hours to discuss your requirements." },
  { question: "Do you offer sustainable solution & options?", answer: "Absolutely! Sustainability is at the core of what we do. We offer eco-friendly packaging, green logistics, and responsible sourcing options. Our team can help you build a brand that is both impactful and environmentally conscious." },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);
  return (
    <>
      <style>{`
        .faq-section * { font-family: 'Poppins', sans-serif; box-sizing: border-box; }
        .faq-section { background-color: #eeeef6; min-height: 100vh; display: flex; align-items: center; padding: 80px 20px; }
        .faq-container { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 80px; width: 100%; }
        .faq-left { flex: 0 0 300px; }
        .faq-title-wrap { display: flex; align-items: flex-start; gap: 12px; }
        .faq-qmark { font-size: 64px; font-weight: 800; color: #c9a87c; line-height: 1; margin-top: 4px; }
        .faq-heading { font-size: 40px; font-weight: 800; color: #1a2f5a; line-height: 1.2; margin: 0; }
        .faq-right { flex: 1; }
        .faq-item { border-top: 1.5px solid #c9a87c; }
        .faq-item:last-child { border-bottom: 1.5px solid #c9a87c; }
        .faq-question-btn { width: 100%; background: transparent; border: none; display: flex; align-items: center; justify-content: space-between; padding: 22px 0; cursor: pointer; text-align: left; gap: 16px; }
        .faq-question-text { font-size: 15.5px; font-weight: 500; color: #1a2f5a; margin: 0; }
        .faq-icon { font-size: 22px; font-weight: 300; color: #1a2f5a; flex-shrink: 0; transition: transform 0.3s ease; line-height: 1; }
        .faq-icon.open { transform: rotate(45deg); }
        .faq-answer { overflow: hidden; max-height: 0; transition: max-height 0.4s ease; }
        .faq-answer.open { max-height: 300px; }
        .faq-answer-inner { padding-bottom: 20px; font-size: 14.5px; color: #4a5568; line-height: 1.8; }
        @media (max-width: 768px) { .faq-container { flex-direction: column; gap: 40px; } .faq-left { flex: none; width: 100%; } .faq-heading { font-size: 32px; } }
      `}</style>
      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-left">
            <div className="faq-title-wrap">
              <span className="faq-qmark">?</span>
              <h2 className="faq-heading">Frequently<br />Asked<br />Questions</h2>
            </div>
          </div>
          <div className="faq-right">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button className="faq-question-btn" onClick={() => toggle(index)} aria-expanded={openIndex === index}>
                  <span className="faq-question-text">{faq.question}</span>
                  <span className={`faq-icon ${openIndex === index ? "open" : ""}`}>+</span>
                </button>
                <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
                  <p className="faq-answer-inner">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────
   HOME
───────────────────────────────────────── */
const Home = () => {
  return (
    <div className="w-[calc(100%-6rem)]">
      <ParallaxHeader />
      <div className="relative">
        <IntegratedCX />
        <SolutionsSection />
        <MobileSection />
        <CaseStudy />
        <FAQSection />
        <img src="./img/footer.jpg" alt="footer" />
      </div>
    </div>
  );
};

export default Home;