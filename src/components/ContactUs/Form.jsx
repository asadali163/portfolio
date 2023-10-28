import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";

const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wwdceiw",
        "template_fiv76o9",
        form.current,
        "iAkrXPKVAtzHkCVZ8"
      )
      .then(
        (result) => {
          if (result.text === "OK") toast.success("Message Sent Successfully");

          setDetails({
            name: "",
            email: "",
            message: "",
          });

          window.scroll({ top: 0, behavior: "smooth" });
        },
        () => {
          toast.error("Message Sending Failed");
        }
      );
  };

  return (
    <form
      className="lg:col-span-2"
      onSubmit={handleSubmit}
      method="GET"
      ref={form}
    >
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-mn-secondary border-2 border-mn-primary rounded-md p-2"
          value={details.name}
          name="from_name"
          onChange={(e) => {
            setDetails({ ...details, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-mn-secondary border-2 border-mn-primary rounded-md p-2"
          value={details.email}
          name="from_email"
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />
        <textarea
          placeholder="Message"
          className="bg-mn-secondary border-2 border-mn-primary rounded-md p-2"
          name="message"
          value={details.message}
          onChange={(e) => {
            setDetails({ ...details, message: e.target.value });
          }}
        />
        <button
          onClick={handleSubmit}
          className=" text-gray-800 rounded-md border-mn-primary capitalize border-2 p-2 hover:bg-mn-primary hover:text-mn-secondary duration-300"
        >
          submit message
        </button>
      </div>
    </form>
  );
};
export default Form;
