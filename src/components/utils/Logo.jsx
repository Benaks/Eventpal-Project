import { Link } from "react-router-dom";

const Logo = () => {
    return (
      <div className="mx-3">
        <h1 className=" text-xs md:text-xl lg:text-2xl font-bold cursor-pointer">
          <Link to="/localevents">
            <span className="text-secondary">e</span>ventrybe
          </Link>
        </h1>
      </div>
    );   
}

export default Logo