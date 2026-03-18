import { useEffect, useState } from "react";
import DealCard from "../components/DealCard";
import ProductMiniCard from "../components/ProductMiniCard";
import StripCard from "../components/StripCard";

const Home = ({ searchTerm }) => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomepage = async () => {
      try {
        const res = await fetch("https://amazon-clone-0qb5.onrender.com/api/products/homepage");
        const data = await res.json();
        setHomeData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHomepage();
  }, []);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!homeData) return <p className="p-6">Something went wrong</p>;

  const gridSections = homeData.sections.filter(
    section => section.type === "grid"
  );

  const stripSections = homeData.sections.filter(
    section => section.type === "strip"
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* FIRST 3 DEAL CARDS */}
      {gridSections.slice(0, 4).map(section => (
        <DealCard
          key={section.id}
          title={section.title}
          footer={section.footer}
        >
          <div className="grid grid-cols-2 gap-3">
            {section.products.map(product => (
              <ProductMiniCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        </DealCard>
      ))}

      {stripSections.map(section => (
        <StripCard
          key={section.id}
          title={section.title}
          products={section.products}
        />
      ))}

    </div>
  );
};

export default Home;
