import ParallaxHeader from "./ParallaxHeader"
import CaseStudy from "./CaseStudy"
import IntegratedCX from "./IntegratedCX"



const Home = () => {

    return (
        <div className=" w-[calc(100%-4rem)] 2xl:w-[calc(100%-5rem)]">
            <ParallaxHeader />
            <div className="relative">
                <IntegratedCX />
                <img src="./img/solutions.jpg" />
                <img src="./img/mobile.jpg" />
                <CaseStudy />
                <img src="./img/faqs.jpg" />
                <img src="./img/footer.jpg" alt="footer" />
            </div>
        </div>
    )
}

export default Home
