import { CheckoutContext } from "@/context/checkout-context";
import Image from "next/image";
import { useContext } from "react";

export const CheckoutItem: React.FC<any> = ({ data }) => {
  const { handleItems } = useContext(CheckoutContext);
  return (
    <div className="">
      {data.map((x: any) => (
        <div
          key={x.name}
          className={`flex gap-8 py-8 ${x.name === "null" && "hidden"}`}
        >
          <div
            className={`w-64 h-64 object-cover ${
              x.name === "null" && "hidden"
            }`}
          >
            <Image
              height={0}
              width={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className={`object-cover`}
              src={x.image}
              alt=""
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibiold">{x.name}</h2>
            <div className="line-clamp-4">
              <p className="max-w-xl text-gray-600">{x.description}</p>
            </div>
            <p>{x.size || "Please choose item size ⚠️"} </p>
            <p>x {handleItems}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
