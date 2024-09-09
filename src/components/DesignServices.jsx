import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const DesignServices = () => {
  const { items } = useContext(AppContext);
  return (
    <div className="md:mx-10 mx-2 mt-10">
      <h1 className="text-primary text-3xl font-bold text-center">
        DESIGN SERVICES
      </h1>
      <hr />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch gap-4 gap-y-4 mt-4 ">
        {items.slice(0, 3).map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-md p-4 rounded-xl"
          >
            <img src={item.img} alt="" className="w-full" />
            <h1 className="font-medium text-center py-3 text-lg text-gray-800">
              {item.title}
            </h1>
            <p className="text-sm text-gray-600 text-justify">{item.desc}</p>
            <div className="flex justify-center items-center mt-6">
              <button className="bg-primary px-6 py-2 bottom-2 rounded-lg text-white">
                Get Started!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignServices;
