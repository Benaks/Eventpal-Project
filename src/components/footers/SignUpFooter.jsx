// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE

import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import footerData from "./data";

const SignUpFooter = () => {
  return (
    <div className="font-roboto2 mt-20">
      <div className="flex flex-col md:flex-row md:justify-center items-center justify-centertext-center align-center  bg-primary p-4 text-slate-300 mt-4 mx-auto ">
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Event Pal</h6>
            {footerData.Eventrybe.map((Eventrybe) => (
              <li className="text-[0.7em] " key={Eventrybe}>
                {Eventrybe}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Services</h6>

            {footerData.services.map((service) => (
              <li className="text-[0.7em]" key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Help</h6>

            {footerData.help.map((help) => (
              <li className="text-[0.7em]" key={help}>
                {help}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Contact Us</h6>

            {footerData.contactUs.map((contactUs) => (
              <li className="text-[0.7em] " key={contactUs}>
                {contactUs}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#563c5c] flex flex-col-reverse justify-around p-2 items-center">
        <p className="text-[0.7em] text-slate-300">
          2024. All Rights Reserved, Eventrybe Limited
        </p>
        <div className="flex gap-3 pb-4">
          <BiLogoFacebook className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          <RiTwitterXLine className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          <FaInstagram className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          <TiSocialGooglePlus className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SignUpFooter;

// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
// NOT IN USE
