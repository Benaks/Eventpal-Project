/* eslint-disable react/prop-types */
const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-red-500 p-2 md:p-4 w-20 md:w-40 lg:w-48 rounded-md text-white font-bold text-xs md:text-md lg:text-lg shadow-xl capitalize"
    >
      {text}
    </button>
  );
};

export default Button;
