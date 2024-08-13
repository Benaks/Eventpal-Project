const list = [
  "Category",
  "Popular Events",
  "Todays Events",
  "Online Events",
  "Personalise Events",
];

const MenuBar = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full overflow-auto ">
      <div className="flex justify-center items-center w-[140%] md:w-[80%]">
        <ul className="flex justify-around items-center w-full">
          {list.map((item) => (
            <li
              key={item}
              tabIndex="0"
              className="my-6 font-[500] text-sm md:text-md lg:text-lg text-slate-600 cursor-pointer after:bg-secondary after:w-0 after:h-[2px] after:m-auto after:content-[''] after:block after:rounded-md after:transition-transform after:duration-1000 hover:after:w-1/2 focus:outline-none focus:text-secondary focus:font-[600]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
