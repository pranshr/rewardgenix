import { useState } from "react";
import ParallaxHeader from "./ParallaxHeader"
import CaseStudy from "./CaseStudy"
import IntegratedCX from "./IntegratedCX"

const faqs = [
  {
    question: "What types of solutions do you offer?",
    answer:
      "We offer a wide range of solutions including branding, digital marketing, product design, logistics, and sustainable packaging. Our team works closely with clients to deliver customized strategies that align with their goals and vision.",
  },
  {
    question: "Do you deliver nationwide?",
    answer:
      "Yes, we proudly deliver our services and products nationwide. Whether you're based in a major city or a smaller town, our logistics network ensures timely and reliable delivery across the country.",
  },
  {
    question: "Where can I find spaces in the lorem?",
    answer:
      "Our dedicated spaces are available through our online portal. Simply browse the listings, filter by location or category, and book a space that fits your needs. Our support team is always ready to assist you.",
  },
  {
    question: "How do I approach you for brand solutions?",
    answer:
      "Getting in touch is simple! You can reach us via our contact form, send an email, or book a free discovery call through our website. Our brand strategists will get back to you within 24–48 hours to discuss your requirements.",
  },
  {
    question: "Do you offer sustainable solution & options?",
    answer:
      "Absolutely! Sustainability is at the core of what we do. We offer eco-friendly packaging, green logistics, and responsible sourcing options. Our team can help you build a brand that is both impactful and environmentally conscious.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap');

        .faq-section * {
          font-family: 'Poppins', sans-serif;
          box-sizing: border-box;
        }

        .faq-section {
          background-color: #f3f1fe;
          min-height: 100vh;
          display: flex;
          align-items: center;
        //   padding: 80px 20px;
        }

        .faq-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 80px;
          width: 100%;
        }

        .faq-left {
          flex: 1 0 ;
        }

        .faq-title-wrap {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-left:140px;
          margin-top: -155px;
        }

        .faq-qmark {
          font-size: 64px;
          font-weight: 800;
          color: #c9a87c;
          line-height: 1;
          margin-top: 4px;
        }

        .faq-heading {
          font-size: 40px;
          font-weight: 800;
          color: #1a2f5a;
          line-height: 1.2;
          margin: 0;
        }

        .faq-right {
          flex: 1;
        }

        .faq-item {
          border-top: 1.5px solid #c9a87c;
        }

        .faq-item:last-child {
          border-bottom: 1.5px solid #c9a87c;
        }

        .faq-question-btn {
          width: 100%;
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 0;
          cursor: pointer;
          text-align: left;
          gap: 16px;
        }

        .faq-question-text {
          font-size: 15.5px;
          font-weight: 500;
          color: #1a2f5a;
          margin: 0;
        }

        .faq-icon {
          font-size: 22px;
          font-weight: 300;
          color: #1a2f5a;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          line-height: 1;
        }

        .faq-icon.open {
          transform: rotate(45deg);
        }

        .faq-answer {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease, padding 0.3s ease;
        }

        .faq-answer.open {
          max-height: 300px;
        }

        .faq-answer-inner {
          padding-bottom: 20px;
          font-size: 14.5px;
          color: #4a5568;
          line-height: 1.8;
        }

        @media (max-width: 768px) {
          .faq-container {
            flex-direction: column;
            gap: 40px;
          }
          .faq-left {
            flex: none;
            width: 100%;
          }
          .faq-heading {
            font-size: 32px;
          }
        }
      `}</style>

      <section className="faq-section">
        <div className="faq-container">

          {/* Left Heading */}
          <div className="faq-left">
            <div className="faq-title-wrap">
              <span className="faq-qmark">?</span>
              <h2 className="faq-heading">
                Frequently<br />Asked<br />Questions
              </h2>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="faq-right">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                >
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

const Home = () => {
    return (
        <div className=" w-[calc(100%-4rem)] 2xl:w-[calc(100%-5rem)]">
            <ParallaxHeader />
            <div className="relative">
                <IntegratedCX />
                <img src="./img/solutions.jpg" />
                <img src="./img/mobile.jpg" />
                <CaseStudy />
                <FAQSection />
                <img src="./img/footer.jpg" alt="footer" />
            </div>
        </div>
    )
}

export default Home