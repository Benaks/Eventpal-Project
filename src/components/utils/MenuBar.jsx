const list = [
  { name: "Categories", id: "categories" },
  { name: "Popular Events", id: "popular-events" },
  { name: "Today's Events", id: "todays-events" },
  { name: "Online Events", id: "online-events" },
  { name: "Personalized Events", id: "personalized-events" },
];

const MenuBar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full overflow-auto">
      <div className="flex justify-center items-center w-[145%] md:w-[80%]">
        <ul className="flex justify-around items-center w-full">
          {list.map((item) => (
            <li
              key={item.name}
              tabIndex="0"
              onClick={() => scrollToSection(item.id)}
              className="my-6 font-[500] text-xs md:text-sm lg:text-sm text-slate-600 cursor-pointer after:bg-secondary after:w-0 after:h-[2px] after:m-auto after:content-[''] after:block after:rounded-md after:transition-transform after:duration-1000 hover:after:w-1/2 focus:outline-none focus:text-secondary focus:font-[600]"
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MenuBar;
