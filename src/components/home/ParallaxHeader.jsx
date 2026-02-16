import { useEffect, useRef } from "react";

const ParallaxHeader = () => {
    const bgRef = useRef(null);
    const divRef = useRef(null);
    const speed = 0.8;
    const scrollY = useRef(0); // store scroll position

    // Update div height after image loads
    const updateHeight = () => {
        if (bgRef.current && divRef.current) {
            divRef.current.style.height = `${bgRef.current.offsetHeight}px`;
        }
    };

    useEffect(() => {
        // Make sure image is loaded before measuring
        if (bgRef.current && bgRef.current.complete) {
            updateHeight();
        } else if (bgRef.current) {
            bgRef.current.onload = updateHeight;
        }

        window.addEventListener("resize", updateHeight);
        return () => window.removeEventListener("resize", updateHeight);
    }, []);

    // Scroll handling with requestAnimationFrame
    useEffect(() => {
        const handleScroll = () => {
            scrollY.current = window.scrollY; // just store latest scroll
        };

        const animate = () => {
            if (bgRef.current) {
                bgRef.current.style.transform = `translateY(${scrollY.current * speed}px)`;
            }
            requestAnimationFrame(animate);
        };

        window.addEventListener("scroll", handleScroll);
        requestAnimationFrame(animate);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative w-full">
            <div
                ref={divRef}
                className="w-full bg-gray-200 flex items-center justify-center text-2xl font-bold"
            />

            <img
                src="./img/header.jpg"
                alt="header"
                ref={bgRef}
                className="absolute top-0 left-0 w-full object-cover z-0"
                style={{ willChange: "transform" }}
            />
        </div>
    );
};

export default ParallaxHeader;
