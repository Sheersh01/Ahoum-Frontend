import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import AppleImage from "../assets/apple.png";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import MinusIcon from "../assets/Minus.png";
import PlusIcon from "../assets/Plus.png";
import { CiStar } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { useCartStore } from "../store/cartStore";
import { useFavoritesStore } from "../store/favoritesStore";
import HomeNav from "../components/HomeNav";

type ProductDetailState = {
  image?: string;
  name?: string;
  meta?: string;
  price?: string;
};

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productState = location.state as ProductDetailState | null;
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const [quantity, setQuantity] = useState(1);
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  const decreaseQuantity = () => {
    setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
  };

  const increaseQuantity = () => {
    setQuantity((currentQuantity) => currentQuantity + 1);
  };

  const productImage = productState?.image ?? AppleImage;
  const productName = productState?.name ?? "Naturel Red Apple";
  const productMeta = productState?.meta ?? "1kg, Price";
  const productPrice = productState?.price ?? "$4.99";
  const favoriteItem = {
    id: productName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    name: productName,
    meta: productMeta,
    price: productPrice,
    image: productImage,
  };
  const liked = useFavoritesStore((state) => state.isFavorite(favoriteItem.id));

  return (
    <main className="min-h-screen w-full bg-white font-sans text-[#181725]">
      <div className="hidden lg:block">
        <HomeNav />
      </div>
      <section className="relative mx-auto min-h-screen w-full overflow-hidden bg-white">
        <div className="flex flex-col lg:flex-row">
          <div className="relative h-[40vh] lg:h-auto lg:w-1/2 rounded-b-[22px] lg:rounded-bl-[22px] bg-[#f2f3f2] overflow-hidden">
            <div className="flex w-full items-center justify-between px-4 pt-4">
              <button
                type="button"
                aria-label="Go back"
                onClick={() => navigate(-1)}
                className=" flex h-[16px] w-[16px] items-center justify-center"
              >
                <IoIosArrowBack aria-hidden="true" className="h-4 w-4" />
              </button>

              <button
                type="button"
                aria-label="Share product"
                className=" flex h-[18px] w-[18px] items-center justify-center"
              >
                <RiShare2Line
                  aria-hidden="true"
                  className="h-5 w-5 text-[#181725]"
                />
              </button>
            </div>

            <div className="w-full h-full flex items-center justify-center">
              <img
                src={productImage}
                alt={productName}
                className="w-full h-full object-contain select-none"
                draggable={false}
              />
            </div>

            <div className="absolute bottom-[11px] left-1/2 flex -translate-x-1/2 items-center gap-[3px] lg:hidden">
              <span className="h-[2px] w-[8px] rounded-full bg-[#53b175]" />
              <span className="h-[2px] w-[2px] rounded-full bg-[#d6d6d6]" />
              <span className="h-[2px] w-[2px] rounded-full bg-[#d6d6d6]" />
            </div>
          </div>

          <div className="px-[17px] pt-[13px] lg:w-1/2 lg:py-8 lg:px-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-sm md:text-base lg:text-lg leading-4 md:leading-5 font-semibold">
                  {productName}
                </h1>
                <p className="mt-1 text-xs md:text-sm leading-4 font-medium text-[#7c7c7c]">
                  {productMeta}
                </p>
              </div>

              <button
                type="button"
                aria-label="Add to favorites"
                aria-pressed={liked}
                onClick={() => toggleFavorite(favoriteItem)}
                className="mt-[3px] flex h-[19px] w-[19px] items-center justify-center"
              >
                {liked ? (
                  <FaHeart
                    aria-hidden="true"
                    className="h-[15px] w-[16px] text-red-500"
                  />
                ) : (
                  <FaRegHeart
                    aria-hidden="true"
                    className="h-[15px] w-[16px] text-slate-700 opacity-75"
                  />
                )}
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

                <span className="flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-[9px] border border-[#e2e2e2] text-xs md:text-sm leading-none font-semibold">
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

              <p className="text-[14px] leading-none font-bold">
                {productPrice}
              </p>
            </div>

            <div className="mt-[17px] h-px w-full bg-[#e2e2e2]" />

            <div className="py-3 md:py-4">
              <button
                type="button"
                onClick={() => setIsDetailOpen((value) => !value)}
                className="flex w-full items-center justify-between text-left"
              >
                <span className="text-xs md:text-sm leading-none font-semibold">
                  Product Detail
                </span>
                <IoIosArrowDown
                  aria-hidden="true"
                  className={`h-3 w-3 md:h-4 md:w-4 transition-transform ${isDetailOpen ? "" : "-rotate-90"}`}
                />
              </button>

              {isDetailOpen && (
                <p className="mt-2  text-xs md:text-sm leading-5 font-medium text-[#7c7c7c]">
                  Apples Are Nutritious. Apples May Be Good For Weight Loss.
                  Apples May Be Good For Your Heart. As Part Of A Healthful And
                  Varied Diet.
                </p>
              )}
            </div>

            <div className="h-px w-full bg-[#e2e2e2]" />

            <button
              type="button"
              className="flex h-10 md:h-11 w-full items-center justify-between"
            >
              <span className="text-sm md:text-base leading-none font-semibold">
                Nutritions
              </span>
              <span className="ml-auto mr-3 rounded-[3px] bg-[#ebebeb] px-2 py-0.5 text-xs md:text-sm leading-none font-medium text-[#7c7c7c]">
                100gr
              </span>
              <IoIosArrowForward
                aria-hidden="true"
                className="h-3 md:h-4 w-2 md:w-3 brightness-0"
              />
            </button>

            <div className="h-px w-full bg-[#e2e2e2]" />

            <button
              type="button"
              className="flex h-10 md:h-11 w-full items-center justify-between"
            >
              <span className="text-sm md:text-base leading-none font-semibold">
                Review
              </span>
              <div className="ml-auto mr-3 flex items-center gap-1">
                <CiStar
                  aria-hidden="true"
                  className="text-yellow-400 h-3 md:h-4 w-3 md:w-4"
                />
                <CiStar
                  aria-hidden="true"
                  className="text-yellow-400 h-3 md:h-4 w-3 md:w-4"
                />
                <CiStar
                  aria-hidden="true"
                  className="text-yellow-400 h-3 md:h-4 w-3 md:w-4"
                />
                <CiStar
                  aria-hidden="true"
                  className="text-yellow-400 h-3 md:h-4 w-3 md:w-4"
                />
                <CiStar
                  aria-hidden="true"
                  className="text-yellow-400 h-3 md:h-4 w-3 md:w-4"
                />
              </div>
              <IoIosArrowForward
                aria-hidden="true"
                className="h-3 md:h-4 w-2 md:w-3 brightness-0"
              />
            </button>

            <button
              type="button"
              onClick={() =>
                addItem(
                  {
                    id: productName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
                    name: productName,
                    meta: productMeta,
                    price: Number(productPrice.replace(/[^0-9.]/g, "")),
                    image: productImage,
                  },
                  quantity,
                )
              }
              className="mt-3 md:mt-4 flex h-10 md:h-12 w-full items-center justify-center rounded-[10px] bg-[#53B175] text-sm md:text-base leading-none font-semibold text-white"
            >
              Add To Basket
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
