import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

let renderCarouselImages
let renderGames

const Landing = () => {
  const carouselImages = [
    "https://i.imgur.com/jEisYiM.png",
    "https://i.imgur.com/5auaV2E.png",
    "https://i.imgur.com/8Z1XyYv.png",
  ]

  const games = [
    {
      name: "Roulette",
      image: "roulette",
    },
    {
      name: "Crash",
      image: "crash",
    },
    {
      name: "Coin Flip",
      image: "coinFlip",
    },
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

  renderGames = games.map((game) => {
    return (
      <div
        key={game.name}
        className={`flex items-end p-4  rounded w-80 h-52 bg-${game.image}`}
      >
        <span className="text-xl font-semibold">{game.name}</span>
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-5 align-center">
      <Carousel
        autoPlay={true}
        interval={4000}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        className="hidden max-w-screen-lg xl:flex"
      >
        {renderCarouselImages}
      </Carousel>
      <span className="flex self-start text-2xl">Games:</span>
      <div className="flex flex-col justify-center gap-8 xl:flex-row">
        {renderGames}
      </div>
    </div>
  )
}

export default Landing
