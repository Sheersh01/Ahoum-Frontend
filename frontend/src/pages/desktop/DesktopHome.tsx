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

          {/* ── RIGHT ── */}
          <div className="bg-[#F8FAF6] flex items-center justify-center p-10">
            <div className="w-full max-w-[380px] bg-white rounded-2xl border border-gray-100 shadow-sm">
              {/* Tabs */}
              <div className="grid grid-cols-2 border-b border-gray-100">
                {(["login", "signup"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setAuthMode(t)}
                    className={`py-4 text-sm font-semibold transition capitalize ${
                      authMode === t
                        ? "border-b-2 border-green-500 text-gray-900"
                        : "text-gray-400"
                    }`}
                  >
                    {t === "login" ? "Login" : "Sign Up"}
                  </button>
                ))}
              </div>

              <div className="p-8">
                <h2 className="text-xl font-bold text-gray-900">
                  {authMode === "login" ? "Welcome back!" : "Create Account"}
                </h2>
                <p className="text-sm text-gray-400 mt-1">
                  {authMode === "login"
                    ? "Login to continue"
                    : "Sign up to start shopping"}
                </p>

                <div className="space-y-4 mt-6">
                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1.5">
                      Email or Phone number
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-11 border border-gray-200 rounded-xl px-4 text-sm focus:outline-none focus:border-green-400"
                      placeholder="Enter your email or phone number"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-600 block mb-1.5">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full h-11 border border-gray-200 rounded-xl px-4 pr-10 text-sm focus:outline-none focus:border-green-400"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                      >
                        {showPassword ? (
                          <FaEyeSlash size={14} />
                        ) : (
                          <FaEye size={14} />
                        )}
                      </button>
                    </div>
                    <div className="text-right mt-1">
                      <span className="text-xs text-green-600 cursor-pointer">
                        Forgot password?
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleAuth}
                  className="w-full mt-6 h-11 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition"
                >
                  {authMode === "login" ? "Login" : "Create Account"}
                </button>

                <div className="relative text-center my-5">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-100" />
                  </div>
                  <span className="relative bg-white px-3 text-xs text-gray-400">
                    or continue with
                  </span>
                </div>

                <button
                  onClick={() => setStep("otp")}
                  className="w-full h-11 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  <FaGoogle size={14} />
                  Continue with Google
                </button>

                <p className="text-center text-xs text-gray-400 mt-5">
                  {authMode === "login"
                    ? "Don't have an account?"
                    : "Already have an account?"}
                  <span
                    onClick={() =>
                      setAuthMode(authMode === "login" ? "signup" : "login")
                    }
                    className="ml-1 text-green-600 font-semibold cursor-pointer"
                  >
                    {authMode === "login" ? "Sign Up" : "Login"}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── OTP MODAL ── */}
      {step === "otp" && (
        <Modal onClose={() => setStep("auth")}>
          <div className="text-center">
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <FaPhoneAlt size={22} className="text-green-500" />
            </div>
            <h2 className="text-xl font-bold">Verify your number</h2>
            <p className="text-sm text-gray-400 mt-1">
              We've sent a 4-digit code to
            </p>
            <p className="font-bold text-gray-900 mt-1 mb-5">
              +880 1700 123456
            </p>

            <div className="flex justify-center gap-3">
              {otp.map((val, i) => (
                <input
                  key={i}
                  ref={(el) => {
                    otpRefs.current[i] = el;
                  }}
                  value={val}
                  maxLength={1}
                  onChange={(e) => handleOtpInput(i, e.target.value)}
                  className="w-14 h-14 border-2 border-gray-200 rounded-xl text-center text-xl font-bold focus:outline-none focus:border-green-400"
                />
              ))}
            </div>

            <p className="text-xs text-gray-400 mt-4">
              Resend code in{" "}
              <span className="text-green-600 font-semibold">{timerStr}</span>
            </p>

            <button
              onClick={handleOtp}
              className="w-full mt-6 h-11 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm transition"
            >
              Verify &amp; Continue
            </button>
          </div>
        </Modal>
      )}

      {/* ── LOCATION MODAL ── */}
      {step === "location" && (
        <Modal onClose={() => setStep("otp")}>
          <div>
            <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt size={22} className="text-green-500" />
            </div>
            <h2 className="text-xl font-bold text-center">
              Select Your Location
            </h2>
            <p className="text-sm text-gray-400 text-center mt-1 mb-6">
              Set your location to see products
              <br />
              and delivery time in your area
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1.5">
                  City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full h-11 border border-gray-200 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-green-400 bg-white"
                >
                  <option>Dhaka</option>
                  <option>Lucknow</option>
                  <option>Delhi</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1.5">
                  Area
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full h-11 border border-gray-200 rounded-xl px-4 text-sm appearance-none focus:outline-none focus:border-green-400 bg-white"
                >
                  <option>Banassre</option>
                  <option>Hazratganj</option>
                  <option>Gomti Nagar</option>
                </select>
              </div>
            </div>

            <button
              onClick={() => {
                setCity("Lucknow");
                setArea("Gomti Nagar");
              }}
              className="w-full mt-4 h-11 border border-gray-200 rounded-xl flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              <FaLocationArrow size={13} className="text-green-500" />
              Use my current location
            </button>

            <button
              onClick={handleLocation}
              className="w-full mt-3 h-11 bg-green-500 hover:bg-green-600 text-white font-bold text-sm rounded-xl transition"
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
