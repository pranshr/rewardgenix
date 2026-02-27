import { useState, useEffect } from "react"
import IntegratedCXCarousel from "./IntegratedCXCarousel"

const IntegratedCX = () => {

    const [rotation, setRotation] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            setRotation(window.scrollY * 0.2) // Adjust speed as needed
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="bg-[#E3E4F2] w-full">
            <div className="flex flex-col items-center w-2/3 mx-auto">
                <div className="flex gap-4 items-center mt-16 w-full">
                    <img
                        className="h-[5rem] text-[#A27E60] transition-transform duration-100 ease-out"
                        style={{ transform: `rotate(${rotation}deg)` }}
                        src="./img/plus.svg"
                    />
                    <div className="text-left">
                        <h1 className="text-[#2B2E5B] uppercase text-[50px] font-bold leading-12 bg-[url(/img/integrated-cx-text-bg.jfif)] bg-clip-text text-transparent bg-fixed"> Integrated <br /> Customer Experience </h1>
                    </div>
                </div>
                <IntegratedCXCarousel />
            </div>
        </div>
    )

}

export default IntegratedCX;
