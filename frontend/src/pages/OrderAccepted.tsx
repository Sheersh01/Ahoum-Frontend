import { Link } from "react-router";

const OrderAccepted = () => {
  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="mx-auto flex h-screen w-full max-w-[430px] flex-col items-center justify-center px-6">
        <div className="mb-8 flex h-[160px] w-[160px] items-center justify-center rounded-full bg-green-50">
          <svg
            width="110"
            height="110"
            viewBox="0 0 110 110"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="55" cy="55" r="54" fill="#53B175" />
            <path
              d="M38 56L50 68L74 44"
              stroke="white"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="mb-3 text-center text-[20px] font-semibold">
          Your Order has been accepted
        </h1>
        <p className="mb-8 max-w-[320px] text-center text-[13px] text-[#7c7c7c]">
          Your items has been placed and is on its way to being processed
        </p>

        <Link
          to="/track-order"
          className="mb-4 w-full max-w-[360px] rounded-[12px] bg-[#53b175] py-3 text-center text-white font-semibold"
        >
          Track Order
        </Link>

        <Link to="/home" className="text-center text-[14px] text-[#181725]">
          Back to home
        </Link>
      </section>
    </main>
  );
};

export default OrderAccepted;
