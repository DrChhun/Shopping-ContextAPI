import { Banner } from "@/components/Banner";
import { CardList } from "@/components/Card/CardList";
import { CategoryBar } from "@/components/CategoryBar";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { GetStaticProps, NextPage } from "next";
import { IStore } from "./api/interface";
import React, { createContext, useState } from "react";

interface Props {
  repo: IStore[];
}

export const AppContext = createContext<any>(null);

const Page: NextPage<Props> = ({ repo }) => {
  console.log("index parent");
  const [cate, setCate] = useState<any>("all");
  return (
    <AppContext.Provider value={{ cate, setCate }}>
      <div>
        <Navbar />
        <CategoryBar />
        <CardList data={repo} />
        <Banner />
        <Cta />
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const repo = await res.json();
  return {
    props: {
      repo,
    },
  };
};

export default Page;
