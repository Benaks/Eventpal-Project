/* eslint-disable react/prop-types */
const Button = ({ text, onClick }) => {
  return (
    <button
      name=""
      id=""
      onClick={onClick}
      className="bg-red-500 p-4 w-48 rounded-md text-white font-bold text-2xl ml-10 shadow-xl capitalize"
    >
      {text}
    </button>
  );
};

export default Button;
