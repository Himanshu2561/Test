import Slider from "./Rev_Slider";

const Review = () => {
  return (
    <div className="h-[512px] max-w-[1440px] mx-auto mt-[57px] ">
      <div className="mx-auto max-w-[1440px] w-[1090px]">
        <p className="text-[40px] font-bold">Review from customers</p>
        <p className="text-[12px] w-[399px] mt-[24px] font-normal">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
      </div>
      <div className="mt-[32px] w-full">
        <Slider />
      </div>
    </div>
  );
};

export default Review;
