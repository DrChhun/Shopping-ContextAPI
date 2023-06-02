import { IStore } from "@/pages/api/interface";
import { Card } from ".";
import { AppContext } from "@/pages";
import { useContext } from "react";

interface Props {
  data: IStore[];
}

export const CardList: React.FC<Props> = ({ data }) => {
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
        .map((x: any) => (
          <Card key={x.name} {...x} />
        ))}
    </div>
  );
};
