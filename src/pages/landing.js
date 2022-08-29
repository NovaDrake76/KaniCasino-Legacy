import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"


let renderCarouselImages, renderGames

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
      <Link key={game.name} to={`/${game.image}`}>
        <div
          key={game.name}
          className={`flex items-end p-4  rounded w-80 h-52 bg-${game.image} cursor-pointer`}
        >
          <span className="text-xl font-semibold">{game.name}</span>
        </div>
      </Link>
    )
  })

  return (
    <>
      <Helmet>
        <title>Home | KaniCasino</title>
      </Helmet>
      <div className="flex flex-col items-center justify-center gap-4 p-5 align-center ">
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
        <div className="flex flex-col justify-center gap-4 ">
          <span className="flex self-start text-2xl">Games:</span>

          <div className="flex flex-col gap-8 xl:flex-row ">{renderGames}</div>
        </div>
      </div>
    </>
  )
}

export default Landing
