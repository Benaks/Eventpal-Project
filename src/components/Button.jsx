// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
    return (
      <div>
        <button className="bg-red-700 text-lg  text-white font-semibold capitalize cursor-pointer p-2 shadow-lg rounded-md">
          {text}
        </button>
      </div>
    );
  };
  
  export default Button;