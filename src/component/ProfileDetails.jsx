import React from "react";
import icon from "../assets/images/nft-characters.jpg"
import facebook from "../assets/images/facebook-icon.png"
import github from "../assets/images/github.webp"
import linkedIn from "../assets/images/linkedIn-icon.png"
import x from "../assets/images/x.svg"
import dayjs from "dayjs";

const ProfileDetails = () => {

  const date = dayjs().year();

  return ( 
    <div className="flex flex-col justify-center items-center border pb-5 h-[700px] xl:px-10 mx-5 rounded-2xl mt-5">
        <div className="mt-2 font-montserrat font-bold text-xl">Daniel</div>
 
      <div className="flex items-center h-[60vh] animate-slowfade w-72 my-10">
        <img src={icon} className="rounded-full"/>
      </div>

      <div className="text-sm font-roboto font-bold text-ash ml-6 mt-2">© {date} Daniel. All Rights Reserved</div>

      <div className="w-10 flex justify-center gap-4 mt-8 rounded-full">
        <img src={linkedIn} className="rounded-full hover:border-green-900 border-2 cursor-pointer bg-darkgreen"/>
        <img src={facebook} className="rounded-full hover:border-green-900 border-2 cursor-pointer"/> 
        <img src={github}  className="rounded-full hover:border-green-900 border-2 cursor-pointer"/>
        <img src={x}  className="rounded-full hover:border-green-900 border-2 cursor-pointer"/> 
      </div>

      <div className="text-xl font-Tangerine italic ml-5 mt-5 text-purple-600">With my sleek design and intuitive features, I embody the essence of modern sophisatication</div>
    </div>
  )
}
export default ProfileDetails