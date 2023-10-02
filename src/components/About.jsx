import { aboutInfo } from "../data";

export { aboutInfo } from "../data";
const About = () => {
  return (
    <section className="my-10">
      <div className="align-element  grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-mn-primary tracking-wide mb-4 capitalize">
            {aboutInfo.heading}
          </h2>
          <p className="text-gray-800 text-base text-justify">
            {aboutInfo.desc}
          </p>
        </div>
        <div className="bg-blue-900 md:col-span-3">Second</div>
      </div>
    </section>
  );
};
export default About;
