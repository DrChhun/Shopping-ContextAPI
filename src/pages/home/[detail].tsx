import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useContext, useState } from "react";
import { CheckoutContext } from "@/context/checkout-context";

interface Props {
  posts: {
    image: string;
    title: string;
    price: number;
    description: string;
    rating: {
      rate: number;
    };
  };
}

const sizeData = [
  {
    id: 1,
    size: "M",
  },
  {
    id: 2,
    size: "S",
  },
  {
    id: 3,
    size: "L",
  },
  {
    id: 4,
    size: "XL",
  },
];

const Detail = ({ posts }: Props) => {
  const { setItemsCart, addToCart, itemsCart } = useContext(CheckoutContext);
  const [handleSize, setHandleSize] = useState<string>();
  return (
    <div className="container">
      <Link href="/">
        <p className="py-8 text-2xl font-semibold">🛖 Home</p>
      </Link>
      <div className="flex pb-16 justify-center flex-col md:flex-row gap-16">
        <div className="rounded-md">
          <Image
            className="rounded-md"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            src={posts?.image}
            alt=""
          />
        </div>
        <div className="space-y-4 flex md:w-1/2 flex-col my-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">{posts.title}</h2>
          <p>⭐️{posts.rating.rate}</p>
          <p className="text-md md:text-xl font-semibold bg-green-200 w-fit px-4 py-2 rounded-full text-green-700">
            ${posts.price}
          </p>
          <hr />
          <div>
            <p className="text-lg font-semibold">Select Size</p>
            <div className="flex gap-8">
              {sizeData.map((x) => (
                <p
                  className={`py-2 px-4 rounded-md duration-200 hover:bg-gray-200 bg-gray-100 ${
                    handleSize === x.size && "!bg-gray-300 text-white"
                  }`}
                  key={x.id}
                  onClick={() => setHandleSize(x.size)}
                >
                  {x.size}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg font-semibold">Descriptions</p>
            <p>{posts.description}</p>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="space-x-2 mx-auto mb-8 md:m-0">
              <button>-</button>
              <input
                type="number"
                className="px-12 md:px-4 py-2 border-2 text-center focus:outline-none border-gray-100 bg-gray-50"
              />
              <button>+</button>
            </div>
            <button
              onClick={() =>
                addToCart(
                  posts.title,
                  posts.price,
                  posts.image,
                  handleSize,
                  posts.description
                )
              }
              className="md:ml-8 bg-black text-white px-4 py-2 border-2 border-black"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();

  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let GG = params?.detail;
  const res = await fetch(`https://fakestoreapi.com/products/${GG}`);
  const posts = await res.json();

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Detail;
