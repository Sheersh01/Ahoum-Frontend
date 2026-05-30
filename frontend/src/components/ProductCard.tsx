import { Link } from "react-router";
import PlusIcon from "../assets/Plus.png";
import { useCartStore } from "../store/cartStore";
import type { Product } from "../types";

const ProductCard = ({ product }: { product: Product }) => (
  <article className="flex h-full min-h-[14rem] w-full flex-col rounded-xl border border-slate-100 bg-white p-3 shadow-sm transition-shadow duration-200 hover:shadow-md">
    <Link
      to="/product-detail"
      state={{
        image: product.image,
        name: product.name,
        meta: product.meta,
        price: product.price,
      }}
      className="flex flex-1 flex-col"
      aria-label={`View ${product.name}`}
    >
      <div className="flex min-h-20 items-center justify-center sm:min-h-24">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-20 w-full object-contain sm:max-h-24"
        />
      </div>

      <h3 className="mt-3 text-sm font-semibold leading-4 text-slate-900">
        {product.name}
      </h3>
      <p className="mt-1 text-xs leading-4 text-slate-500">{product.meta}</p>
    </Link>

    <footer className="mt-auto flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
      <p className="text-sm font-bold text-slate-900 sm:text-base">
        {product.price}
      </p>
      <button
        type="button"
        aria-label={`Add ${product.name}`}
        onClick={() =>
          useCartStore.getState().addItem({
            id: product.id,
            name: product.name,
            meta: product.meta,
            price: Number(product.price.replace(/[^0-9.]/g, "")),
            image: product.image,
          })
        }
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#53B175] shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
      >
        <img src={PlusIcon} alt="" className="h-4 w-4 brightness-0 invert" />
      </button>
    </footer>
  </article>
);

export default ProductCard;
