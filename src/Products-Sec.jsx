import axios from "axios";
import Header from "./Header";
import { IoChevronUp } from "react-icons/io5";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";


export default function Products() {
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
            {/* Comp-Header */}
            <div>
                <Header />
            </div>

            {/* Section Product From Api */}
            <section className="pt-10 pb-10 pl-40 pr-40 flex w-62.5 font-[Roboto]">
                <div className="mr-8">
                    {/* Category */}
                    <div className="flex items-center justify-between pt-3 pb-3 border-b border-b-[#B5B5B5] ">
                        <h3>Categories</h3>
                        <p>{<IoChevronUp />}</p>
                    </div>
                    {/* Input Search */}
                    <div>
                        <input className="w-93 h-14 outline-0 rounded-lg p-4 mt-4 bg-[#F5F5F5]" type="search" placeholder="Search" />
                    </div>
                    {/* Check Box */}
                    <div className="flex flex-col items-start gap-2.5 pt-4">
                        <div className="flex items-center">
                            <input type="checkbox" defaultChecked className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">smartphones</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">laptops</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">skincare</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">sunglasses</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">motorcycle</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">lighting</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">furniture</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">men shirts</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" className="checkbox mr-1.25" />
                            <label className="font-medium text-[#000000] text-[15px]">women bags</label>
                        </div>
                    </div>
                    {/* Button */}
                    <div className="mt-6">
                        <button className="w-full h-12 rounded-lg pt-3 pb-3 pr-16 pl-16 bg-[#000000] text-white">Apply</button>
                    </div>
                </div>
                <div className="grid grid-cols-3 mt-6 gap-x-70 gap-y-5">
                    {
                        Products.slice(0, 6).map((el) => {
                            return (

                                <Link to={`/details/${el.id}`}>
                                    <div className="card bg-[#F6F6F6] w-66.5 h-92.5 pt-6 rounded-[9px] shadow-sm">
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
                                                <a className="w-full h-12 rounded-lg pt-3 pb-3 pr-16 pl-16 text-[14px] bg-[#000000] text-white">Add To Cart</a>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })}
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    )
}