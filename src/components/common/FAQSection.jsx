import { useState } from "react";


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
      borderTop: '1.5px solid #c3966d',
      borderBottom: isLast ? '1.5px solid #c3966d' : 'none',
      padding: '0 20px',
    }}
      className="hover:bg-[#d8d5f0]"
    >

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
      background: '#e4e2f5',
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
            <div className="faqs-h">
              Frequently<br />Asked<br />Questions
            </div>
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



export default FAQSection;