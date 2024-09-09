const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 md:relative ">
      <img
        src="header-img.svg"
        alt=""
        className=" object-cover overflow-hidden bottom-0 w-full "
      />
      <div className=" md:absolute md:w-1/3 md:flex md:flex-col w-2/3 text-center m-auto  md:right-8 mt-8">
        <p className="text-wrap text-gray-600 text-sm font-medium lg:text-lg md:text-slate-300">
          We love creating spaces that just draw you in and make you never want
          to leave. Our goal is to turn your space into something truly special,
          reflecting your vibe and personality in every corner. Together we can
          turn your house into your dream home.
        </p>
        <button className="bg-primary px-6 py-3 rounded-full mt-8 text-white font-medium">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
