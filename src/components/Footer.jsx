
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const eventPal = ['What is EventPal', 'What do we do', 'Why use EventPal', 'EventPal Pricing', 'Events we service','Faq','EventPal','EventPal']
const services = ['Create events', 'Book events','Attend events','EventPal pricing','Our partners','Purchase ','Manage events','Find events']
const help = ['Your account','Cant attend events','Cant get tickets','Cant buy tickets','Terms and condition','Privacy and Policy']
const contactUs = ['Facebook', 'Twitter','Instagram','Linkedin','Whatsapp','Contact with us',]



function Footer() {
  return (
    <div className="font-roboto2 mt-20">
        <div className=' grid grid-cols-4 bg-primary p-4 text-slate-300 mt-4 mx-auto pl-10 '>

                    <div>
                            <ul className=' '>
                            <h6 className='font-[600] pb-2'>Event Pal</h6>
                               {
                                   eventPal.map(
                                   (eventPal) =>(
                                      <li className='text-[0.7em] ' key={eventPal}>
                                           {eventPal}
                                      </li>
                                    )
                                  )
                              }
                            </ul>
                    </div>
                    <div>
 <ul className=' '>
 <h6 className='font-[600] pb-2'>Services</h6>

 {
    services.map(
      (service) =>(
        <li className='text-[0.7em]' key={service}>
          {service}
        </li>
      )
    )
  }
 </ul>
          </div>
          <div>
 <ul className=' '>
 <h6 className='font-[600] pb-2'>Help</h6>

 {
    help.map(
      (help) =>(
        <li className='text-[0.7em]' key={help}>
          {help}
        </li>
      )
    )
  }
 </ul>
          </div>
          <div>
 <ul className=' '>
 <h6 className='font-[600] pb-2'>Contact Us</h6>

 {
    contactUs.map(
      (contactUs) =>(
        <li className='text-[0.7em] ' key={contactUs}>
          {contactUs}
        </li>
      )
    )
  }
 </ul>
          </div>
       </div>


       <div className='bg-[#563c5c] flex justify-around p-2 items-center'>
                    <p className='text-[0.7em] text-slate-300'>2024. All Rights Reserved, EventPal Limited </p>
                    <div className="flex gap-3">
                        <BiLogoFacebook className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
                        <RiTwitterXLine  className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
                        <FaInstagram  className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
                        <TiSocialGooglePlus  className="bg-purple-300 py-1 rounded-full text-2xl cursor-pointer" />
                    </div>
        </div>

    </div>
  )
}

export default Footer
