import React from "react";
import dayjs from "dayjs";
import { LinkedInLogoIcon, GitHubLogoIcon, TwitterLogoIcon, EnvelopeOpenIcon } from "@radix-ui/react-icons";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ProfileDetails = () => {

  const date = dayjs().year();

  return ( 
    <div className="overflow-hidden min-h-fit">
    <div className="flex flex-col justify-center items-center border pb-5  xl:px-10 mx-5 rounded-2xl mt-5 xl:fixed xl:w-[380px] xl:bottom-1 xl:top-1">

        <div className="scroll fixed bg-green-600 h-[0.1rem] top-0 left-0 right-0 z-50"></div>

        <div className="mt-2 font-bold text-xl">Danny</div>
 
      <div className="flex items-center h-[55vh] w-56">
        <img src='/nft-characters.jpg' className="rounded-full"/>
      </div>

      <div className="text-light text-sm mb-5 flex gap-2 items-center"> <EnvelopeOpenIcon /> danielobijuru01@gmail.com </div>

      <div className="text-sm font-bold text-ash ml-6 my-5">© {date} Daniel. All Rights Reserved</div>

      <div className="w-44 flex justify-center gap-6 mt-3 rounded-full">

        <a href="https://www.linkedin.com/in/daniel-obijuru-aa05062b1/">
          <LinkedInLogoIcon className ="w-5 h-5"/>
        </a>
        <a href='https://github.com/Danny1-d'>
          <GitHubLogoIcon className ="w-5 h-5"/>
        </a>
        {/* <a href="https://www.facebook.com/profile.php?id=61550331388285">
          <img src={facebook} className="rounded-full hover:border-green-500 border-2 cursor-pointer"/>
        </a> */}
        <a href='https://x.com/DannyKfty?t=87KlVhxXtLT6A01xazamrQ&s=09'>
          <TwitterLogoIcon className ="w-5 h-5"/>
        </a> 

        <a href="https://wa.me/+2347077377379">
          <WhatsAppIcon className ="w-5 h-5"/>
        </a>
      </div>

      {/* <div className="text-sm mx-5 mt-5 text-purple-800 ">With my sleek design and intuitive features, I embody the essence of modern sophisatication</div> */}
    </div>
    </div>
  )
}
export default ProfileDetails