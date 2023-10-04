import { useState } from "react";
import HRow from "./HRow";
const Project = (data) => {
  const [selectedProject, setSelectedProject] = useState(null);
  //   const handleHoverEnter = () => {
  //     console.log("Enter");
  //   };
  //   const handleHoverLeave = () => {
  //     console.log("leave");
  //   };
  return (
    <>
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center">
          <h3 className="text-2xl inline-block text-gray-700 tracking-wide capitalize">
            Portfolio
          </h3>
          <span className="capitalize tracking-wide text-lg text-gray-700">
            React
          </span>
        </div>
        <HRow />
      </div>
    </>
  );
};
export default Project;
