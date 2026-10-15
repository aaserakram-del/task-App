import Footer from "./Footer";
import Header from "./Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Iphone from './assets/Iphone.png'
import { FaMotorcycle } from "react-icons/fa";
import { RiHomeGearLine } from "react-icons/ri";
import { BiSolidLike } from "react-icons/bi";

export default function Details() {

    const [Products, setProducts] = useState([]);

    const domain = "https://store.skyready.online";
    const endPoint = "/api/products";
    const url = domain + endPoint;

    useEffect(() => {
        axios.get(url, { params: { populate: "*" } })
            .then((res) => {
                console.log(res.data);
                setProducts(res.data.data);
            })
            .catch((err) => console.error(err));
    }, [url]);
    return (
        <>
            {/* Header */}
            <div>
                <Header />
            </div>
            {/* Porduct Details */}
            <div className="pl-40 pt-10 flex ">
                <img className="w-134 h-129 mr-12 rounded-md border border-[#28282828]" src={Iphone} alt="Shoes" />
                <div className="w-134">
                    <h1 className="font-bold text-[40px] leading-10 font-[Roboto]">Apple iPhone 14 Pro Max</h1>
                    <span className="font-medium text-[32px] leading-12 tracking-[3%] text-[#000000] font-[Roboto]">$1399</span>
                    <del className="font-[Roboto] text-[24px] pl-4 font-normal text-[#A0A0A0]">$1499</del>
                    <p className="pt-4 tracking-[3%] leading-6 text-[14px] font-normal font-[Roboto] text-[#6C6C6C]">Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras</p>
                    <div className="flex gap-4 pt-8">
                        <button className="w-65 h-14 font-medium text-[16px] font-[Roboto] rounded-md border border-[#000000] pt-4 pb-4 pl-14 pr-14">Add To Wishlist</button>
                        <button className="w-65 h-14 font-medium text-[16px] text-[#FFFFFF] font-[Roboto] bg-[#000000] rounded-md border pt-4 pb-4 pl-14 pr-14">Add To Cart</button>
                    </div>
                    <div className="flex items-center gap-8 pt-8">
                        <div className="flex items-center">
                            <FaMotorcycle  className="w-14 mr-4 h-14 rounded-[11px] p-4 bg-[#F6F6F6]"/>
                            <div>
                                <p className="font-medium text-[14px] leading-6 text-[#717171] font-[Roboto]">Free Delivery</p>
                                <p className="font-medium text-[14px] font-[Roboto]">1-2 Day</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <RiHomeGearLine className="w-14 mr-4 h-14 rounded-[11px] p-4 bg-[#F6F6F6]"/>
                            <div>
                                <p className="font-medium text-[14px] leading-6 text-[#717171] font-[Roboto]">In Stock</p>
                                <p className="font-medium text-[14px] font-[Roboto]">1-2 Day</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <BiSolidLike  className="w-14 mr-4 h-14 rounded-[11px] p-4 bg-[#F6F6F6]"/>
                            <div>
                                <p className="font-medium text-[14px] leading-6 text-[#717171] font-[Roboto]">Guaranteed</p>
                                <p className="font-medium text-[14px] font-[Roboto]">1-2 Day</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pl-40 pr-40 pt-10">
                <h2 className="font-medium text-[24px] font-[Roboto] pb-8 pt-10 ">Related Products</h2>
                <div className="flex gap-4">
                    {
                        Products.slice(0, 4).map((el) => {
                            return (
                                <div className="card bg-[#F6F6F6] w-67 h-92.5 pt-6 rounded-[9px] shadow-sm">
                                    <figure>
                                        <img
                                            className="rounded-md w-58.5 h-40"
                                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                            alt="Shoes"
                                        />
                                    </figure>
                                    <div className="card-body">
                                        <h1 className="card-title">{el.name}</h1>
                                        <p>Price = {el.price} EGP</p>
                                        <div className="card-actions justify-end">
                                            <a className="w-full h-12 rounded-lg pt-3 pb-3 pr-16 pl-16 text-[14px] bg-[#000000] text-center text-white">Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
            {/* Footer */}
            <div>
                <Footer />
            </div>
        </>
    )
}