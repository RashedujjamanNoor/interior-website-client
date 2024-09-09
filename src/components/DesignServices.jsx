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
      <div>
        {items.slice(0, 3).map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignServices;
