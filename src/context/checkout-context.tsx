import { createContext, useState } from "react";

interface Props {
  children: any;
}

export const CheckoutContext = createContext<any>("");

export const CheckoutContextProvider = ({ children }: Props) => {
  const [itemsCart, setItemsCart] = useState<any>([
    { name: "null", price: 0, iamge: "null", size: "null" },
  ]);
  const [handleItems, setHandleItems] = useState<number>(1);

  const addToCart = (
    name: string,
    price: number,
    image: string,
    size: string,
    description: string,
    items: number
  ) => {
    setItemsCart((prev: any) => [
      ...prev,
      {
        name: name,
        price: price * items,
        image: image,
        size: size,
        description: description,
      },
    ]);
  };

  return (
    <CheckoutContext.Provider
      value={{
        setItemsCart,
        addToCart,
        itemsCart,
        setHandleItems,
        handleItems,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
};
