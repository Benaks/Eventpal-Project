
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
  "Cant attend events",
  "Cant get tickets",
  "Cant buy tickets",
  "Terms and condition",
  "Privacy and Policy",
  "Privacy and Policy",
];
const contactUs = [
  "Facebook",
  "Twitter",
  "Instagram",
  "Linkedin",
  "Tiktok",
  "Whatsapp",
  "Snapchat",
  "Snapchat",
  "Contact with us",
];

function Footer() {
  return (
    <div className="font-poppins">
      <div className=" flex flex-col md:flex-row md:justify-between mx-auto justify-center items-center bg-primary p-10 md:px-96 text-slate-300 mt-4 text-center  ">
        {/* Eventpal links */}
        <div className=" mb-5">
          <ul className=" ">
            <h6 className="font-[600] pb-2">Event Pal</h6>
            {Eventrybe.map((Eventrybe) => (
              <li className="text-[0.9em] " key={Eventrybe}>
                {Eventrybe}
              </li>
            ))}
          </ul>
        </div>
        {/* Services links */}
        <div className="mb-5">
          <ul className=" ">
            <h6 className="font-[600] pb-2">Services</h6>

            {services.map((service) => (
              <li className="text-[0.9em]" key={service}>
                {service}
              </li>
            ))}
          </ul>
        </div>
        {/* Help links */}
        <div className="mb-5">
          <ul className=" ">
            <h6 className="font-[600] pb-2">Help</h6>

            {help.map((help) => (
              <li className="text-[0.9em]" key={help}>
                {help}
              </li>
            ))}
          </ul>
        </div>
  
      </div>

      {/* Social media Icons and copy rights*/}
      <div className=" bg-primary flex justify-around p-2 items-center flex-col-reverse">
        {/* copyright */}
        <p className="text-[0.9em] text-slate-300 mb-4">
          2024. All Rights Reserved, Eventrybe Limited{" "}
        </p>

        {/* Social media icons */}
        <div className="flex gap-3 mb-4">
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
