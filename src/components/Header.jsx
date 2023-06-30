const Header = () => {
  return (
    <div className="w-full h-[91px] text-white">
      <div className="flex mx-[175px] justify-between h-full items-center">
        <div className="cursor-pointer">Logo</div>
        <div className="flex gap-[107px]">
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">Review</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
