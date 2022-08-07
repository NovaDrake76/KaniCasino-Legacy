import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

let renderCarouselImages
let renderGames

const Landing = () => {
  const carouselImages = [
    "https://i.imgur.com/ei2epVv.png",
    "https://i.imgur.com/sT9oz46.png",
    "https://i.imgur.com/wDRb123.png",
  ]

  const games = ["Roulette", "Crash", "Coin Flip"]

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

  renderGames = games.map((game) => {
    return (
      <div key={game} className="border rounded w-80 h-52">
        {game}
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center justify-center gap-6 p-5 align-center">
      <Carousel
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        className="max-w-screen-lg "
      >
        {renderCarouselImages}
      </Carousel>
      <div className="flex justify-center gap-8">{renderGames}</div>
    </div>
  )
}

export default Landing
