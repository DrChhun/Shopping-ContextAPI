import { IStore } from "@/pages/api/interface";
import { Card } from ".";
import { AppContext } from "@/pages";
import { useContext } from "react";

interface Props {
  data: IStore[];
}

export const CardList: React.FC<Props> = ({ data }) => {
  console.log("cardlist Child");
  const { cate } = useContext(AppContext);
  return (
    <div className="cursor-pointer container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-8 md:py-16">
      {data
        ?.filter((x) => {
          return cate === "all" ? x : x.category === cate;
        })
        .map((x: any) => (
          <Card key={x.name} {...x} />
        ))}
    </div>
  );
};
