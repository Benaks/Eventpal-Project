import { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footers/Footer";
import HelpBox from "./HelpBox";
import helpData from "./data";

function HelpCentrePage() {
  return (
    <div className="bg-gray-100 font-sans leading-normal tracking-normal">
      <Navbar />
      <header className="bg-purple-700 p-4 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-3xl font-bold">
            Eventrybe Help Center
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* main section */}
      <main className="container mx-auto my-8 p-4 bg-white rounded-lg shadow">
        <section>
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <HelpBox
              title="Account Management"
              text={helpData.accountMgtData}
            />
            <HelpBox title="Event Management" text={helpData.eventMgtData} />
            <HelpBox title="Ticketing" text={helpData.ticketMgtData} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HelpCentrePage;
