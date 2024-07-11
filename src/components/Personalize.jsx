import churchImg from "../assets/Church.png";
import partyImg from "../assets/Party.png";
import mosqueImg from "../assets/Mosque.png";
import concertImg from "../assets/Concert.png";
import seminarImg from "../assets/Seminar.png";
import { list } from "postcss";

const Personalize = () => {
  const data = [
    { name: "church", img: churchImg },
    { name: "party", img: partyImg, },
    { name: "mosque", img: mosqueImg, },
    { name: "concert", img: concertImg,},
    { name: "serminar", img: seminarImg,},
  ];
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-around items-center w-[500%] md:w-[100%] mb-10">
        {data.map((result) => (
          <li
            key={result.name}
            className="capitalize list-none p-16 text-2xl text-white font-semibold rounded-full bg-center bg-contain bg-no-repeat cursor-pointer"
            style={{ backgroundImage: `url(${result.img})` }}
          >
            {result.name}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Personalize;
