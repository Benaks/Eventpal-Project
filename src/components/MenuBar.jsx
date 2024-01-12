const list = [
  "Category",
  "Porpular Events",
  "Todays Events",
  "Online Events",
  "Personalise Events",
];

function MenuBar() {
  return (
    <div className="flex flex-col justify-center ml-auto mr-auto  mb-8  md:w-[80%] px-8">
      <div className="flex justify-center">
        <ul className="flex justify-around overflow-y-auto py-8 w-[100%]">
          {list.map((item) => (
            <li
              key={item}
              className="px-2 py-1 font-[500] text-[1.1em] text-slate-600 mx-6 cursor-pointer after:bg-red-700 after:w-0 after:h-[3px] after:m-auto after:content-[''] after:block after:rounded-md after:transition-transform after:duration-1000 hover:after:w-1/2"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MenuBar;
