// import { useContext } from "react";
// import { AppContext } from "../Landing";

const Pagination = ({
  eventData,
  eventsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  // const { eventData, eventsPerPage, setCurrentPage, currentPage } =
  //   useContext(AppContext);

  // hanlde page changing
  const totalEvents = eventData?._embedded?.events?.length || 0;
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  const handleNextPage = () => {
    console.log("Next page requested");
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    console.log("Next page displayed");
  };

  return (
    <div className=" absolute ml-24 font-roboto">
      {/* pagination buttons */}
      <div>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="cursor-pointer text-xs md:text-md text-red-600 font-semibold"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Pagination;
