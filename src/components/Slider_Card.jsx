const Slider_Card = () => {
  return (
    <div className="ml-[175px]">
      <div className="card mb-10 min-w-[465px] max-w-[465px] min-h-[238px] rounded-[10px] border p-[36px_48px]">
        <div className="flex gap-[24px] w-[369px]">
          <div>
            <img src="img/Lolla 1.png" alt="" />
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className="text-[16px] font-bold">Lolla Smith</p>
            <p className="text-[14px] font-normal">Microsoft</p>
            <img className="w-[132px]" src="img/Frame 20.png" alt="" />
          </div>
        </div>
        <div className="w-[369px] mt-[24px]">
          <p className="text-[12px] font-normal">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slider_Card;
