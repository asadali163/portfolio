/* eslint-disable react/prop-types */
const NavLink = ({ id, active, setActive, title, mobile }) => {
  //   console.log(data);
  return (
    <li
      className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-mn-primary hover:border-b-2 hover:border-mn-primary  ${
        active === title ? "text-mn-primary" : "text-black"
      } 
      ${
        mobile
          ? "mb-4"
          : "mr-10" /* If mobile is true, add mb-4, else add mr-10 */
      }
      `}
      onClick={() => setActive(title)}
    >
      <a href={`#${id}`} className="font-medium">
        {title}
      </a>
    </li>
  );
};
export default NavLink;
