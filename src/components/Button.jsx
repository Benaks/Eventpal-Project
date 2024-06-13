// eslint-disable-next-line react/prop-types
const Button = ({ text, bgColor, textColor, btnWidth, btnHeight, textSize }) => {
  const btnColor = {
    backgroundColor: bgColor,
    color: textColor,
    width: btnWidth,
    height: btnHeight,
    fontSize: textSize
  };
  return (
    <div>
      <button
        className="text-white font-semibold capitalize cursor-pointer p-2 rounded-lg"
        style={ btnColor }
        type="submit"
      >
        {text}
      </button>
    </div>
  );
};
  
  export default Button;