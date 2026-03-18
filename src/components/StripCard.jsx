import {Link} from 'react-router-dom';
const StripCard = ({ title, products }) => {
  return (
    <div className="bg-white p-4 rounded shadow col-span-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <a
          href="#"
          className="text-blue-600 text-sm hover:underline"
        >
          See all
        </a>
      </div>

      {/* Products */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide">
        {products.map(product => (
          <Link
            key={product.id}
            to={`/product/${product._id}`}
            className="min-w-[150px] flex-shrink-0"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StripCard;
