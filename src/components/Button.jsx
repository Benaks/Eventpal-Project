// eslint-disable-next-line react/prop-types
const Button = ({ text, bgColor, textColor, btnWidth, btnHeight }) => {
  const btnColor = {
    backgroundColor: bgColor,
    color: textColor,
    width: btnWidth,
    height: btnHeight,
  };
  return (
    <div>
      <button
        className="text-lg  text-white font-semibold capitalize cursor-pointer p-2 rounded-md"
        style={ btnColor }
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};
  
  export default Button;