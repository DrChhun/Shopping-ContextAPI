import { IStore } from "@/pages/api/interface";
import { Card } from ".";
import { AppContext } from "@/pages";
import { useContext } from "react";
import Link from "next/link";

export const CardList: React.FC = () => {
  console.log("cardlist Child");
  const { cate, currentData, handleSearch } = useContext(AppContext);
  return (
    <div className="cursor-pointer container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 md:py-16">
      {currentData
        ?.filter((x: IStore) =>
          x.title.toLowerCase().includes(handleSearch.toLowerCase())
        )
        .filter((x: IStore) => {
          return cate === "all" ? x : x.category === cate;
        })
        .map((x: any, index: any) => (
          <Link href={`/home/${x.id}`} key={index}>
            <Card {...x} />
          </Link>
        ))}
    </div>
  );
};
