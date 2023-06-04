import { CheckoutItem } from "@/components/Checkout";
import { CheckoutPayment } from "@/components/Checkout/CheckoutPayment";
import { CheckoutContext } from "@/context/checkout-context";
import Link from "next/link";
import { useContext } from "react";

const CheckOutPage = () => {
  const { itemsCart } = useContext(CheckoutContext);
  let total: number[] = [];
  {
    itemsCart.map((x: any) => total.push(x.price));
  }
  let sumTotal = total.reduce((a, b) => a + b);

  console.log(itemsCart);
  return (
    <div className="container">
      <Link href="/">
        <p className="py-8 text-2xl font-semibold">🛖 Home</p>
      </Link>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="w-full md:w-2/3">
          <h1 className="text-2xl font-semibold mb-8">Checkout</h1>
          <CheckoutItem data={...itemsCart} />
        </div>

        <div className="md:w-1/3 w-full fixed md:relative p-4 tive bottom-0 md:bottom-auto bg-white md:bg-transparent left-0 md:left-auto">
          <h2 className="text-2xl font-semibold mb-8 hidden md:block">
            Summary
          </h2>
          <CheckoutPayment subtotal={sumTotal} />
          <button className="bg-black text-white py-4 text-lg tracking-wider hover:bg-black/80 duration-300 w-full mt-8">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPage;
