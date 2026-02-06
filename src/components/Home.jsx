import ParallaxHeader from "./ParallaxHeader"



const Home = () => {

    return (
        <div className="w-[calc(100%-6rem)]">
            <ParallaxHeader />
            <div className="relative">
                <img src="./img/integrated-cx.jpg" />
                <img src="./img/solutions.jpg" />
                <img src="./img/mobile.jpg" />
                <img src="./img/case-study.jpg" />
                <img src="./img/faqs.jpg" />
                <img src="./img/footer.jpg" alt="footer" />
            </div>
        </div>
    )
}

export default Home
