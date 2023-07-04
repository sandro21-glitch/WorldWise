import Nav from "../components/Nav";
import pricingImage from "../assets/product-img.jpg";
const Product = () => {
  return (
    <main className="section bg-[#2d3439;] p-4 md:p-10">
      <Nav />
      <section className="max-w-[70rem] grid items-center grid-cols-1 md:grid-cols-2 md:gap-5 h-full mx-auto">
        <img
          src={pricingImage}
          alt="pricing"
          className="w-full md:w-fit md:block h-[25rem] hidden rounded-md"
        />
        <article className="text-center md:text-left">
          <h2 className="font-bold">About WorldWide.</h2>
          <p className="md:max-w-[80%] md:text-left text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
            dicta illum vero culpa cum quaerat architecto sapiente eius non
            soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
            perspiciatis?
          </p>
          <p className="md:max-w-[80%] md:text-left text-center text-white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </article>
      </section>
    </main>
  );
};

export default Product;
