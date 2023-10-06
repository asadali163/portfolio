import Section from "../General/Section";
import { contactDetails } from "../../data";
import DetailCard from "./DetailCard";
import Form from "./Form";
const Contact = () => {
  return (
    <section className="bg-mn-secondary py-16" id="contact">
      <div className="align-element">
        <Section sectionName="contact" />
        <h2 className="text-3xl font-semibold text-center text-gr-800 capitalize mb-10">
          Let&apos;s discuss your{" "}
          <span className="text-mn-primary capitalize">Project</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* For number and address */}
          <div className="flex flex-col gap-8 md:justify-between lg:col-span-2">
            {contactDetails.map((detail) => {
              return <DetailCard key={detail.id} {...detail} />;
            })}
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};
export default Contact;
