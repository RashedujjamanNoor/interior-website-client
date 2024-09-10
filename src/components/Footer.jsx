const Footer = () => {
  return (
    <div className="bg-primary flex flex-col md:grid md:grid-cols-3 md:items-start justify-center items-center px-10 md:px-16 gap-8 pt-10 mt-16 pb-7">
      <div>
        <img src="footer.png" alt="" className="w-80" />
      </div>
      <div className="text-center text-white">
        <h1 className="text-white font-medium text-3xl">LINKS</h1>
        <ul className="flex justify-center items-center gap-1 flex-col mt-4">
          <li>About us</li>
          <li>Design News</li>
          <li>Virtual Design</li>
          <li>Commercial Design</li>
          <li>Residential Desing</li>
          <li>Airbnb Design & Staging</li>
          <li>Shop</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl text-white ">GET IN THE KNOW</h1>
        <p className="text-justify mt-4 text-wrap text-gray-700">
          You’ll always hear it from The Hive first. Our passion is discovering
          and highlighting emerging talent, and we’re energized by and for our
          community of like-minded design lovers — like you!
        </p>

        <div>
          <input
            type="email"
            className="w-full h-12 px-3 py-1 mt-6 text-gray-800 font-medium text-base rounded-md"
            placeholder="Email"
          />
          <button
            type="submit"
            className="bg-gray-500 text-white px-5 py-2 mt-5 rounded-md font-medium "
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
