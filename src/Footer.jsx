import CyberImg from './assets/Logo-W.png'
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className='mt-40.5 pt-26 pb-26 pl-40 font-[Roboto] text-white bg-[#121212] flex-col'>
                {/* Info-Content */}
                <div className='flex gap-40 '>
                    <div className='w-[384px]'>
                        <img src={CyberImg} className='mb-6' alt="Cyber-img" />
                        <p className='font-medium text-[14px] text-[#CFCFCF]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[16px] mb-2 laeding-[16px]'>Services</h2>
                        <p className='mb-2 text-[#CFCFCF]'>Bonus program</p>
                        <p className='mb-2 text-[#CFCFCF]'>Gift cards</p>
                        <p className='mb-2 text-[#CFCFCF]'>Credit and payment</p>
                        <p className='mb-2 text-[#CFCFCF]'>Service contracts</p>
                        <p className='mb-2 text-[#CFCFCF]'>Non-cash account</p>
                        <p className='text-[#CFCFCF]'>Payment</p>
                    </div>
                    <div>
                        <h2 className='font-semibold text-[16px] mb-2 laeding-[16px] text-[#FFFFFF]'>Assistance to the buyer</h2>
                        <p className='mb-2 text-[#CFCFCF]'>Find an order</p>
                        <p className='mb-2 text-[#CFCFCF]'>Terms of delivery</p>
                        <p className='mb-2 text-[#CFCFCF]'>Terms of delivery</p>
                        <p className='mb-2 text-[#CFCFCF]'>Guarantee</p>
                        <p className='mb-2 text-[#CFCFCF]'>Frequently asked questions</p>
                        <p className='text-[#CFCFCF]'>Terms of use of the site</p>
                    </div>
                </div>
                {/* Icons */}
                <div className='flex mt-6 gap-10'>
                    <FaTwitter />
                    <FaFacebookF />
                    <FaTiktok />
                    <FaInstagram />
                </div>
            </footer>
        </>
    )
}