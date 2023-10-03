import { aboutInfo } from "../data";
import { skills } from "../data";
import { FaDownload } from "react-icons/fa";
import Technology from "./Technology";
const About = () => {
  return (
    <section className="my-16">
      <div className="align-element  grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-mn-primary tracking-wide mb-4 capitalize">
            {aboutInfo.heading}
          </h2>
          <p className="text-gray-800 text-md text-justify tracking-wider leading-7">
            {aboutInfo.desc}
          </p>
          <button className="group mt-10 text-black px-4 py-2 rounded-xl border-mn-primary border-2 hover:bg-mn-primary hover:text-white duration-300 float-right tracking-wide">
            Resume
            <FaDownload className="inline-block ml-2 text-center text-mn-primary mt-[-5px] group-hover:text-white duration-300" />
          </button>
        </div>
        {/* Start here */}
        <div className="md:col-span-3 grid grid-cols-3 gap-10 lg:grid-cols-4">
          {skills.map((skill) => {
            return <Technology key={skill.id} {...skill} />;
          })}
        </div>
        {/* End here */}
      </div>
    </section>
  );
};
export default About;
