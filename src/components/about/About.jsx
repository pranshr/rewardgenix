import AboutCard from './AboutCard'



const About = () => {
    return (
        <div className="w-[calc(100%-6rem)]">
            <header className="bg-[#c4c5d5]">
                <img className="h-12 ml-25" src="/logo.svg" alt="logo" />
            </header>
            <div className="Content">
                <div className="flex flex-col items-center pt-12">
                    <div className="text-xs text-[#272A59]">
                        The Leadership
                    </div>
                    <h1 className="text-7xl font-semibold uppercase text-[#272A59]">
                        About Us
                    </h1>
                </div>
                <div className="flex justify-center m-12">
                    <img src="./img/chevron.jpeg" alt="chevron" />
                </div>
                <div className="container grid grid-rows-1 grid-cols-3 p-10 justify-items-center gap-x-5 w-fit mx-auto">
                    <AboutCard />
                    <AboutCard />
                    <AboutCard />
                </div>
            </div>
            <img src="./img/faqs.jpg" alt="faq" />
            <img src="./img/footer.jpg" alt="footer" />
        </div>
    )
}


export default About;
