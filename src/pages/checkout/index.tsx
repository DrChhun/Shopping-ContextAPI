import { CheckoutItem } from "@/components/Checkout";
import { CheckoutPayment } from "@/components/Checkout/CheckoutPayment";
import { CheckoutContext } from "@/context/checkout-context";
import Link from "next/link";
import { useContext } from "react";

interface Props {
  name: string;
  price: number;
  image: string;
  size: string;
}

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
      <div className="flex justify-between gap-8">
        <div className="w-2/3">
          <h1 className="text-2xl font-semibold mb-8">Checkout</h1>
          <CheckoutItem data={...itemsCart} />
        </div>

        <div className="w-1/3">
          <h2 className="text-2xl font-semibold mb-8">Summary</h2>
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
