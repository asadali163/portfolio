const HireMe = () => {
  return (
    <button
      onClick={() => {
        document
          .querySelector("#contact")
          .scrollIntoView({ behavior: "smooth" });
      }}
      className="capitalize bg-mn-primary px-4 py-[6px] rounded-xl text-white hover:bg-mn-tent1 duration-300 tracking-wide"
    >
      hire me
    </button>
  );
};
export default HireMe;
