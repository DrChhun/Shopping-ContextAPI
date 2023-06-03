import { createContext, useState } from "react";

interface Props {
  children: any;
}

export const CheckoutContext = createContext<any>("");

export const CheckoutContextProvider = ({ children }: Props) => {
  const [itemsCart, setItemsCart] = useState<any>([
    { name: "null", price: 0, iamge: "null", size: "null" },
  ]);

  const addToCart = (
    name: string,
    price: number,
    image: string,
    size: string
  ) => {
    setItemsCart((prev: any) => [
      ...prev,
      { name: name, price: price, image: image, size: size },
    ]);
  };

  const [size, setSize] = useState<string>("");
  const [totalPrice, setTotalPrice] = useState<number>();

  return (
    <CheckoutContext.Provider value={{ setItemsCart, addToCart, itemsCart }}>
      {children}
    </CheckoutContext.Provider>
  );
};
