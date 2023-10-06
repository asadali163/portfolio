import { year } from "../../data";
import { socialContacts } from "../../data";
const Footer = () => {
  return (
    <footer className="bg-mn-primary text-mn-secondary p-4">
      <div className="align-element grid grid-cols-2 md:grid-cols-3 justify-between gap-y-3">
        <h3 className="text-sm capitalize">
          <span>&#169;</span> {year}, all rights reserved
        </h3>
        <h3 className="text-sm justify-self-end md:justify-self-start">
          Design and code by Asad Ali
        </h3>
        <div className="flex gap-4 col-span-2 md:col-span-1 md:justify-self-end">
          {socialContacts.map((item) => {
            const { id, url, icon } = item;
            return (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl"
              >
                {icon}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
