import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[493px]">
      <div className="mx-[175px] text-center flex flex-col justify-center items-center">
        <div className="w-[596px] h-[241px] mt-[68px]">
          <div>
            <p className="text-[32px] font-bold">
              We have what you’re looking for
            </p>
            <p className="text-[12px] mt-[24px] text-transparent bg-clip-text bg-gradient-to-r from-btn-l to-btn-r">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type a
            </p>
          </div>
          <div className="cursor-pointer w-[237px] h-[60px] mt-[64px] mx-auto bg-gradient-to-r from-btn-l to-btn-r rounded-[10px]">
            <div className="text-[20px] text-white font-bold h-full flex items-center justify-center">
              Get Started Now
            </div>
          </div>
        </div>
        <div className="w-[995px] h-[74px] mt-[110px] border-t-[0.5px] text-white">
          <div className="mx-[53px] flex justify-between items-center h-full">
            <div className="text-[12px] font-normal">
              <p>All Right Reserved @Copyright 2023</p>
            </div>
            <div className="flex gap-[64px]">
              <div className="text-[12px] font-normal flex gap-[24px]">
                <p className="cursor-pointer">Terms of Service</p>
                <p className="cursor-pointer">Privacy Policy</p>
                <p className="cursor-pointer">Product</p>
              </div>
              <div className="flex gap-[16px]">
                <BsFacebook className="w-[24px] h-[24px] cursor-pointer" />
                <AiFillYoutube className="w-[24px] h-[24px] cursor-pointer" />
                <AiFillInstagram className="w-[24px] h-[24px] cursor-pointer" />
                <AiOutlineTwitter className="w-[24px] h-[24px] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
