import { Banner } from "@/components/Banner";
import { CardList } from "@/components/Card/CardList";
import { CategoryBar } from "@/components/CategoryBar";
import { Cta } from "@/components/Cta";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Paginate } from "@/components/Paginate";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryBar />
      <CardList />
      <Paginate />
      <Banner />
      <Cta />
      <Footer />
    </>
  );
};

export default Home;
