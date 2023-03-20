import React from "react";
import { motion } from 'framer-motion';
import { navVariants } from "@/utils/motion";
import { fadeIn } from "@/utils/motion";
import GlowingButton from '../components/GlowingButton';

export default function Main() {
    return (
        <>
            <div className="h-screen overflow-hidden">
                
                <video autoPlay loop muted playsInline className="absolute z-10 w-full h-screen object-cover " >
                    <source src="/Assets/terrain.mp4" type="video/mp4" />
                </video>
                
                <div 
                className="relative z-30 flex flex-row items-center justify-center mt-20  ">
                    <a href="#" >
                        <img
                            className=" z-10 bg-transparent w-80 md:w-96 h-auto"
                            src="Assets/logo.png"
                            alt=""
                        />
                    </a>
                 
                </div>

                

               <div
                className="relative z-30 p-8 max-w-xs md:max-w-md m-10 mx-auto my-20 bg-contain bg-white  rounded-xl shadow-lg flex flex-col items-center justify-center space-x-4 ring-offset-2 ring-4">
                    <div>
                        <div className="text-xl font-medium text-black"></div>
                        <p className="text-slate-800 text-center"> A permissionless DAO on a mission to grow and expand the CyberConnect protocol and its ecosystem. By accelerating adoption of its social graph protocol and the dApps leveraging its infrastructure, Conscious DAO will build, fund and support the next generation of social media platforms that are user and creator-centric. </p>
                    </div>
                  {/* <button className="rounded-full border-2 px-2 py-1 text-slate-800 text-sm mt-4 bg-white shadow-lg transition ease-out hover:-translate-y-1 hover:scale-110 duration-200">💬 Join the Community</button> */} 

                    <GlowingButton label="💬 Join the Community" />
                 </div>

                 
            
            </div>
        </>
    )
}