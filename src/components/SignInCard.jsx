import {Link} from 'react-router-dom';
const SignInCard = ({ onSignIn }) => {
  return (
    <div className="bg-white p-4 shadow rounded flex flex-col justify-between h-full">
      {/* Title */}
      <h3 className="font-bold text-lg mb-3">
        Sign in for your best experience
      </h3>

      {/* Deal preview */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">
            Fire-Boltt Aero TWS Earbuds Custom EQ
          </p>

          <img
            src="https://m.media-amazon.com/images/I/31sW1CJ6TvL._SY300_SX300_QL70_FMwebp_.jpg"
            alt="fire boltt"
            className="h-32 w-full object-contain mb-2"
          />

          <p className="text-sm font-semibold">
            ₹799
          </p>

          <p className="text-xs text-gray-500">
            ★ ★ ★ ★ ☆ (23,456)
          </p>
        </div>

      {/* CTA */}
      <button
        onClick={onSignIn}
        className="bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold"
      >
        Sign in securely
      </button>
    </div>
  );
};

export default SignInCard;
