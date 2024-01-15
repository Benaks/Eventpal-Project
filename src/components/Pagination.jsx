/* eslint-disable react/prop-types */

const Pagination = ({eventData, eventsPerPage, setCurrentPage, currentPage}) => {
  // pagination function
  // const handlePrevPage = () => {
  //   console.log("Previous page clicked");
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };
  const handleNextPage = () => {
    console.log("Next page clicked");
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil((eventData?._embedded?.events?.length || 0) / eventsPerPage)
      )
    );
  };

  return (
    <div className=" absolute ml-24 font-roboto">
      {/* pagination buttons */}
      <div>
        <button
          onClick={handleNextPage}
          disabled={
            currentPage ===
            Math.ceil(
              (eventData?._embedded?.events?.length || 0) / eventsPerPage
            )
          }
          className="cursor-pointer text-red-600 font-semibold"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Pagination;
