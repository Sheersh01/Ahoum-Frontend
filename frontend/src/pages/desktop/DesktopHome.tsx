import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEye,
  FaEyeSlash,
  FaTimes,
  FaGoogle,
} from "react-icons/fa";

const DesktopHome = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<"auth" | "otp" | "location">("auth");

  const [authMode, setAuthMode] = useState<"login" | "signup">("login");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [otp, setOtp] = useState(["", "", "", ""]);

  const [city, setCity] = useState("Dhaka");
  const [area, setArea] = useState("Banassre");

  const handleAuth = () => {
    if (!email.trim()) {
      alert("Enter email or phone");
      return;
    }

    if (!password.trim()) {
      alert("Enter password");
      return;
    }

    setStep("otp");
  };

  const handleOtp = () => {
    if (otp.some((digit) => digit === "")) {
      alert("Enter OTP");
      return;
    }

    setStep("location");
  };

  const handleLocation = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-[#F8FAF7] p-6">
      {/* AUTH SCREEN */}
      <div className="max-w-7xl mx-auto bg-white rounded-3xl overflow-hidden shadow-lg">
        <div className="grid lg:grid-cols-2 min-h-[850px]">
          {/* LEFT */}
          <div className="relative p-16 flex flex-col justify-center">
            <div className="absolute top-10 left-10">
              <div className="flex items-center gap-3">
                <div className="text-4xl">🥕</div>

                <div>
                  <h1 className="font-bold text-3xl text-green-600">nectar</h1>

                  <p className="text-xs tracking-widest text-gray-500">
                    GROCERIES IN AN HOUR
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-lg">
              <h1 className="text-6xl font-bold leading-tight">
                Welcome to
                <span className="block text-green-600">Nectar</span>
              </h1>

              <p className="mt-6 text-gray-500 text-lg">
                Get groceries delivered to your doorstep in as fast as one hour.
              </p>

              <div className="space-y-6 mt-12">
                <Feature
                  title="Fast Delivery"
                  text="Get your groceries delivered quickly."
                />

                <Feature
                  title="Fresh Products"
                  text="Handpicked quality items every day."
                />

                <Feature
                  title="Best Prices"
                  text="Affordable prices on every order."
                />
              </div>
            </div>

            <img
              src="/delivery-man.png"
              alt="delivery"
              className="absolute right-0 bottom-0 h-[80%] object-contain"
            />
          </div>

          {/* RIGHT */}
          <div className="bg-[#FCFCFC] flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-2xl border shadow-sm">
              {/* TABS */}
              <div className="grid grid-cols-2 border-b">
                <button
                  onClick={() => setAuthMode("login")}
                  className={`py-4 font-semibold transition ${
                    authMode === "login"
                      ? "border-b-2 border-green-500 text-black"
                      : "text-gray-400"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setAuthMode("signup")}
                  className={`py-4 font-semibold transition ${
                    authMode === "signup"
                      ? "border-b-2 border-green-500 text-black"
                      : "text-gray-400"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-bold">
                  {authMode === "login" ? "Welcome Back!" : "Create Account"}
                </h2>

                <p className="text-gray-500 mt-2">
                  {authMode === "login"
                    ? "Login to continue"
                    : "Sign up to start shopping"}
                </p>

                <div className="space-y-5 mt-8">
                  <div>
                    <label className="text-sm font-medium">Email / Phone</label>

                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full mt-2 h-12 border rounded-lg px-4"
                      placeholder="Enter email or phone"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium">Password</label>

                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full mt-2 h-12 border rounded-lg px-4"
                        placeholder="Enter password"
                      />

                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-5"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAuth}
                  className="w-full mt-8 h-12 rounded-lg bg-green-500 text-white font-semibold"
                >
                  {authMode === "login" ? "Login" : "Create Account"}
                </button>

                <div className="text-center text-gray-400 text-sm my-6">
                  or continue with
                </div>

                <button
                  onClick={() => setStep("otp")}
                  className="w-full h-12 border rounded-lg flex items-center justify-center gap-3"
                >
                  <FaGoogle />
                  Google
                </button>

                <p className="text-center mt-6 text-sm">
                  {authMode === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}

                  <span
                    onClick={() =>
                      setAuthMode(authMode === "login" ? "signup" : "login")
                    }
                    className="ml-2 text-green-600 cursor-pointer"
                  >
                    {authMode === "login" ? "Sign Up" : "Login"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OTP */}
      {step === "otp" && (
        <Modal onClose={() => setStep("auth")}>
          <div className="text-center">
            <FaPhoneAlt size={28} className="mx-auto text-green-500" />

            <h2 className="text-2xl font-semibold mt-4">Verify Your Number</h2>

            <p className="text-gray-500 mt-2">Enter the 4 digit OTP</p>

            <div className="flex justify-center gap-3 mt-8">
              {otp.map((value, index) => (
                <input
                  key={index}
                  value={value}
                  maxLength={1}
                  onChange={(e) => {
                    const copy = [...otp];
                    copy[index] = e.target.value;
                    setOtp(copy);
                  }}
                  className="w-14 h-14 border rounded-lg text-center text-xl"
                />
              ))}
            </div>

            <button
              onClick={handleOtp}
              className="w-full mt-8 h-12 rounded-lg bg-green-500 text-white"
            >
              Verify & Continue
            </button>
          </div>
        </Modal>
      )}

      {/* LOCATION */}
      {step === "location" && (
        <Modal onClose={() => setStep("otp")}>
          <div>
            <FaMapMarkerAlt size={28} className="mx-auto text-green-500" />

            <h2 className="text-center text-2xl font-semibold mt-4">
              Select Your Location
            </h2>

            <div className="mt-8 space-y-5">
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border h-12 rounded-lg px-4"
              >
                <option>Dhaka</option>
                <option>Lucknow</option>
                <option>Delhi</option>
              </select>

              <select
                value={area}
                onChange={(e) => setArea(e.target.value)}
                className="w-full border h-12 rounded-lg px-4"
              >
                <option>Banassre</option>
                <option>Hazratganj</option>
                <option>Gomti Nagar</option>
              </select>
            </div>

            <button
              onClick={() => {
                setCity("Lucknow");
                setArea("Gomti Nagar");
              }}
              className="w-full mt-6 border h-12 rounded-lg"
            >
              Use Current Location
            </button>

            <button
              onClick={handleLocation}
              className="w-full mt-4 bg-green-500 text-white h-12 rounded-lg"
            >
              Continue
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

function Feature({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
        ✓
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>

        <p className="text-sm text-gray-500">{text}</p>
      </div>
    </div>
  );
}

function Modal({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl p-8 w-full max-w-md relative">
        <button onClick={onClose} className="absolute top-4 right-4">
          <FaTimes size={18} />
        </button>

        {children}
      </div>
    </div>
  );
}

export default DesktopHome;
