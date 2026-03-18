import {useState} from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        if (!value.trim()) {
            setError("🚨 Enter your mobile number or email");
            return;
        } 
        setError("");
        navigate("/")
    }
    
  return (
    <form onSubmit={handleLogin} className="min-h-screen flex flex-col items-center bg-white">
      {/* Logo */}
      <div className="mt-8 mb-4">
        <h1 className="text-3xl font-bold">
          amazon<span className="text-orange-400">.in</span>
        </h1>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-sm border border-gray-300 rounded-md p-6">
        <h2 className="text-2xl font-medium mb-4">
          Sign in or create account
        </h2>

        <label className="block text-sm font-medium mb-1">
          Enter mobile number or email
        </label>
        <input
          value={value}
          type="text"
          onChange={(e) => { setValue(e.target.value); setError("")}}
          className={`w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500
            ${error 
                ? "border-red-500 focus:ring-red-500" 
                : "border border-gray-400 focus:ring-yellow-500"}
            `} 
        />

        {error && <p className="text-sm text-red-600 mt-1">{error}</p>}

        <button type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-2 rounded mt-4"
        >
          Continue
        </button>

        <p className="text-xs mt-4">
          By continuing, you agree to Amazon&apos;s{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Conditions of Use
          </span>{" "}
          and{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Privacy Notice
          </span>.
        </p>

        <hr className="my-4" />

        <p className="text-sm font-medium">Buying for work?</p>
        <p className="text-sm text-blue-600 hover:underline cursor-pointer">
          Create a free business account
        </p>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-600">
        <div className="flex gap-6 justify-center mb-2">
          <span className="text-blue-600 hover:underline cursor-pointer">
            Conditions of Use
          </span>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Privacy Notice
          </span>
          <span className="text-blue-600 hover:underline cursor-pointer">
            Help
          </span>
        </div>
        <p>© 1996–2026, Amazon.com, Inc. or its affiliates</p>
      </div>
    </form>
  );
};

export default Login;
