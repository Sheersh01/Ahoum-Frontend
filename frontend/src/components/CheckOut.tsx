import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

type CheckOutProps = {
  visible: boolean;
  onClose: () => void;
  totalCost?: string;
  onPlaceOrder?: () => void;
};

const CheckOut = ({
  visible,
  onClose,
  totalCost = "$0.00",
  onPlaceOrder,
}: CheckOutProps) => {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    if (visible) {
      requestAnimationFrame(() => setEntered(true));
    } else {
      setEntered(false);
    }
  }, [visible]);

  if (!visible && !entered) return null;

  const closeWithAnimation = () => {
    setEntered(false);
    setTimeout(onClose, 300);
  };

  const handlePlaceOrder = () => {
    setEntered(false);

    setTimeout(() => {
      onPlaceOrder?.();
      onClose();
    }, 300);
  };

  const rows = [
    {
      label: "Delivery",
      content: <span className="text-sm font-medium">Select Method</span>,
    },
    {
      label: "Payment",
      content: (
        <div className="flex items-center gap-2">
          <div className="h-4 w-6 rounded-sm bg-linear-to-r from-blue-500 to-red-400" />
        </div>
      ),
    },
    {
      label: "Promo Code",
      content: <span className="text-sm font-medium">Pick discount</span>,
    },
    {
      label: "Total Cost",
      content: <span className="text-base font-semibold">{totalCost}</span>,
    },
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center sm:items-center">
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close checkout"
        onClick={closeWithAnimation}
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal */}
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-title"
        className={`relative z-101 w-full max-w-md bg-white p-6 shadow-lg transition-all duration-300 ${
          entered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
      >
        <header className="mb-5 flex items-center justify-between">
          <h2
            id="checkout-title"
            className="text-lg font-semibold text-gray-900"
          >
            Checkout
          </h2>

          <button
            type="button"
            aria-label="Close checkout"
            onClick={closeWithAnimation}
            className="text-2xl leading-none text-gray-600 hover:text-gray-900"
          >
            ×
          </button>
        </header>

        <div className="space-y-4">
          {rows.map(({ label, content }) => (
            <div
              key={label}
              className="flex items-center justify-between border-b border-gray-100 pb-3"
            >
              <span className="text-sm text-gray-500">{label}</span>

              <div className="flex items-center gap-3">
                {content}
                <IoIosArrowForward aria-hidden="true" className="h-4 w-4" />
              </div>
            </div>
          ))}

          <p className="text-xs leading-relaxed text-gray-500">
            By placing an order, you agree to our Terms and Conditions.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePlaceOrder}
          className="mt-6 w-full rounded-xl bg-[#53B175] py-3 font-semibold text-white transition-opacity hover:opacity-90"
        >
          Place Order
        </button>
      </section>
    </div>
  );
};

export default CheckOut;
