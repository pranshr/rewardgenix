import { useState } from "react";
import solutionimg from '../../assets/index-loyalty-gfx.jpg'
import solutionimgbg from '../../assets/index-solution-bg.jpg'
import mobilebg from '../../assets/index-mobile-tab-bg.png'
import laptop from '../../assets/index-laptop.png'
import ParallaxHeader from "./ParallaxHeader"
import CaseStudy from "./CaseStudy"
import IntegratedCX from "./IntegratedCX"
import FAQSection from "../common/FAQSection";
import News from "./News"



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
      </div>


      <div className="relative flex w-[66%] min-h-[400px] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)] my-[60px]">

        <div className="flex-[0_0_46%] bg-[#eeeef6] p-[52px_44px_44px_44px] flex flex-col justify-center relative">
          <span className="absolute top-0 left-0 bg-[#bd9067] text-white text-[12px] tracking-[2.5px] px-[10px] py-[30px]">
            Solutions
          </span>
          <h2 className="leading-[1.25] mt-[2.5rem] mb-[0.2rem] uppercase">
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
          <img src={solutionimg} alt="" className="absolute inset-0 w-full h-full object-cover" />
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
      className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat font-[Poppins,sans-serif]"
      style={{ backgroundImage: `url(${mobilebg})` }}
    >

      <div className="relative w-[66%] flex items-center gap-10">
        <div className="flex-[0_0_55%] flex items-center justify-center">
          <img src={laptop} alt="Laptop" className="w-full object-contain"/>
        </div>
        <div className="flex-1 relative mb-[118px]">
          <div className="absolute text-white text-[18px] font-medium tracking-[1.5px] uppercase" style={{ background: '#bd9067', padding: '80px 36px 14px', marginTop: '-238px', lineHeight: '1.3' }}>
            S.E.A.M. FRAMEWORK
          </div>
          <h2 className="uppercase leading-[1.2] tracking-[0.4px] mb-[0.8rem] mt-[-6.7rem]" >
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
        <News/>
        <img src="./img/footer.jpg" alt="footer" />
      </div>
    </div>
  );
};

export default Home;