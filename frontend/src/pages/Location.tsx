import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import BackArrow from "../assets/back arrow.png";
import DropDownArrow from "../assets/DropDownArrow.png";
import MapImage from "../assets/Map.png";

const Location = () => {
  const navigate = useNavigate();
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!zone || !area) {
      setError("Select your zone and area.");
      return;
    }

    navigate("/login");
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[linear-gradient(115deg,#fbfaf6_0%,#ffffff_42%,#fdebea_100%)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_9%,rgba(226,251,243,0.86)_0%,rgba(255,255,255,0)_31%),radial-gradient(circle_at_24%_88%,rgba(246,241,255,0.72)_0%,rgba(255,255,255,0)_35%)]" />

        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate("/verification")}
          className="relative ml-[17px] mt-[12px] flex h-[14px] w-[14px] items-center justify-center"
        >
          <img src={BackArrow} alt="" className="h-[10px] w-[6px]" />
        </button>

        <div className="relative mt-[32px] flex justify-center">
          <img
            src={MapImage}
            alt="Map pin"
            className="h-auto w-[132px] select-none"
            draggable={false}
          />
        </div>

        <div className="relative px-[17px] pt-[26px] text-center">
          <h1 className="text-[16px] leading-[20px] font-semibold">
            Select Your Location
          </h1>
          <p className="mx-auto mt-[8px] max-w-[190px] text-[10px] leading-[12px] font-medium text-[#7c7c7c]">
            Switch on your location to stay in tune with what&apos;s happening
            in your area
          </p>
        </div>

        <div className="relative mt-[62px] px-[17px]">
          <div>
            <label
              htmlFor="zone"
              className="block text-left text-[10px] leading-[12px] font-medium text-[#7c7c7c]"
            >
              Your Zone
            </label>
            <div className="relative mt-[12px] flex h-[19px] items-center">
              <select
                id="zone"
                value={zone}
                onChange={(event) => {
                  setZone(event.target.value);
                  setError("");
                }}
                className="h-full w-full appearance-none border-0 bg-transparent p-0 text-[11px] leading-none font-medium text-[#181725] outline-none"
              >
                <option value="Banasree">Banasree</option>
                <option value="Gulshan">Gulshan</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Uttara">Uttara</option>
              </select>
              <img
                src={DropDownArrow}
                alt=""
                className="pointer-events-none absolute right-0 h-[5px] w-[8px]"
              />
            </div>
            <div className="mt-[9px] h-px w-full bg-[#e2e2e2]" />
          </div>

          <div className="mt-[22px]">
            <label
              htmlFor="area"
              className="block text-left text-[10px] leading-[12px] font-medium text-[#7c7c7c]"
            >
              Your Area
            </label>
            <div className="relative mt-[12px] flex h-[19px] items-center">
              <select
                id="area"
                value={area}
                onChange={(event) => {
                  setArea(event.target.value);
                  setError("");
                }}
                required
                aria-invalid={Boolean(error)}
                aria-describedby={error ? "location-error" : undefined}
                className="h-full w-full appearance-none border-0 bg-transparent p-0 text-[11px] leading-none font-medium text-[#181725] outline-none invalid:text-[#b1b1b1]"
              >
                <option value="" disabled>
                  Types of your area
                </option>
                <option value="Block A">Block A</option>
                <option value="Block B">Block B</option>
                <option value="Block C">Block C</option>
              </select>
              <img
                src={DropDownArrow}
                alt=""
                className="pointer-events-none absolute right-0 h-[5px] w-[8px]"
              />
            </div>
            <div className="mt-[9px] h-px w-full bg-[#e2e2e2]" />
            {error && (
              <p
                id="location-error"
                className="mt-[7px] text-[10px] leading-[12px] font-medium text-red-500"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-[23px] flex h-[39px] w-full items-center justify-center rounded-[9px] bg-[#53b175] text-[11px] leading-none font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </main>
  );
};

export default Location;
