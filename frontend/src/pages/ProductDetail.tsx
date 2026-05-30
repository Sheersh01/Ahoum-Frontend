import { useState } from "react";
import { useNavigate } from "react-router";
import AppleImage from "../assets/apple.png";
import BackArrow from "../assets/back arrow.png";
import DropDownArrow from "../assets/DropDownArrow.png";
import FrontArrow from "../assets/Front-Arrow.png";
import LikeIcon from "../assets/like.png";
import MinusIcon from "../assets/Minus.png";
import PlusIcon from "../assets/Plus.png";
import RatingImage from "../assets/rating.png";
import ShareIcon from "../assets/share.png";

const ProductDetail = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <section className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-white">
        <div className="relative h-[162px] rounded-b-[22px] bg-[#f2f3f2]">
          <button
            type="button"
            aria-label="Go back"
            onClick={() => navigate(-1)}
            className="absolute left-[17px] top-[13px] flex h-[16px] w-[16px] items-center justify-center"
          >
            <img src={BackArrow} alt="" className="h-[10px] w-[6px]" />
          </button>

          <button
            type="button"
            aria-label="Share product"
            className="absolute right-[17px] top-[10px] flex h-[18px] w-[18px] items-center justify-center"
          >
            <img src={ShareIcon} alt="" className="h-[14px] w-[14px]" />
          </button>

          <img
            src={AppleImage}
            alt="Natural red apple"
            className="absolute left-1/2 top-[31px] h-auto w-[173px] -translate-x-1/2 select-none"
            draggable={false}
          />

          <div className="absolute bottom-[11px] left-1/2 flex -translate-x-1/2 items-center gap-[3px]">
            <span className="h-[2px] w-[8px] rounded-full bg-[#53b175]" />
            <span className="h-[2px] w-[2px] rounded-full bg-[#d6d6d6]" />
            <span className="h-[2px] w-[2px] rounded-full bg-[#d6d6d6]" />
          </div>
        </div>

        <div className="px-[17px] pt-[13px]">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-[14px] leading-[17px] font-semibold">
                Naturel Red Apple
              </h1>
              <p className="mt-[2px] text-[9px] leading-[11px] font-medium text-[#7c7c7c]">
                1kg, Price
              </p>
            </div>

            <button
              type="button"
              aria-label="Add to favorites"
              aria-pressed={isLiked}
              onClick={() => setIsLiked((value) => !value)}
              className="mt-[3px] flex h-[19px] w-[19px] items-center justify-center"
            >
              <img
                src={LikeIcon}
                alt=""
                className={`h-[15px] w-[16px] ${isLiked ? "opacity-100" : "opacity-75"}`}
              />
            </button>
          </div>

          <div className="mt-[18px] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={decreaseQuantity}
                className="flex h-[23px] w-[20px] items-center justify-center"
              >
                <img src={MinusIcon} alt="" className="h-[2px] w-[9px]" />
              </button>

              <span className="flex h-[24px] w-[24px] items-center justify-center rounded-[9px] border border-[#e2e2e2] text-[10px] leading-none font-semibold">
                {quantity}
              </span>

              <button
                type="button"
                aria-label="Increase quantity"
                onClick={increaseQuantity}
                className="flex h-[23px] w-[20px] items-center justify-center"
              >
                <img src={PlusIcon} alt="" className="h-[10px] w-[10px]" />
              </button>
            </div>

            <p className="text-[14px] leading-none font-bold">$4.99</p>
          </div>

          <div className="mt-[17px] h-px w-full bg-[#e2e2e2]" />

          <div className="py-[11px]">
            <button
              type="button"
              onClick={() => setIsDetailOpen((value) => !value)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-[10px] leading-[12px] font-semibold">
                Product Detail
              </span>
              <img
                src={DropDownArrow}
                alt=""
                className={`h-[5px] w-[8px] transition-transform ${
                  isDetailOpen ? "" : "-rotate-90"
                }`}
              />
            </button>

            {isDetailOpen && (
              <p className="mt-[7px] max-w-[205px] text-[7px] leading-[11px] font-medium text-[#7c7c7c]">
                Apples Are Nutritious. Apples May Be Good For Weight Loss.
                Apples May Be Good For Your Heart. As Part Of A Healthful And
                Varied Diet.
              </p>
            )}
          </div>

          <div className="h-px w-full bg-[#e2e2e2]" />

          <button
            type="button"
            className="flex h-[39px] w-full items-center justify-between"
          >
            <span className="text-[10px] leading-none font-semibold">
              Nutritions
            </span>
            <span className="ml-auto mr-[11px] rounded-[3px] bg-[#ebebeb] px-[5px] py-[2px] text-[6px] leading-none font-medium text-[#7c7c7c]">
              100gr
            </span>
            <img
              src={FrontArrow}
              alt=""
              className="h-[10px] w-[6px] brightness-0"
            />
          </button>

          <div className="h-px w-full bg-[#e2e2e2]" />

          <button
            type="button"
            className="flex h-[39px] w-full items-center justify-between"
          >
            <span className="text-[10px] leading-none font-semibold">
              Review
            </span>
            <img
              src={RatingImage}
              alt="5 star rating"
              className="ml-auto mr-[12px] h-[9px] w-[54px]"
            />
            <img
              src={FrontArrow}
              alt=""
              className="h-[10px] w-[6px] brightness-0"
            />
          </button>

          <button
            type="button"
            className="mt-[7px] flex h-[40px] w-full items-center justify-center rounded-[10px] bg-[#53b175] text-[11px] leading-none font-semibold text-white"
          >
            Add To Basket
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
