const CarouselHeads = ({head, subHead}) => {
    return (
      <div className="font-roboto my-20">
              <h1 className="font-bold text-md md:text-xl lg:text-2xl">{ head }</h1>
              <p className="text-gray-400 text-xs lg:text-md">{subHead}</p>
      </div>
    )
  }
  
  export default CarouselHeads