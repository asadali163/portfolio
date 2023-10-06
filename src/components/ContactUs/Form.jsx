import { useState } from "react";

const Form = () => {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = () => {
    console.log(details);
  };
  return (
    <form className="lg:col-span-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="bg-mn-secondary border-2 border-mn-primary rounded-md p-2"
          value={details.name}
          onChange={(e) => {
            setDetails({ ...details, name: e.target.value });
          }}
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-mn-secondary border-2 border-mn-primary rounded-md p-2"
          value={details.email}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />
        <textarea
          placeholder="Message"
          className="bg-mn-secondary border-2 border-mn-primary rounded-md p-2"
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
