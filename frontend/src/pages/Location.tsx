import type { FormEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import MapImage from "../assets/Map.png";
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";

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
    <main className="min-h-screen w-full bg-white font-sans text-slate-900">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="mx-auto flex min-h-screen w-full flex-col overflow-hidden px-4 pb-10 pt-3 sm:px-6 lg:px-8"
      >
        <button
          type="button"
          aria-label="Go back"
          onClick={() => navigate("/verification")}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-transparent"
        >
          <IoIosArrowBack aria-hidden="true" className="h-5 w-5" />
        </button>

        <div className="mt-8 flex justify-center">
          <img
            src={MapImage}
            alt="Map pin"
            className="h-auto w-32 select-none sm:w-36"
            draggable={false}
          />
        </div>

        <header className="pt-6 text-center">
          <h1 className="text-base font-semibold leading-5 sm:text-lg">
            Select Your Location
          </h1>
          <p className="mx-auto mt-2 max-w-48 text-xs font-medium leading-4 text-slate-500 sm:text-sm">
            Switch on your location to stay in tune with what&apos;s happening
            in your area
          </p>
        </header>

        <section className="mt-14 space-y-5 sm:mt-16">
          <div>
            <label
              htmlFor="zone"
              className="block text-left text-xs font-medium leading-4 text-slate-500"
            >
              Your Zone
            </label>
            <div className="relative mt-3 flex h-5 items-center">
              <select
                id="zone"
                value={zone}
                onChange={(event) => {
                  setZone(event.target.value);
                  setError("");
                }}
                className="h-full w-full appearance-none border-0 bg-transparent p-0 text-sm font-medium leading-none text-slate-900 outline-none"
              >
                <option value="Banasree">Banasree</option>
                <option value="Gulshan">Gulshan</option>
                <option value="Dhanmondi">Dhanmondi</option>
                <option value="Uttara">Uttara</option>
              </select>
              <IoIosArrowDown
                aria-hidden="true"
                className="pointer-events-none absolute right-0 h-1.5 w-2"
              />
            </div>
            <div className="mt-2 h-px w-full bg-slate-200" />
          </div>

          <div>
            <label
              htmlFor="area"
              className="block text-left text-xs font-medium leading-4 text-slate-500"
            >
              Your Area
            </label>
            <div className="relative mt-3 flex h-5 items-center">
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
                className="h-full w-full appearance-none border-0 bg-transparent p-0 text-sm font-medium leading-none text-slate-900 outline-none invalid:text-slate-400"
              >
                <option value="" disabled>
                  Types of your area
                </option>
                <option value="Block A">Block A</option>
                <option value="Block B">Block B</option>
                <option value="Block C">Block C</option>
              </select>
              <IoIosArrowDown
                aria-hidden="true"
                className="pointer-events-none absolute right-0 h-1.5 w-2"
              />
            </div>
            <div className="mt-2 h-px w-full bg-slate-200" />
            {error && (
              <p
                id="location-error"
                className="mt-2 text-xs font-medium leading-4 text-red-500"
              >
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="flex h-10 w-full items-center justify-center rounded-xl bg-[#53B175] text-sm font-semibold leading-none text-white"
          >
            Submit
          </button>
        </section>
      </form>
    </main>
  );
};

export default Location;
