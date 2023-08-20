import Featues from "./components/Featues";
import Hero from "./components/Hero";
import Parallax from "./components/Parallax";
import Product from "./components/Product";
import { getProducts } from "@/utils/fetchStripeProducts";

const Home = async () => {
  const products = await getProducts();
  return (
    <>
      <Hero />
      <Featues />
      <Parallax />
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </>
  );
};

export default Home;
