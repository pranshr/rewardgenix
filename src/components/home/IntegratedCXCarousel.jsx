import { useState, useEffect } from "react";

const IntegratedCXCarousel = () => {
    const data = [
        {
            title: "Enablement",
            description: "Desired Phygital Rewards Xperience (RX) & Channel, Influencer programs",
            image: "./img/integrated-cx-carousel.jpg"
        },
        {
            title: "Engagement",
            description: "Elevate your customer Xperience, Brand loyalty with our custom",
            image: "./img/integrated-cx-carousel.jpg"
        },
        {
            title: "Reward",
            description: "Rewards Products & Services can ideal fit for your evey business Use",
            image: "./img/integrated-cx-carousel.jpg"
        }
    ]

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % data.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full mt-10 mb-14 flex">
            <div className="flex-1 bg-white relative overflow-hidden">
                {data.map((item, idx) => (
                    <img
                        key={idx}
                        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}
                        src={item.image}
                        alt={item.title}
                    />
                ))}
            </div>
            <div className="w-5/12 bg-[#1d1e5e] px-8 py-8 2xl:py-8 gap-8 2xl:gap-8 flex flex-col">
                {data.map((item, idx) => (
                    <div key={idx} className={"flex flex-col justify-between"}>
                        <h1 className={`text-xl 2xl:text-4xl font-semibold transition-all duration-500 ${idx === activeIndex ? 'bg-gradient-to-r from-[#d2a37b] to-[#825a4d] bg-clip-text text-transparent' : 'text-white'}`}>
                            {item.title}
                        </h1>
                        <p className="text-white text-[15px] 2xl:text-lg font-[200]">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IntegratedCXCarousel;
