import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryNav = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("All");

  const categories = [
    "All",
    "Mobiles",
    "Electronics",
    "Fashion",
    "Winter",
    "Home",
    "Kitchen's products",
  ];

  const handleClick = (category) => {
    setActive(category);

    if (category === "All") {
      navigate("/");
    } else {
      navigate(`/category/${category.toLowerCase()}`);
    }
  };

  return (
    <div className="bg-[#232f3e] text-white">
      <div className="flex gap-2 px-3 py-1 overflow-x-auto whitespace-nowrap scrollbar-hide ">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`text-sm px-2 py-1 hover:cursor-pointer border-b-2 transition ${
              active === category
                ? "border-white font-semibold"
                : "border-transparent hover:border-white"
            }`}
          >
            {category}
          </button>
        ))}
        <button>
            <a className="text-sm px-2 py-1 hover:cursor-pointer hover:border-b-2 transition" href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav">MX Player</a>
        </button>
        <img src="https://m.media-amazon.com/images/G/31/Events/img25/Nimesh/JAN26_PC_SWM_Starts_1X._CB772984366_.jpg" alt="" />
      </div>
    </div>
  );
};

export default CategoryNav;
