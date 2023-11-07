import HireMe from ".././General/HireMe";
import { info } from "../../data";
const Hero = () => {
  return (
    <section className="bg-mn-secondary">
      <div className="align-element py-16 grid md:grid-cols-2 gap-10">
        {/* description */}
        <div className="flex flex-col justify-center items-start">
          <div className=" text-black tracking-wide font-bold">
            <h1 className="text-5xl">I&apos;m {info.name}</h1>
            <h1 className="text-mn-primary text-3xl mt-6 mb-4">{info.skill}</h1>
          </div>
          <p className="tracking-wider leading-normal mb-4 text-justify text-gr-800">
            {info.desc}
          </p>
          <div className="flex mt-4">
            <button
              onClick={() => {
                document
                  .querySelector("#portfolio")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className=" text-black px-4 py-2 rounded-xl mr-4 border-mn-primary border-2 hover:bg-mn-primary hover:text-white duration-300 tracking-wide"
            >
              See Portfolio
            </button>
            <HireMe />
          </div>
        </div>
        {/* image */}
        <div className="flex justify-center items-center">
          <img
            src="/../../assets/images/portfolio-image.png"
            alt="hero"
            className="w-80 md:w-96 lg:w-2/3"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
