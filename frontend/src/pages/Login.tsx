import type { FormEvent } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import CarrotIcon from "../assets/carrotColored.png";
import HideEyeIcon from "../assets/HideEye.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("password");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = {
      email: isValidEmail ? "" : "Enter a valid email.",
      password:
        password.length >= 6 ? "" : "Password must be at least 6 characters.",
    };

    setErrors(nextErrors);

    if (nextErrors.email || nextErrors.password) {
      return;
    }

    navigate("/home");
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="relative mx-auto flex min-h-screen w-full flex-col overflow-hidden px-6 pb-4 pt-20 sm:px-8">
        <div className="flex justify-center">
          <img src={CarrotIcon} alt="Nectar" className="w-12 sm:w-14" />
        </div>

        <form noValidate onSubmit={handleSubmit} className="pt-16 sm:pt-20">
          <header>
            <h1 className="text-lg font-semibold leading-6 tracking-normal sm:text-xl">
              Loging
            </h1>
            <p className="mt-2 text-xs font-medium leading-4 text-slate-500 sm:text-sm sm:leading-5">
              Enter your emails and password
            </p>
          </header>

          <div className="mt-8">
            <label
              htmlFor="email"
              className="block text-xs font-medium leading-4 text-slate-500"
            >
              Email
            </label>
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
              aria-describedby={errors.email ? "login-email-error" : undefined}
              className="mt-3 h-5 w-full border-0 bg-transparent p-0 text-sm font-medium leading-5 text-slate-900 outline-none"
            />
            <div className="mt-2 h-px w-full bg-slate-200" />
            {errors.email && (
              <p
                id="login-email-error"
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
                  errors.password ? "login-password-error" : undefined
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
                id="login-password-error"
                className="mt-2 text-xs font-medium leading-4 text-red-500"
              >
                {errors.password}
              </p>
            )}
          </div>

          <div className="mt-3 text-right">
            <button
              type="button"
              className="text-xs font-medium leading-4 text-slate-900"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="mt-5 flex h-12 w-full items-center justify-center rounded-xl bg-[#53B175] text-sm font-semibold leading-none text-white"
          >
            Log In
          </button>

          <p className="mt-4 text-center text-xs font-semibold leading-4 text-slate-900">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-semibold text-brand">
              Signup
            </Link>
          </p>
        </form>

        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#c8d1d2]" />
      </section>
    </main>
  );
};

export default Login;
