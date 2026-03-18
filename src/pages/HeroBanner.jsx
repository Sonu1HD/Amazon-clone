import { useEffect, useState } from "react";

const banners = [
  {
    title: "Shop t-shirts & polos",
    price: "Under ₹399",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/Dec25Bx/Desktop_tall_Hero_3000x1200_hot-off-the-press._CB775468511_.jpg",
  },
  {
    title: "Upgrade your home",
    price: "Starting ₹499",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044815._CB551384116_.jpg",
  },
  {
    title: "Latest fashion trends",
    price: "Up to 60% off",
    image:
      "https://images-eu.ssl-images-amazon.com/images/G/31/Img25/Consumables/SVD/Dec/SVD_PC_Hero_3000x1200_03._CB777993017_.jpg",
  },
];

const HeroBanner = () => {
  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative w-full h-150 overflow-hidden">
      {/* Slides */}
      {banners.map((banner, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === index ? "opacity-100 z-10" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${banner.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent"></div>

          {/* Text Content */}
          <div className="absolute left-20 top-1/3 text-white max-w-md animate-fadeIn">
            <p className="text-lg">{banner.title}</p>
            <h2 className="text-3xl font-bold mb-2">{banner.price}</h2>

            <div className="flex gap-4 text-sm font-semibold">
              <span className="border-b border-white pb-1">
                TOP BRANDS
              </span>
              <span className="opacity-80">LATEST TRENDS</span>
            </div>

            <div className="mt-4 bg-white text-black px-3 py-2 rounded shadow inline-block text-sm">
              <strong>Unlimited 5% cashback</strong>
              <p className="text-xs text-gray-600">
                with Amazon Pay ICICI Bank credit card
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white z-20"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white z-20"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
