import { useNavigate } from "react-router";
import FacebookIcon from "../assets/facebook.png";
import GlobeIcon from "../assets/globe.png";
import GoogleIcon from "../assets/google.png";
import SignInHero from "../assets/Sign In.png";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <section className="relative mx-auto min-h-screen w-full overflow-hidden bg-white">
        <img
          src={SignInHero}
          alt="Fresh groceries"
          className="block w-full select-none object-contain"
          draggable={false}
        />

        <div className="px-6 pt-2 sm:px-8">
          <h1 className="max-w-44 text-xl font-semibold leading-6 tracking-normal sm:text-2xl sm:leading-7">
            Get your groceries with nectar
          </h1>

          <div className="mt-6 flex h-5 items-center gap-3 pl-2">
            <img src={GlobeIcon} alt="" className="h-3.5 w-3.5" />
            <span className="text-sm font-medium leading-none text-slate-950">
              +880
            </span>
          </div>

          <div className="mt-4 h-px w-full bg-slate-200" />

          <button
            type="button"
            onClick={() => navigate("/number")}
            className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#53B175] text-sm font-semibold leading-none text-white"
          >
            Continue
          </button>

          <p className="mt-5 text-center text-xs font-medium leading-4 text-slate-500">
            Or connect with social media
          </p>

          <div className="mt-6 space-y-3.5">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="relative flex h-12 w-full items-center justify-center rounded-xl bg-[#5383ec] text-sm font-semibold leading-none text-white"
            >
              <img
                src={GoogleIcon}
                alt=""
                className="absolute left-6 h-4.5 w-4.5"
              />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="relative flex h-12 w-full items-center justify-center rounded-xl bg-[#4a66ac] text-sm font-semibold leading-none text-white"
            >
              <img
                src={FacebookIcon}
                alt=""
                className="absolute left-7 h-4.5 w-4.5"
              />
              Continue with Facebook
            </button>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-[#c8d1d2]" />
      </section>
    </main>
  );
};

export default SignIn;
