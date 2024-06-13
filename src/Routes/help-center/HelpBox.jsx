import { useState } from "react";
const HelpBox = ({ title, text }) => {
  // Initialize isVisible state as an object with keys for each item
  const [isVisible, setIsVisible] = useState(
    text.reduce((acc, item) => ({ ...acc, [item.btnTxt]: false }), {})
  );

  // Function to toggle visibility for a specific item
  const toggleVisibility = (item) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [item.btnTxt]: !prevState[item.btnTxt],
    }));
  };
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow">
      <h3 className="text-xl font-semibold text-purple-600 mb-2">{title}</h3>
      <ul className="space-y-2">
        {text.map((item) => (
          <li key={item.btnTxt}>
            <button
              onClick={() => toggleVisibility(item)}
              className="text-left w-full focus:outline-none focus:bg-purple-100 p-2 rounded-md transition duration-200"
            >
              <h4 className="text-lg font-medium">{item.btnTxt}</h4>
            </button>
            {isVisible[item.btnTxt] && (
              <div className="block p-2 text-sm text-gray-700">
                <p>{item.desc}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpBox;
