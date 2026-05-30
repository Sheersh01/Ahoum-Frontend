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
      password:
        password.length >= 6 ? "" : "Password must be at least 6 characters.",
    };

    setErrors(nextErrors);

    if (nextErrors.username || nextErrors.email || nextErrors.password) {
      return;
    }

    navigate("/home");
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="relative mx-auto min-h-screen w-full overflow-hidden bg-[linear-gradient(115deg,#fbfaf6_0%,#ffffff_43%,#fdeceb_100%)]">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(145deg,rgba(246,241,255,0.82)_0%,rgba(255,255,255,0.72)_42%,rgba(233,250,244,0.72)_73%,rgba(248,238,248,0.86)_100%)]" />

        <div className="relative flex justify-center pt-5">
          <img src={CarrotIcon} alt="Nectar" className="h-10 w-10" />
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="relative px-6 pt-16 sm:px-8 sm:pt-20"
        >
          <header>
            <h1 className="text-lg font-semibold leading-6 tracking-normal sm:text-xl">
              Sign Up
            </h1>
            <p className="mt-2 text-xs font-medium leading-4 text-slate-500 sm:text-sm sm:leading-5">
              Enter your credentials to continue
            </p>
          </header>

          <div className="mt-8">
            <label
              htmlFor="username"
              className="block text-xs font-medium leading-4 text-slate-500"
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
              className="mt-3 h-5 w-full border-0 bg-transparent p-0 text-sm font-medium leading-5 text-slate-900 outline-none"
            />
            <div className="mt-2 h-px w-full bg-slate-200" />
            {errors.username && (
              <p
                id="signup-username-error"
                className="mt-2 text-xs font-medium leading-4 text-red-500"
              >
                {errors.username}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="email"
              className="block text-xs font-medium leading-4 text-slate-500"
            >
              Email
            </label>
            <div className="mt-3 flex h-5 items-center gap-3">
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
                className="h-5 min-w-0 flex-1 border-0 bg-transparent p-0 text-sm font-medium leading-5 text-slate-900 outline-none"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className={`h-3.5 w-3.5 shrink-0 ${
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
            <div className="mt-2 h-px w-full bg-slate-200" />
            {errors.email && (
              <p
                id="signup-email-error"
                className="mt-2 text-xs font-medium leading-4 text-red-500"
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-6">
            <label
              htmlFor="password"
              className="block text-xs font-medium leading-4 text-slate-500"
            >
              Password
            </label>
            <div className="mt-3 flex h-5 items-center gap-3">
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
                className="h-5 min-w-0 flex-1 border-0 bg-transparent p-0 text-xl leading-none tracking-[0.25rem] text-slate-900 outline-none"
              />
              <button
                type="button"
                aria-label={
                  isPasswordVisible ? "Hide password" : "Show password"
                }
                onClick={() => setIsPasswordVisible((value) => !value)}
                className="flex h-5 w-5 items-center justify-center"
              >
                <img src={HideEyeIcon} alt="" className="h-3.5 w-4" />
              </button>
            </div>
            <div className="mt-2 h-px w-full bg-slate-200" />
            {errors.password && (
              <p
                id="signup-password-error"
                className="mt-2 text-xs font-medium leading-4 text-red-500"
              >
                {errors.password}
              </p>
            )}
          </div>

          <p className="mt-3 text-xs font-medium leading-5 text-slate-500 sm:text-sm">
            By continuing you agree to our{" "}
            <button type="button" className="text-brand">
              Terms of Service
            </button>
            <br />
            and{" "}
            <button type="button" className="text-brand">
              Privacy Policy.
            </button>
          </p>

          <button
            type="submit"
            className="mt-4 flex h-11.5 w-full items-center justify-center rounded-xl bg-[#53B175] text-sm font-semibold leading-none text-white"
          >
            Sign Up
          </button>

          <p className="mt-4 text-center text-xs font-semibold leading-4 text-slate-900">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-brand">
              Login
            </Link>
          </p>
        </form>

        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#c8d1d2]" />
      </section>
    </main>
  );
};

export default SignUp;
