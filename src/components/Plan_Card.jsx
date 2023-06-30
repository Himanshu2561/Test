const Plan_Card = ({ priceColor, textColor, bgColor }) => {
  return (
    <div
      className={`bg-${bgColor} rounded-[10px] border-tcolor border-[1px] w-[303px] h-[357px]`}
    >
      <div className="w-[264px] ml-[27px] h-full flex flex-col justify-evenly">
        <p className={`text-[16px] font-bold text-${textColor}`}>Basic Plan</p>
        <p className={`text-[12px] font-normal text-${textColor}`}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
        <div
          className={`w-[144px] h-[39px] flex items-center gap-[19px] text-${priceColor}`}
        >
          <p className="text-[32px] font-bold">$ 54</p>
          <p className="text-[14px] font-normal">/month</p>
        </div>
        <div className={`text-[12px] font-bold text-${textColor}`}>
          <ul className=" list-disc list-inside">
            <li>Free access to video class</li>
            <li>Free access to video class</li>
            <li>Free access to video class</li>
          </ul>
        </div>
        <div className="w-[149px] cursor-pointer h-[44px] border bg-white border-tcolor rounded-[10px]">
          <div className="text-[12px] text-tcolor h-full flex items-center justify-center">
            Start Free Trial
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan_Card;
