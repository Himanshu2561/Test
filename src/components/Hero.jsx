const Hero = () => {
  return (
    <div className="h-[652px] mt-[94px] text-white">
      <div className="mx-[175px] flex justify-between gap-2">
        <div className="flex flex-col justify-between w-[580px] h-[371px]">
          <div className="text-[48px] font-bold">
            <p>Learn how to launch a successful podcast</p>
          </div>
          <div className="text-[16px] font-normal w-[433px]">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              in ustry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
          </div>
          <div className="cursor-pointer w-[237px] h-[74px] mt-[64px] bg-gradient-to-r from-btn-l to-btn-r rounded-[10px]">
            <div className="text-[20px] text-white font-bold h-full flex items-center justify-center">
              Sign up Now
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="relative w-full">
            <img src="img/Hero 2.png" alt="" />
          </div>
          <div className=" absolute top-[90px] right-[53px] w-full">
            <img src="img/Hero 1.png" alt="" />
          </div>
          <div className=" absolute top-[85px] left-[50px] w-full -z-10">
            <img src="img/Group 75.png" alt="" />
          </div>
          <div className=" absolute top-[130px] right-[-140px]">
            <img src="img/Mic 1.png" alt="" />
          </div>
          <div className=" absolute bottom-[-80px] right-[-80px]">
            <img src="img/Mic 2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
