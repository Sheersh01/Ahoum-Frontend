import { Link } from "react-router";
import PlusIcon from "../assets/Plus.png";
import { useCartStore } from "../store/cartStore";

export type Product = {
  name: string;
  meta: string;
  price: string;
  image: string;
  categories: string[];
  brand: string;
};

const ProductCard = ({ product }: { product: Product }) => (
  <article className="flex h-[220px] w-full flex-col rounded-[18px] border border-[#f0f0f0] bg-white p-[12px]">
    <div className="flex flex-1 flex-col">
      <Link
        to="/product-detail"
        state={{
          image: product.image,
          name: product.name,
          meta: product.meta,
          price: product.price,
        }}
        className="flex h-[92px] items-center justify-center"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-[86px] w-auto max-w-full object-contain"
        />
      </Link>
      <h3 className="mt-[12px] text-[14px] leading-[17px] font-semibold text-[#181725]">
        {product.name}
      </h3>
      <p className="mt-[4px] text-[12px] leading-[14px] text-[#7c7c7c]">
        {product.meta}
      </p>

      <div className="mt-auto flex items-end justify-between gap-3 pt-4">
        <p className="text-[16px] font-bold text-[#181725]">{product.price}</p>
        <button
          type="button"
          aria-label={`Add ${product.name}`}
          onClick={() =>
            useCartStore.getState().addItem({
              id: product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
              name: product.name,
              meta: product.meta,
              price: Number(product.price.replace(/[^0-9.]/g, "")),
              image: product.image,
            })
          }
          className="flex h-[45px] w-[45px] items-center justify-center rounded-[16px] bg-[#53b175]"
        >
          <img
            src={PlusIcon}
            alt=""
            className="h-[16px] w-[16px] brightness-0 invert"
          />
        </button>
      </div>
    </div>
  </article>
);

export default ProductCard;
