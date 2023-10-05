import HRow from "./HRow";
const ProjectHeader = () => {
  return (
    <div className="grid md:grid-cols-5 mb-3 ">
      <div className="flex flex-col md:col-span-2 md:col-start-4 md:col-end-6">
        <div className="flex justify-between mb-2">
          <h2 className="text-3xl font-bold text-gray-900 tracking-wide">
            Projects
          </h2>
          <span className="text-2xl font-bold text-gray-900">0</span>
        </div>
        <HRow />
        <HRow />
      </div>
    </div>
  );
};
export default ProjectHeader;
