import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DealCard from "../components/DealCard";
import ProductMiniCard from "../components/ProductMiniCard";
import StripCard from "../components/StripCard";
import SignInCard from "../components/SignInCard";

const DealsGrid = () => {
  const [homeData, setHomeData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHomepage = async () => {
      const res = await fetch("https://amazon-clone-0qb5.onrender.com/api/products/homepage");
      const data = await res.json();
      setHomeData(data);
    };
    fetchHomepage();
  }, []);

  if (!homeData) return <p>Loading...</p>;

  const gridSections = homeData.sections.filter(
    section => section.type === "grid"
  );

  const stripSections = homeData.sections.filter(
    section => section.type === "strip"
  );

  const firstRow = gridSections.slice(0, 3);
  const secondRow = gridSections.slice(3, 7);
  // const remainingRows = gridSections.slice(7);

  return (
    <>
      {/* ROW 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {firstRow.map(section => (
          <DealCard key={section.id} title={section.title} footer={section.footer}>
            <div className="grid grid-cols-2 gap-3">
              {section.products.map(product => (
                <ProductMiniCard key={product._id} product={product} />
              ))}
            </div>
          </DealCard>
        ))}

        <SignInCard
          onSignIn={() => navigate("/login")}
        />
      </div>

      {/* ROW 2 – MORE CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {secondRow.map(section => (
          <DealCard key={section.id} title={section.title} footer={section.footer}>
            <div className="grid grid-cols-2 gap-3">
              {section.products.map(product => (
                <ProductMiniCard key={product._id} product={product} />
              ))}
            </div>
          </DealCard>
        ))}
      </div>

      {/* OPTIONAL EXTRA ROWS */}

      {/* STRIP SECTIONS */}
      <div className="flex flex-col gap-8 mb-8">
      {stripSections.map(section => (
        <StripCard
          key={section.id}
          title={section.title}
          products={section.products}
        />
      ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {secondRow.map(section => (
          <DealCard key={section.id} title={section.title} footer={section.footer}>
            <div className="grid grid-cols-2 gap-3">
              {section.products.map(product => (
                <ProductMiniCard key={product._id} product={product} />
              ))}
            </div>
          </DealCard>
        ))}
      </div>
    </>
  );
};

export default DealsGrid;
