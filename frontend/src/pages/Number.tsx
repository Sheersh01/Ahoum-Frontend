import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import FlagIcon from "../assets/Flag.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Number = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("+880 ");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/verification");
  };

  return (
    <main className="w-full bg-white font-sans text-[#181725]">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="relative mx-auto min-h-screen w-full overflow-hidden"
      >
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate("/signin")}
          className="relative ml-[19px] mt-[10px] flex h-[14px] w-[14px] items-center justify-center pt-8"
        >
          <IoIosArrowBack aria-hidden="true" className="h-4 w-4" />
        </button>

        <div className="relative px-[20px] pt-[38px]">
          <h1 className="text-[20px] leading-[22px] font-semibold tracking-normal">
            Enter your mobile number
          </h1>

          <div className="mt-[21px]">
            <label
              htmlFor="mobile-number"
              className="block text-[12px] leading-[12px] font-medium text-[#7c7c7c]"
            >
              Mobile Number
            </label>

            <div className="mt-[11px] flex h-[18px] items-center gap-[11px]">
              <img
                src={FlagIcon}
                alt="Bangladesh"
                className="h-[20px] w-[25px] shrink-0"
              />

              <input
                id="mobile-number"
                type="tel"
                inputMode="tel"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                className="h-[18px] min-w-0 flex-1 border-0 bg-transparent p-0 text-[12px] leading-[18px] font-medium text-[#181725] outline-none"
              />
            </div>

            <div className="mt-[13px] h-px w-full bg-[#e2e2e2]" />
          </div>
        </div>

        <button
          type="submit"
          aria-label="Continue"
          className="absolute right-[20px] bottom-[14px] flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#53b175]"
        >
          <IoIosArrowForward aria-hidden="true" className="h-[12px] w-[7px]" />
        </button>
      </form>
    </main>
  );
};

export default Number;
