import Nav from "../components/Nav";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <main className="section main-bg bg-cover bg-center bg-no-repeat px-[2rem] md:px-[3rem] py-[2rem]">
      {/* navbar */}
      <Nav />
      <section className="flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-white font-bold mb-10 md:leading-[4rem]">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <p className="font-bold text-[#aaa] w-[90%] text-[.7rem] md:text-[1.2rem] mb-20">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link
          to="app"
          className="bg-greenBtn px-7 py-3 uppercase text-black font-semibold tracking-wider rounded-lg"
        >
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
};

export default Home;
