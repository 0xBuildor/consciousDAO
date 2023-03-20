import React from "react";
import { motion } from 'framer-motion';
import { navVariants } from "@/utils/motion";
import { fadeIn } from "@/utils/motion";

export default function Main() {
    return (
        <>
            <div className="w-full h-screen overflow-hidden">
                
                <video autoPlay loop muted className="absolute z-10 w-full h-full object-cover " >
                    <source src="/Assets/terrain.mp4" type="video/mp4" />
                </video>
                
                <motion.div variants={navVariants}
                initial="hidden"
                whileInView="show"
                className="relative z-30 flex flex-row items-center justify-center mt-24  ">
                    <a href="#" >
                        <img
                            className=" z-10 bg-transparent w-96 h-auto"
                            src="Assets/Logo.svg"
                            alt=""
                        />
                    </a>
                 
                </motion.div>

                <div
                className="relative z-30 p-8 max-w-sm mx-auto my-20 bg-white  rounded-xl shadow-lg flex flex-col items-center space-x-4 ring-offset-2 ring-4">
                    <div>
                        <div className="text-xl font-medium text-black"></div>
                        <p className="text-slate-700 text-justify"> A permissionless DAO on a mission to grow and expand the CyberConnect protocol and its ecosystem. By accelerating adoption of its social graph protocol and the dApps leveraging its infrastructure, Conscious DAO will build, fund and support the next generation of social media platforms that are user and creator-centric. </p>
                    </div>
                    <button className="rounded-full border-2 px-2 py-1 text-slate-800 text-sm mt-4 bg-white shadow-lg transition ease-out hover:-translate-y-1 hover:scale-110 duration-200 hover:text-white">💬 Join the Community</button>

        
                 </div>

                 
            
            </div>
        </>
    )
}