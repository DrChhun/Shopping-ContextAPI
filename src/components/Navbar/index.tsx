import { CheckoutContext } from "@/context/checkout-context";
import { AppContext } from "@/pages";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useContext } from "react";

export const Navbar = () => {
  const { setHandleSearch } = useContext(AppContext);
  const { a } = useContext(CheckoutContext);
  return (
    <div className="flex justify-between container py-8 items-center">
      <h2 className="font-semibold text-2xl">SHOP {a}</h2>
      <div className="flex items-center gap-4 md:gap-6">
        <input
          onChange={(e) => setHandleSearch(e.target.value)}
          placeholder={`Search`}
          type="text"
          className="border-2 focus:outline-black border-gray-200 bg-gray-100 rounded-md py-2 px-4"
        />
        <Link href="/checkout">
          <ShoppingCartIcon className="h-5 md:h-6" />
        </Link>
      </div>
    </div>
  );
};
