import Ab_Lt from "./Ab_Lt";
import Ab_Rt from "./Ab_Rt";

const About = () => {
  return (
    <div className="h-[525px] mt-[49px]">
      <div className="mx-[175px] flex items-center justify-between">
        <Ab_Lt />
        <Ab_Rt />
      </div>
      <div className="absolute top-[45%] right-0">
        <img src="img/Mic 3.png" alt="" />
      </div>
    </div>
  );
};

export default About;
// 23
