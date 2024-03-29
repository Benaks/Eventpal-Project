import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Eventrybe = [
  "What is Eventrybe",
  "What do we do",
  "Why use Eventrybe",
  "Eventrybe Pricing",
  "Events we service",
  "Faq",
  "Eventrybe",
  "Eventrybe",
];
const services = [
  "Create events",
  "Book events",
  "Attend events",
  "Eventrybe pricing",
  "Our partners",
  "Purchase ",
  "Manage events",
  "Find events",
];
const help = [
  "Your account",
  "Cant attend events",
  "Cant get tickets",
  "Cant buy tickets",
  "Terms and condition",
  "Privacy and Policy",
];
const contactUs = [
  "Facebook",
  "Twitter",
  "Instagram",
  "Linkedin",
  "Whatsapp",
  "Contact with us",
];

function Footer() {
  return (
    <div className="font-roboto2 mt-20">
      <div className=" grid grid-cols-4 bg-primary p-4 text-slate-300 mt-4 mx-auto pl-10 font-poppins ">
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Event Pal</h6>
            {Eventrybe.map((Eventrybe) => (
              <li className="text-[0.9em] " key={Eventrybe}>
                {Eventrybe}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Services</h6>

            {services.map((service) => (
              <li className="text-[0.9em]" key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Help</h6>

            {help.map((help) => (
              <li className="text-[0.9em]" key={help}>
                {help}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className=" ">
            <h6 className="font-[600] pb-2">Contact Us</h6>

            {contactUs.map((contactUs) => (
              <li className="text-[0.9em] " key={contactUs}>
                {contactUs}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-[#563c5c] flex justify-around p-2 items-center font-poppins">
        <p className="text-[0.9em] text-slate-300">
          2024. All Rights Reserved, Eventrybe Limited{" "}
        </p>
        <div className="flex gap-3">
          <BiLogoFacebook className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          <RiTwitterXLine className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          <FaInstagram className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
          <TiSocialGooglePlus className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
