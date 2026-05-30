import { useNavigate } from "react-router";
import FacebookIcon from "../assets/facebook.png";
import GlobeIcon from "../assets/globe.png";
import GoogleIcon from "../assets/google.png";
import SignInHero from "../assets/Sign In.png";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="relative mx-auto min-h-screen w-full  overflow-hidden bg-white">
        <img
          src={SignInHero}
          alt="Fresh groceries"
          className="block w-full select-none object-contain"
          draggable={false}
        />

        <div className="px-5 pt-2">
          <h1 className="max-w-[180px] text-[20px] leading-[25px] font-semibold tracking-normal">
            Get your groceries with nectar
          </h1>

          <div className="mt-[23px] flex h-[18px] items-center gap-[14px] pl-2">
            <img src={GlobeIcon} alt="" className="h-[13px] w-[13px]" />
            <span className="text-[13px] leading-none font-medium text-[#030303]">
              +880
            </span>
          </div>

          <div className="mt-[15px] h-px w-full bg-[#e2e2e2]" />

          <button
            type="button"
            onClick={() => navigate("/number")}
            className="mt-[23px] flex h-[48px] w-full items-center justify-center rounded-xl bg-[#53b175] text-[13px] leading-none font-semibold text-white"
          >
            Continue
          </button>

          <p className="mt-[20px] text-center text-[10px] leading-3 font-medium text-[#828282]">
            Or connect with social media
          </p>

          <div className="mt-[22px] space-y-[14px]">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="relative flex h-[48px] w-full items-center justify-center rounded-xl bg-[#5383ec] text-[13px] leading-none font-semibold text-white"
            >
              <img
                src={GoogleIcon}
                alt=""
                className="absolute left-[27px] h-[18px] w-[18px]"
              />
              Continue with Google
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              className="relative flex h-[48px] w-full items-center justify-center rounded-xl bg-[#4a66ac] text-[13px] leading-none font-semibold text-white"
            >
              <img
                src={FacebookIcon}
                alt=""
                className="absolute left-[29px] h-[18px] w-[18px]"
              />
              Continue with Facebook
            </button>
          </div>
        </div>

        <div className="absolute bottom-[9px] left-1/2 h-[4px] w-[96px] -translate-x-1/2 rounded-full bg-[#c8d1d2]" />
      </section>
    </main>
  );
};

export default SignIn;
