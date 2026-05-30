import type { ChangeEvent, FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import BackArrow from "../assets/back arrow.png";
import FrontArrow from "../assets/Front-Arrow.png";

const Verification = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value.replace(/\D/g, "").slice(0, 4));
    setError("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (code.length !== 4) {
      setError("Enter the 4-digit code.");
      return;
    }

    navigate("/location");
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[linear-gradient(115deg,#fbfaf6_0%,#ffffff_42%,#fdebea_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_8%,rgba(226,251,243,0.86)_0%,rgba(255,255,255,0)_31%),radial-gradient(circle_at_23%_90%,rgba(246,241,255,0.72)_0%,rgba(255,255,255,0)_35%)]" />

        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate("/number")}
          className="relative ml-[24px] mt-[14px] flex h-[14px] w-[14px] items-center justify-center"
        >
          <img src={BackArrow} alt="" className="h-[10px] w-[6px]" />
        </button>

        <div className="relative px-[25px] pt-[35px]">
          <h1 className="text-[17px] leading-[22px] font-semibold tracking-normal">
            Enter your 4-digit code
          </h1>

          <div className="mt-[20px]">
            <label
              htmlFor="verification-code"
              className="block text-[10px] leading-[12px] font-medium text-[#7c7c7c]"
            >
              Code
            </label>
            <input
              id="verification-code"
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={code}
              onChange={handleCodeChange}
              placeholder="- - - -"
              aria-label="4 digit verification code"
              aria-invalid={Boolean(error)}
              aria-describedby={error ? "verification-code-error" : undefined}
              className="mt-[11px] h-[18px] w-full border-0 bg-transparent p-0 text-[18px] leading-none font-medium tracking-[2px] text-[#181725] outline-none"
            />
            <div className="mt-[11px] h-px w-full bg-[#e2e2e2]" />
            {error && (
              <p
                id="verification-code-error"
                className="mt-[7px] text-[10px] leading-[12px] font-medium text-red-500"
              >
                {error}
              </p>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            setCode("");
            setError("");
          }}
          className="absolute bottom-[18px] left-[25px] text-[11px] leading-none font-medium text-[#53b175]"
        >
          Resend Code
        </button>

        <button
          type="submit"
          aria-label="Continue"
          className="absolute right-[15px] bottom-[12px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#53b175]"
        >
          <img src={FrontArrow} alt="" className="h-[12px] w-[7px]" />
        </button>
      </form>
    </main>
  );
};

export default Verification;
