import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

let renderCarouselImages

const Landing = () => {
  const carouselImages = [
    "https://i.imgur.com/ei2epVv.png",
    "https://i.imgur.com/sT9oz46.png",
    "https://i.imgur.com/wDRb123.png",
  ]

  renderCarouselImages = carouselImages.map((image) => {
    return (
      <div key={image}>
        <img
          src={image}
          alt={`carousel ${image}`}
          className="object-cover object-center rounded max-h-80"
        />
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5">
      <Carousel
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        className="max-w-4xl "
      >
        {renderCarouselImages}
      </Carousel>
      <div className="flex justify-center gap-4">
        <div className="border w-80 h-52">Roulette</div>
        <div className="border w-80 h-52">Crash</div>
        <div className="border w-80 h-52">Coin Flip</div>
      </div>
    </div>
  )
}

export default Landing
