import { Banner } from "@/components/Banner";
import { CardList } from "@/components/Card/CardList";
import { CategoryBar } from "@/components/CategoryBar";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { GetStaticProps, NextPage } from "next";
import { IStore } from "./api/interface";
import React, { createContext, useState } from "react";
import { NextSeo } from "next-seo";
import { Paginate } from "@/components/Paginate";

interface Props {
  repo: IStore[];
}

export const AppContext = createContext<any>(null);

const Page: NextPage<Props> = ({ repo }) => {
  console.log("index parent");
  const [cate, setCate] = useState<any>("all");
  const [pageSize, setPageSize] = useState<number>(repo.length);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [postsPerPage, setPostsPerPage] = useState<number>(8);
  const lastData = currentPage * postsPerPage;
  const firstData = lastData - postsPerPage;
  const currentData = repo?.slice(firstData, lastData);
  const totalPage = Math.ceil(pageSize / postsPerPage);
  const firstPage = Math.ceil(postsPerPage / pageSize);
  const [handleSearch, setHandleSearch] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        cate,
        setCate,
        currentPage,
        totalPage,
        setCurrentPage,
        currentData,
        firstPage,
        handleSearch,
        setHandleSearch,
      }}
    >
      <NextSeo
        title="Home | Shop"
        description="Shopping website create with next.js"
        openGraph={{
          url: "https://minimal-portfolio-sigma.vercel.app/",
          description: "Shopping website create with next.js",
          images: [
            {
              url: "/faviconChhun.jpg",
            },
          ],
          site_name: "shopcontext",
        }}
      />
      <Navbar />
      <CategoryBar />
      <CardList data={repo} />
      <Paginate />
      <Banner />
      <Cta />
      <Footer />
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
