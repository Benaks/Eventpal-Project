const CarouselHeads = ({head, subHead}) => {
    return (
      <div className="font-roboto my-20">
              <h1 className="font-bold text-lg md:text-2xl lg:text-3xl">{ head }</h1>
              <p className="text-gray-400 text-xs lg:text-md">{subHead}</p>
      </div>
    )
  }
  
  export default CarouselHeads