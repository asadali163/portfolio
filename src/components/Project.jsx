import { useState } from "react";
import { TbWorldWww } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { useDispatch } from "react-redux";
import {
  setSelectedProject,
  emptySelectedProject,
} from "../Redux/Project/projectSlice";
import HRow from "./HRow";
const Project = (data) => {
  const dispatch = useDispatch();
  const [showLinks, setShowLinks] = useState(false);
  const { id, name, github, netlify, category } = data;
  const handleHoverEnter = (id) => {
    setShowLinks(true);
    dispatch(setSelectedProject(id));
  };
  const handleHoverLeave = () => {
    setShowLinks(false);
    dispatch(emptySelectedProject());
  };
  return (
    <>
      <div
        className="flex flex-col gap-1 relative "
        onMouseEnter={() => handleHoverEnter(id)}
        onMouseLeave={() => handleHoverLeave()}
      >
        <div
          className={`flex justify-between items-center  py-2 ${
            showLinks ? "opacity-0" : "opacity-100 "
          }`}
        >
          <h3 className="text-2xl inline-block text-gray-700 tracking-wide capitalize">
            {name}
          </h3>
          <span className="capitalize tracking-wide text-lg text-gray-700">
            {category}
          </span>
        </div>
        <HRow />
        {/* This part shows the links when I hover over project part */}
        <div
          className={`${
            showLinks ? "flex" : "hidden"
          } fade-in absolute top-0 left-0 justify-center gap-4 items-center w-full `}
        >
          <a href={github}>
            <SiGithub className="w-10 h-10 cursor-pointer hover:text-mn-primary duration-200" />
          </a>
          <a href={netlify}>
            <TbWorldWww className="w-10 h-10 cursor-pointer hover:text-mn-primary duration-200" />
          </a>
          {/* Later on add more detail button for description which will open a modal window */}
        </div>
      </div>
    </>
  );
};
export default Project;
