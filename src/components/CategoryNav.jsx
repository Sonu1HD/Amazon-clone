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
      <div className="flex items-center gap-2 px-2 sm:px-4 py-2 overflow-x-auto whitespace-nowrap scrollbar-hide">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleClick(category)}
            className={`text-xs sm:text-sm px-3 py-1 rounded-md transition whitespace-nowrap ${active === category
                ? "bg-white text-black font-semibold"
                : "hover:bg-white/20"
              }`}
          >
            {category}
          </button>
        ))}

        {/* MX Player link */}
        <a
          href="https://www.amazon.in/minitv?ref_=nav_avod_desktop_topnav"
          className="text-xs sm:text-sm px-3 py-1 rounded-md hover:bg-white/20 whitespace-nowrap"
        >
          MX Player
        </a>

        {/* Banner image (hide on mobile) */}
        <img
          src="https://m.media-amazon.com/images/G/31/Events/img25/Nimesh/JAN26_PC_SWM_Starts_1X._CB772984366_.jpg"
          alt=""
          className="hidden md:block h-8 ml-auto object-contain"
        />

      </div>
    </div>
  );
};

export default CategoryNav;
