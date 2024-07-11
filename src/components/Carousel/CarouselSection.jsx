import Pagination from "../Pagination"
import CarouselHead from "./CarouselHead"

const CarouselSection = ({
  head,
  subHead,
  children,
  eventData,
  eventsPerPage,
}) => {
  return (
    <div className="w-[95%] m-auto">
      <CarouselHead head={head} subHead={subHead} />
      <div className="flex flex-col md:flex-row flex-wrap justify-around items-center w-full">
        {children}
      </div>
      <Pagination
        eventData={eventData}
        eventsPerPage={eventsPerPage}
        // setCurrentPage={setCurrentPage}
        // currentPage={currentPage}
      />
    </div>
  );
};

export default CarouselSection
