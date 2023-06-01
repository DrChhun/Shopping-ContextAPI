import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AppContext } from "@/pages";

export const Navbar = () => {
  const { cate } = useContext(AppContext);
  return (
    <div className="flex justify-between container py-8 items-center">
      <h2 className="font-semibold text-2xl">SHOP {cate}</h2>
      <div className="flex items-center gap-4 md:gap-6">
        <input
          placeholder={`Search`}
          type="text"
          className="border-2 focus:outline-black border-gray-200 bg-gray-100 rounded-md py-2 px-4"
        />
        <ShoppingCartIcon className="h-5 md:h-6" />
      </div>
    </div>
  );
};
