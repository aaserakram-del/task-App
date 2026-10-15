import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";

import CyberImg from  './assets/Logo Vector.png'
export default function Header() {
    return (
        <>
            <header className="flex pl-40 pr-40 items-center justify-between border-b border-b-[#B5B5B5] h-22 font-[Roboto] font-medium ">
                {/* Logo */}
                <div>
                    <img src={CyberImg} alt="Cyber-img" />
                </div>
                {/* Input Search */}
                <div>
                    <input className="w-93 h-14 outline-0 rounded-lg p-4 bg-[#F5F5F5]" type="search" placeholder="Search"/>
                </div>
                {/* Links */}
                <div className="flex gap-13">
                    <a href="#" className="text-[16px]">Home</a>
                    <a href="#" className="text-[16px]">About</a>
                    <a href="#" className="text-[16px]">Contact Us</a>
                    <a href="#" className="text-[16px]">Blog</a>
                </div>
                {/* Icons */}
                <div className="flex gap-6.75">
                    <FaRegHeart />
                    <FiShoppingCart />
                    <IoPersonOutline />
                </div>
            </header>
        </>
    )
}