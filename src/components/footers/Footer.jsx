import { Link } from "react-router-dom";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import footerData from "./data";

const Footer = () => {
  return (
    <div className="font-roboto2 mt-20">
      <div className="grid grid-cols-2 gap-4 items-center md:grid-cols-4 bg-primary p-4 text-slate-300 mt-4 mx-auto pl-10 font-poppins">
        {/* Event Pal Section */}
        <div>
          <h6 className="font-[600] pb-2">Event Pal</h6>
          <ul>
            {footerData.eventrybe.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em]">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h6 className="font-[600] pb-2">Services</h6>
          <ul>
            {footerData.services.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em]">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h6 className="font-[600] pb-2">Help</h6>
          <ul>
            {footerData.help.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em]">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h6 className="font-[600] pb-2">Contact Us</h6>
          <ul>
            {footerData.contactUs.map((item) => (
              <Link to={item.link} key={item.text}>
                <li className="text-[0.7em]">{item.text}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#563c5c] flex justify-around p-2 items-center font-poppins">
        <p className="text-[0.7em] text-slate-300">
          &copy; 2024. All Rights Reserved, Eventrybe Limited
        </p>
        <div className="flex gap-3">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiLogoFacebook className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXLine className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
          <a
            href="mailto:eventrybeteam@gmail.com"
            aria-label="Email Eventrybe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiSocialGooglePlus className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
