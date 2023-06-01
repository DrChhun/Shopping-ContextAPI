import { AppContext } from "@/pages";
import { useContext } from "react";

const data = [
  {
    id: 1,
    name: "all",
  },
  {
    id: 2,
    name: "men's clothing",
  },
  {
    id: 3,
    name: "jewelery",
  },
  {
    id: 4,
    name: "electronics",
  },
  {
    id: 5,
    name: "women's clothing",
  },
];

export const CategoryBar: React.FC = () => {
  console.log("category bar");
  const { setCate } = useContext(AppContext);
  return (
    <div className="container pt-16 flex items-center overflow-x-auto">
      <h2 className="mr-8">Choose category : </h2>
      <div className="flex gap-4 cursor-pointer">
        {data.map((x) => (
          <div
            onClick={() => setCate(x.name)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 duration-300 rounded-full"
            key={x.id}
          >
            <p>{x.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
