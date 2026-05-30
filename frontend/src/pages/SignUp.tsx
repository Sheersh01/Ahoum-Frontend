import type { FormEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import CarrotIcon from "../assets/carrotColored.png";
import HideEyeIcon from "../assets/HideEye.png";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = {
      username: username.trim().length >= 2 ? "" : "Enter your name.",
      email: isValidEmail ? "" : "Enter a valid email.",
      password: password.length >= 6 ? "" : "Password must be at least 6 characters.",
    };

    setErrors(nextErrors);

    if (nextErrors.username || nextErrors.email || nextErrors.password) {
      return;
    }

    navigate("/home");
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[linear-gradient(115deg,#fbfaf6_0%,#ffffff_43%,#fdeceb_100%)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(145deg,rgba(246,241,255,0.82)_0%,rgba(255,255,255,0.72)_42%,rgba(233,250,244,0.72)_73%,rgba(248,238,248,0.86)_100%)]" />

        <div className="relative flex justify-center pt-[20px]">
          <img src={CarrotIcon} alt="Nectar" className="h-[40px] w-[40px]" />
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="relative px-[26px] pt-[68px]"
        >
          <h1 className="text-[18px] leading-[22px] font-semibold tracking-normal">
            Sign Up
          </h1>
          <p className="mt-[9px] text-[11px] leading-[14px] font-medium text-[#7c7c7c]">
            Enter your credentials to continue
          </p>

          <div className="mt-[31px]">
            <label
              htmlFor="username"
              className="block text-[11px] leading-[13px] font-medium text-[#7c7c7c]"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(event) => {
                setUsername(event.target.value);
                setErrors((current) => ({ ...current, username: "" }));
              }}
              required
              aria-invalid={Boolean(errors.username)}
              aria-describedby={
                errors.username ? "signup-username-error" : undefined
              }
              className="mt-[13px] h-[18px] w-full border-0 bg-transparent p-0 text-[12px] leading-[18px] font-medium text-[#181725] outline-none"
            />
            <div className="mt-[11px] h-px w-full bg-[#e2e2e2]" />
            {errors.username && (
              <p
                id="signup-username-error"
                className="mt-[7px] text-[10px] leading-[12px] font-medium text-red-500"
              >
                {errors.username}
              </p>
            )}
          </div>

          <div className="mt-[25px]">
            <label
              htmlFor="email"
              className="block text-[11px] leading-[13px] font-medium text-[#7c7c7c]"
            >
              Email
            </label>
            <div className="mt-[13px] flex h-[18px] items-center">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrors((current) => ({ ...current, email: "" }));
                }}
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "signup-email-error" : undefined
                }
                className="h-[18px] min-w-0 flex-1 border-0 bg-transparent p-0 text-[12px] leading-[18px] font-medium text-[#181725] outline-none"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className={`h-[13px] w-[13px] shrink-0 ${
                  isValidEmail ? "text-[#53b175]" : "text-[#b1b1b1]"
                }`}
              >
                <path
                  d="M13.7 4.4 6.6 11.5 2.8 7.7"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="mt-[11px] h-px w-full bg-[#e2e2e2]" />
            {errors.email && (
              <p
                id="signup-email-error"
                className="mt-[7px] text-[10px] leading-[12px] font-medium text-red-500"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-[25px]">
            <label
              htmlFor="password"
              className="block text-[11px] leading-[13px] font-medium text-[#7c7c7c]"
            >
              Password
            </label>
            <div className="mt-[14px] flex h-[18px] items-center">
              <input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setErrors((current) => ({ ...current, password: "" }));
                }}
                required
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? "signup-password-error" : undefined
                }
                className="h-[18px] min-w-0 flex-1 border-0 bg-transparent p-0 text-[20px] leading-none tracking-[4px] text-[#181725] outline-none"
              />
              <button
                type="button"
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
                onClick={() => setIsPasswordVisible((value) => !value)}
                className="flex h-[18px] w-[18px] items-center justify-center"
              >
                <img src={HideEyeIcon} alt="" className="h-[13px] w-[15px]" />
              </button>
            </div>
            <div className="mt-[11px] h-px w-full bg-[#e2e2e2]" />
            {errors.password && (
              <p
                id="signup-password-error"
                className="mt-[7px] text-[10px] leading-[12px] font-medium text-red-500"
              >
                {errors.password}
              </p>
            )}
          </div>

          <p className="mt-[12px] text-[10px] leading-[17px] font-medium text-[#7c7c7c]">
            By continuing you agree to our{" "}
            <button type="button" className="text-[#53b175]">
              Terms of Service
            </button>
            <br />
            and{" "}
            <button type="button" className="text-[#53b175]">
              Privacy Policy.
            </button>
          </p>

          <button
            type="submit"
            className="mt-[18px] flex h-[46px] w-full items-center justify-center rounded-[12px] bg-[#53b175] text-[13px] leading-none font-semibold text-white"
          >
            Sign Up
          </button>

          <p className="mt-[17px] text-center text-[10px] leading-[12px] font-semibold text-[#181725]">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#53b175]">
              Login
            </Link>
          </p>
        </form>

        <div className="absolute bottom-[7px] left-1/2 h-[4px] w-[93px] -translate-x-1/2 rounded-full bg-[#c8d1d2]" />
      </section>
    </main>
  );
};

export default SignUp;
