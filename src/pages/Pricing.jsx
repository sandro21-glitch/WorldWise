import Nav from "../components/Nav";
import pricingImage from "../assets/pricing-img.jpg";
const Pricing = () => {
  return (
    <main className="section bg-[#2d3439;] p-4 md:p-10">
      <Nav />
      <section className="max-w-[70rem] grid items-center grid-cols-1 md:grid-cols-2 md:gap-5 h-full mx-auto">
        <article className="text-center md:text-left">
          <h2 className=" font-bold">
            Simple pricing.
            <br /> Just $9/month.
          </h2>
          <p className="md:max-w-[80%] md:text-left text-center text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </article>
        <img src={pricingImage} alt="pricing" className="w-full md:w-fit md:block h-[25rem] hidden rounded-md" />
      </section>
    </main>
  );
};

export default Pricing;
