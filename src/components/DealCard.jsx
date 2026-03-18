const DealCard = ({ title, children, footer }) => {
  return (
    <div className="bg-white p-4 shadow rounded">
      <h3 className="font-bold text-lg mb-3">{title}</h3>
      {children}
      {footer && (
        <p className="text-blue-600 text-sm mt-3 cursor-pointer">
          {footer}
        </p>
      )}
    </div>
  );
};

export default DealCard;
