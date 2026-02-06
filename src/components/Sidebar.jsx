import { useState } from "react";
import NavLink from "./NavLink";



const Sidebar = () => {

    const [ isOpen, setIsOpen ] = useState(false);


    return (
        <nav className="fixed right-0 top-0 h-screen bg-[#f7f7f7] flex">


            <div className={`text-[32px] font-[Poppins] font-[500] border-[#bbbbbb] bg-[#f7f7f7] transition-[width] duration-500
                            ${isOpen ? "w-[360px] border-r" : "w-0"} overflow-hidden`}>
                <ul className="py-[40px]">
                    <NavLink label="Home" />
                    <NavLink label="About" />
                    <NavLink label="Solutions" />
                    <NavLink label="Technology" />
                    <NavLink label="Contact Us" />
                    <NavLink label="Blog" />
                </ul>
            </div>


            <div className="h-full w-[6rem] flex flex-col justify-between items-center">

                <div className="p-[20px] text-[32px] text-[#011130] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`${isOpen ? "fa-solid fa-xmark" : "fas fa-bars" }`}></i>
                </div>

                <div className="flex flex-col p-[20px] gap-[20px] text-[32px] text-[#c3966e]">
                    <i className="fa-brands fa-facebook cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin cursor-pointer"></i>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                </div>

            </div>
        </nav>
    )
}

export default Sidebar;
