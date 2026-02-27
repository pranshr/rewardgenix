import { useState } from "react";
import solutionimg from '../../assets/index-loyalty-gfx.jpg'
import solutionimgbg from '../../assets/index-solution-bg.jpg'
import mobilebg from '../../assets/index-mobile-tab-bg.png'
import laptop from '../../assets/index-laptop.png'
import ParallaxHeader from "./ParallaxHeader"
import CaseStudy from "./CaseStudy"
import IntegratedCX from "./IntegratedCX"

/* ─────────────────────────────────────────
   SOLUTIONS SECTION
───────────────────────────────────────── */
const SolutionsSection = () => {
  return (
    <div className="relative w-full min-h-[560px] flex items-center justify-center overflow-hidden font-[Poppins,sans-serif]">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${solutionimgbg})` }}
      >
        <div className="absolute inset-0 z-[1]" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)' }} />
        <div className="absolute inset-0 z-[2]" style={{ background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.28) 100%)' }} />
      </div>

      <div className="absolute w-[320px] h-[320px] -top-20 left-[10%] rounded-full bg-white/[0.04] border border-white/[0.08] z-[1]" />
      <div className="absolute w-[260px] h-[260px] -bottom-[100px] right-[8%] rounded-full bg-white/[0.04] border border-white/[0.08] z-[1]" />

      <div className="relative z-[3] flex w-[74%] max-w-[860px] min-h-[400px] rounded-[6px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)] my-[60px]">

        <div className="flex-[0_0_46%] bg-[#eeeef6] p-[52px_44px_44px_44px] flex flex-col justify-center relative">
          <span className="absolute top-0 left-0 bg-[#bd9067] text-white text-[12px] tracking-[2.5px] px-[10px] py-[30px]">
            Solutions
          </span>
          <h2 className="text-[25px] font-semibold text-[#0c2077] leading-[1.25] mt-[44px] mb-[16px] uppercase">
            Loyalty &amp; Incentive<br />Programs
          </h2>
          <p className="text-[14px] text-[#555] leading-[1.85] mb-[34px]">
            Programs designed to deliver business objectives. Rewardgenix turns loyalty into a seamless, integrated member experience. Backed by loyalty, technology, and engagement.
          </p>
          <a href="#" className="inline-flex items-center gap-[6px] bg-linear-to-r from-[#916137] to-[#c3966e] text-white text-[14px] font-light rounded-full px-[18px] py-[6px] w-fit transition-all duration-300 no-underline shadow-[0_4px_16px_rgba(201,168,124,0.35)] hover:translate-x-1 hover:text-white">
            More <span className="text-[16px] inline-block transition-transform duration-300 group-hover:translate-x-[5px] ">→</span>
          </a>
        </div>

        <div className="flex-1 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a2f5a 0%, #0d3350 35%, #1a4a3a 65%, #0f2d45 100%)' }}>
          <div className="absolute w-[280px] h-[280px] -top-[60px] -right-[60px] rounded-full blur-[48px] opacity-55" style={{ background: 'radial-gradient(circle, #c9a87c, transparent)' }} />
          <div className="absolute w-[220px] h-[220px] -bottom-[40px] -left-[40px] rounded-full blur-[48px] opacity-55" style={{ background: 'radial-gradient(circle, #2a6e8a, transparent)' }} />
          <div className="absolute w-[160px] h-[160px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[48px] opacity-55" style={{ background: 'radial-gradient(circle, #4a9a7c, transparent)' }} />
          <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
            <div className="absolute w-[200%] h-[1px] top-[35%] -left-1/2 -rotate-[25deg]" style={{ background: 'linear-gradient(90deg, transparent, #c9a87c, transparent)' }} />
            <div className="absolute w-[200%] h-[1px] top-[60%] -left-1/2 -rotate-[25deg]" style={{ background: 'linear-gradient(90deg, transparent, #c9a87c, transparent)' }} />
          </div>
          <div className="absolute w-[320px] h-[320px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,124,0.18)]" />
          <div className="absolute w-[220px] h-[220px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,124,0.28)]" />
          <div className="absolute w-[120px] h-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(201,168,124,0.45)] bg-[rgba(201,168,124,0.06)]" />
          <img src={solutionimg} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] flex flex-col items-center gap-[10px]">
            <span className="text-[38px] text-[#c9a87c] leading-none" style={{ filter: 'drop-shadow(0 0 12px rgba(201,168,124,0.6))' }}>✦</span>
            <span className="text-[11px] font-semibold tracking-[3px] uppercase text-white/50">Rewardgenix</span>
          </div>
          <div className="absolute bottom-[20px] right-[20px] grid grid-cols-5 gap-[8px] opacity-[0.18]">
            {Array(25).fill(0).map((_, i) => <div key={i} className="w-[4px] h-[4px] rounded-full bg-[#c9a87c]" />)}
          </div>
          <div className="absolute top-[20px] left-[20px] grid grid-cols-5 gap-[8px] opacity-[0.18]">
            {Array(25).fill(0).map((_, i) => <div key={i} className="w-[4px] h-[4px] rounded-full bg-[#c9a87c]" />)}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   MOBILE / SEAM SECTION
───────────────────────────────────────── */
const MobileSection = () => {
  return (
    <section
      className="relative w-full min-h-[680px] flex items-center justify-center px-[60px] py-[50px] overflow-hidden bg-cover bg-center bg-no-repeat font-[Poppins,sans-serif]"
      style={{ backgroundImage: `url(${mobilebg})` }}
    >
      <div className="absolute inset-0 z-0" />
      {/* <div className="absolute w-[700px] h-[700px] -bottom-[260px] -right-[200px] rounded-full border-[80px] border-[rgba(210,212,230,0.55)] pointer-events-none z-[1]" /> */}
      {/* <div className="absolute w-[500px] h-[500px] -bottom-[180px] -right-[120px] rounded-full border-[60px] border-[rgba(210,212,230,0.3)] pointer-events-none z-[1]" /> */}

      <div className="relative z-[2] max-w-[960px] w-full flex items-center gap-10">
        <div className="flex-[0_0_55%] flex items-center justify-center">
          <img src={laptop} alt="Laptop" className="w-full max-w-[620px] h-auto object-contain mb-[50px]" style={{ filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.22))' }} />
        </div>
        <div className="flex-1 relative mb-[118px]">
          <div className="absolute text-white text-[18px] font-medium tracking-[1.5px] uppercase" style={{ background: '#bd9067', padding: '80px 36px 14px', marginTop: '-238px', lineHeight: '1.3' }}>
            S.E.A.M. FRAMEWORK
          </div>
          <h2 className="text-[24px] font-extrabold text-[#1a2f5a] uppercase leading-[1.2] tracking-[0.4px] mb-[14px]" style={{ marginTop: '-106px' }}>
            Integrated Member Xperience
          </h2>
          <p className="text-[14.5px] text-[#555] leading-[1.75] mb-[36px]">
            End-to-End program Experience a must<br />to Deliver Business Outcomes
          </p>
          <a href="#" className="inline-flex items-center gap-[6px] text-white text-[14px] font-light rounded-full px-[20px] py-[6px] no-underline transition-all duration-300 shadow-[0_4px_16px_rgba(201,168,124,0.35)] hover:translate-x-1 hover:text-white bg-linear-to-r from-[#916137] to-[#c3966e]" >
            More <span className="text-[16px] inline-block transition-transform duration-300">→</span>
          </a>
        </div>
      </div>
    </section>
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

const FAQItem = ({ faq, isOpen, onToggle, isLast }) => {
  return (
    <div style={{
      borderTop: '1.5px solid #c9a87c',
      borderBottom: isLast ? '1.5px solid #c9a87c' : 'none',
    }}>

      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 0',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
          fontFamily: 'Poppins, sans-serif',
        }}
      >
        <span style={{ fontSize: '15.5px', fontWeight: 500, color: '#1a2f5a' }}>
          {faq.question}
        </span>
        <span style={{
          fontSize: '22px',
          fontWeight: 300,
          color: '#1a2f5a',
          flexShrink: 0,
          lineHeight: 1,
          display: 'inline-block',
          transition: 'transform 300ms ease',
          transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
        }}>
          +
        </span>
      </button>

      {/*
        Outer wrapper: display:grid — gridTemplateRows 0fr→1fr
        Inner wrapper: overflow:hidden (yeh zaroori hai)
        Yeh 100% neeche se open karta hai, koi clipping nahi
      */}
      <div style={{
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows 400ms ease',
      }}>
        <div style={{ overflow: 'hidden' }}>
          <p style={{
            margin: 0,
            paddingBottom: '20px',
            fontSize: '14.5px',
            color: '#4a5568',
            lineHeight: 1.8,
            fontFamily: 'Poppins, sans-serif',
          }}>
            {faq.answer}
          </p>
        </div>
      </div>

    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section style={{
      background: '#eeeef6',
      // minHeight: '100vh',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: '50px',
      paddingBottom: '50px',
      paddingLeft: '20px',
      paddingRight: '20px',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '50px',
        width: '100%',
      }}>

        {/* Left */}
        <div style={{ flex: '0 0 300px', position: 'sticky', top: '50px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <span style={{ fontSize: '64px', fontWeight: 800, color: '#c9a87c', lineHeight: 1, marginTop: '4px' }}>?</span>
            <h2 style={{ fontSize: '40px', fontWeight: 800, color: '#1a2f5a', lineHeight: 1.2, margin: 0 }}>
              Frequently<br />Asked<br />Questions
            </h2>
          </div>
        </div>

        {/* Right */}
        <div style={{ flex: 1 }}>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => toggle(index)}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ─────────────────────────────────────────
   HOME
───────────────────────────────────────── */
const Home = () => {
  return (
    <div className="w-[calc(100%-4rem)] 2xl:w-[calc(100%-6rem)]">
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