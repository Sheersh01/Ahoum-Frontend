import { Link } from "react-router";

const TrackOrder = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto w-full  p-6">
        <header className="pt-4 text-center">
          <h1 className="text-[18px] font-semibold">Track Order</h1>
        </header>

        <div className="mt-8 text-center">
          <p className="text-[14px] text-[#7c7c7c]">
            Your order is being processed. We'll update the status here.
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link to="/home" className="text-[14px] text-[#53b175]">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TrackOrder;
