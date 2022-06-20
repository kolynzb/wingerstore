import Head from "next/head";
import data from "../dummyData/dummyData";
import ProductCard from "../components/productCards/ProductCard";
import HeroSection from "../components/HeroSection";
import SectionTitle from "../components/SectionTitle";
import CategorySection from "../components/CategorySection";
import AdvertBanner from "../components/AdvertBanner";
import ServiceCard from "../components/ServiceCard";
import AdvertSect from "../components/AdvertSect";
import HighlightsSect from "../components/HighlightsSect";
export default function Home() {
  return (
    <div className="font-poppins">
      <Head>
        <title>WingerStore</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex item-center justify-center flex-col">
        <div className="my-4"></div>

        <HeroSection />
        <div className="sect-space"></div>

        <SectionTitle
          title="featured categories"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        />
        <CategorySection />
        <div className="sect-space"></div>

        <SectionTitle
          title="popular products"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        />
        <Products />
        <div className="sect-space"></div>

        <AdvertSect />
        <div className="sect-space"></div>

        <SectionTitle
          title="Popular Selections"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        />
        <HighlightsSect />
        <div className="sect-space"></div>

        <AdvertBanner />
        <div className="sect-space"></div>
        <SectionTitle
          title="Services"
          subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat"
        />
        <ServiceCard />
        <div className="sect-space"></div>
      </main>
    </div>
  );
}

const Products = () => {
  return (
    <div className=" flex items-center justify-center flex-col sm:flex-row">
      {data.splice(0, 3).map((product, i) => (
        <ProductCard
          key={i}
          id={product.id}
          previewImage={product.previewImage}
          productName={product.productName}
          discount={product.discount}
          categories={product.categories}
          rating={product.rating}
          price={product.price}
          newItem={true}
          large={true}
        />
      ))}
    </div>
  );
};
