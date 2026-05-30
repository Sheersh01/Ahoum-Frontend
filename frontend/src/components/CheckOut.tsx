import { useEffect, useState } from "react";
import FrontArrow from "../assets/Front-Arrow.png";

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

  const panelClass = `relative z-[101] mx-auto w-full max-w-[430px] bg-white p-6 shadow-lg transition-transform duration-300 mb-0 ${entered ? "translate-y-0" : "translate-y-full"}`;

  const closeWithAnimation = () => {
    setEntered(false);
    setTimeout(onClose, 300);
  };

  const placeOrder = () => {
    setEntered(false);
    setTimeout(() => {
      onPlaceOrder?.();
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center">
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity ${entered ? "opacity-100" : "opacity-0"}`}
        onClick={closeWithAnimation}
      />

      <div
        className={`${panelClass}`}
        style={{ transform: entered ? "translateY(0)" : "translateY(100%)" }}
      >
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-[18px] font-semibold">Checkout</h2>
          <button
            type="button"
            onClick={closeWithAnimation}
            aria-label="Close"
            className="text-[20px]"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-3">
            <div>
              <div className="text-[13px] text-[#7c7c7c]">Delivery</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-medium">Select Method</span>
              <img src={FrontArrow} alt="" className="h-[14px] w-[14px]" />
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-3">
            <div>
              <div className="text-[13px] text-[#7c7c7c]">Payment</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-[18px] w-[26px] rounded-sm bg-gradient-to-r from-blue-500 to-red-400" />
              <img src={FrontArrow} alt="" className="h-[14px] w-[14px]" />
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-3">
            <div>
              <div className="text-[13px] text-[#7c7c7c]">Promo Code</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[13px] font-medium">Pick discount</span>
              <img src={FrontArrow} alt="" className="h-[14px] w-[14px]" />
            </div>
          </div>

          <div className="flex items-center justify-between border-b border-[#f0f0f0] pb-3">
            <div>
              <div className="text-[13px] text-[#7c7c7c]">Total Cost</div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[14px] font-semibold">{totalCost}</span>
              <img src={FrontArrow} alt="" className="h-[14px] w-[14px]" />
            </div>
          </div>

          <p className="mt-2 text-[12px] text-[#7c7c7c]">
            By placing an order you agree to our Terms And Conditions
          </p>
        </div>

        <div className="mt-6">
          <button
            type="button"
            onClick={placeOrder}
            className="w-full rounded-[10px] bg-[#53b175] py-3 text-white font-semibold"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
