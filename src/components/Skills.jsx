import { skills4 } from "../data";
import { technicalSkills } from "../data";
import { BsArrowRight } from "react-icons/bs";
const Skills = () => {
  return (
    <section className="bg-mn-secondary py-16">
      <div className="align-element grid gap-16">
        <div className="grid gap-x-10 gap-y-8 grid-cols-2 md:grid-cols-4">
          {skills4.map((skill) => {
            return (
              <button
                className="capitalize text-black px-4 py-2 rounded-full border-mn-primary border-2 hover:bg-mn-primary hover:text-white duration-300 float-right tracking-wide"
                key={skill.id}
              >
                {skill.name}
              </button>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
          {/* make cards */}
          {technicalSkills.map((skill) => {
            // console.log();
            return (
              <div
                className="group bg-gray-100 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center gap-4"
                key={skill.id}
              >
                <span>{skill.icon}</span>
                <h3 className="text-2xl text-gray-800 capitalize font-semibold mt-4">
                  {skill.name}
                </h3>
                <p className=" text-gray-600 mt-3 tracking-wide">{`${skill.desc.slice(
                  0,
                  75
                )}...`}</p>
                <button className="self-start hover:text-mn-primary duration-200">
                  <BsArrowRight className="inline text-mn-primary" /> learn more
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Skills;
