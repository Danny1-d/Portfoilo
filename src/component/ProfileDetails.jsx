import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../assets/images/nft-characters.jpg"
import facebook from "../assets/images/facebook.png"
import github from "../assets/images/github.png"
import linkedIn from "../assets/images/linkedIn.png"
import x from "../assets/images/x.png"
import whatapp from "../assets/images/whatapp.jpeg"
import dayjs from "dayjs";
import { motion } from "framer-motion";

const ProfileDetails = () => {

  const date = dayjs().year();

  return ( 
    <div className="pverflow-hidden">
    <motion.div className="flex flex-col justify-center items-center border pb-5 h-[700px] xl:px-10 mx-5 rounded-2xl mt-5 animate-slideleft"
    whileInView={{ opacity: 1, x:0}} 
    initial={{ opacity : 0, x:'-50vw'}} 
    transition={{duration: 1}}
    >

        <div className="scroll fixed bg-green-600 h-[0.1rem] top-0 left-0 right-0 z-50"></div>

        <div className="mt-2 font-montserrat font-bold text-xl">Daniel</div>
 
      <div className="flex items-center h-[60vh] animate-slidedown w-72">
        <img src={icon} className="rounded-full"/>
      </div>

      <div className="text-light text-sm font-Quicksand ">danielobijuru01@gmail.com </div>

      <div className="text-sm font-roboto font-bold text-ash ml-6 mt-2">© {date} Daniel. All Rights Reserved</div>

      {/* <div className="mt-5 text-lg font-bold font-Tangerine text-purple-400">Contact Me </div> */}

      <div className="w-56 flex justify-center gap-4 mt-3 rounded-full">
        <a href="https://www.linkedin.com/in/daniel-obijuru-aa05062b1/">
          <img src={linkedIn} className="rounded-full hover:border-green-500 border-2 cursor-pointer"/>
        </a>
        <a href='https://github.com/Daniel-agozie'>
          <img src={github} className="rounded-full hover:border-green-500 border-2 cursor-pointer"/>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61550331388285">
          <img src={facebook} className="rounded-full hover:border-green-500 border-2 cursor-pointer"/>
        </a>
        <a href='https://x.com/DannyKfty?t=87KlVhxXtLT6A01xazamrQ&s=09'>
          <img src={x}  className="rounded-full hover:border-green-500 border-2 cursor-pointer"/>
        </a> 

        <a href="https://wa.me/+23409158761196">
          <img src={whatapp} className="rounded-full hover:border-green-500 border-2 cursor-pointer"/>
        </a>
      </div>

      <div className="text-sm font-Chewy mx-5 mt-5 text-purple-800 ">With my sleek design and intuitive features, I embody the essence of modern sophisatication</div>
    </motion.div>
    </div>
  )
}
export default ProfileDetails