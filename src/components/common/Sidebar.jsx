import { useState } from "react";
import NavItem from "./NavLink";



const Sidebar = () => {

    const [ isOpen, setIsOpen ] = useState(false);


    return (
        <nav className="fixed right-0 top-0 h-screen bg-[#f7f7f7] flex">


            <div className={`text-[1.1rem] 2xl:text-[1.46rem] font-[Poppins] font-[500] border-[#bbbbbb] bg-[#f7f7f7] transition-[width] duration-500
                            ${isOpen ? "w-[16rem] 2xl:w-[20rem] border-r" : "w-0"} overflow-hidden`}>
                <ul className="py-[40px]">
                    <NavItem route="/" label="Home" />
                    <NavItem route="" label="About" clickable={false} />
                    <NavItem route="/about" label="... Team" />
                    <NavItem route="/partner-loyalty" label="... Partner Loyalty" />
                    <NavItem route="/customer-loyalty" label="... Customer Loyalty" />
                    <NavItem route="/solutions" label="Solutions" />
                    <NavItem route="/technology" label="Technology" />
                    <NavItem route="/contact" label="Contact Us" />
                    <NavItem route="/blog" label="Blog" />
                    <NavItem route="" label="Legal" clickable={false}/>
                    <NavItem route="/terms-and-conditions" label="... Terms" />
                    <NavItem route="/privacy-policy" label="... Privacy" />
                </ul>
            </div>


            <div className="h-full w-[4rem] 2xl:w-[6rem] flex flex-col justify-between items-center">

                <div className="p-[20px] text-[32px] text-[#011130] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <i className={`${isOpen ? "fa-solid fa-xmark" : "fas fa-bars" }`}></i>
                </div>

                <div className="flex flex-col p-[20px] gap-[20px] text-[1.8rem] 2xl:text-[2rem] text-[#c3966e]">
                    <i className="fa-brands fa-facebook cursor-pointer"></i>
                    <i className="fa-brands fa-linkedin cursor-pointer"></i>
                    <i className="fa-brands fa-instagram cursor-pointer"></i>
                </div>

            </div>
        </nav>
    )
}

export default Sidebar;
