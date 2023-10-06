import { skills4 } from "../../data";
// import { technicalSkills } from "../data";
import { allSkills } from "../../data";
import { BsArrowRight } from "react-icons/bs";
import Section from "../General/Section";
import { useState } from "react";
const Skills = () => {
  const [userSkill, setUserSkill] = useState(allSkills.technical);
  const changeSkill = (skillName) => {
    setUserSkill(allSkills[skillName.toLowerCase()]);
  };
  return (
    <section className="bg-mn-secondary py-16" id="skills">
      <div className="align-element ">
        <Section sectionName="Skills" />
        <div className="grid gap-16">
          <div className="grid gap-x-10 gap-y-8 grid-cols-2 md:grid-cols-4">
            {skills4.map((skill) => {
              return (
                <button
                  className="capitalize text-black px-4 py-2 rounded-full border-mn-primary border-2 hover:bg-mn-primary hover:text-white duration-300 float-right tracking-wide"
                  key={skill.id}
                  onClick={() => changeSkill(skill.name)}
                >
                  {skill.name}
                </button>
              );
            })}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {/* make cards */}
            {userSkill.map((skill) => {
              // console.log();
              return (
                <div
                  className="group bg-gray-100 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border-mn-primary border-2 hover:bg-mn-primary hover:text-white duration-300"
                  key={skill.id}
                >
                  <span>{skill.icon}</span>
                  <h3 className="text-2xl text-gray-800 capitalize font-semibold mt-4 group-hover:text-gray-50 duration-300">
                    {skill.name}
                  </h3>
                  <p className=" text-gray-600 mt-3 tracking-wide group-hover:text-gray-400 duration-300">{`${skill.desc.slice(
                    0,
                    75
                  )}...`}</p>
                  <button className="self-start hover:text-mn-secondary">
                    <BsArrowRight className="inline text-mn-primary group-hover:text-gray-100 duration-300" />{" "}
                    learn more
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
