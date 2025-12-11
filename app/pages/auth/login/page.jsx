"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "./store/loginThunk";

export default function Login() {
  const dispatch = useDispatch();
  const userDetail = useSelector((state) => state.auth.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const router = useRouter();
  useEffect(() => console.log(userDetail), [userDetail]);
  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await dispatch(loginUser({ email, password }));
      if (response.meta.requestStatus === "fulfilled") {
        setSuccess("Login Successful!");
        router.push("/pages/dashboard");
      } else {
        setError(response.payload || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("An unexpected error occurred:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="w-1/3 bg-accent flex justify-center flex-col items-center px-12 text-white">
        <div className="text-center space-y-6 flex flex-col items-center">
          <div className="text-center">
            <div className="text-5xl font-bold text-center ">Hello,</div>
            <div className="text-5xl font-bold text-center">Welcome!</div>
          </div>
          <h1 className="text-lg max-w-xs ">
            Create an account and start your journey with us.
          </h1>
          <a href="/pages/auth/signup">
            <button className="border-white border-2 rounded-full px-8 py-3 cursor-pointer hover:bg-white hover:text-accent transition">
              SIGN UP
            </button>
          </a>
        </div>
      </div>
      <div className="w-2/3 flex justify-center items-center px-12 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="font-bold text-accent text-4xl mb-6 text-center ">
            Login
          </h2>
          {error && (
            <div className="mb-3 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <p className="text-sm">{error}</p>
            </div>
          )}
          {success && (
            <div className="mb-3 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <p className="text-sm">{success}</p>
            </div>
          )}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-lg focus:outline-none relative z-0 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-100 pl-12 pr-4 py-3 rounded-lg focus:outline-none relative z-0 text-gray-900 placeholder-gray-500"
              />
            </div>
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="rounded-full px-8 py-3 items-center bg-accent text-white cursor-pointer hover:bg-[#9c9adf] transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Loading..." : "Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
