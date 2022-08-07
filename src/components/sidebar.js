import React, { useState } from "react"

const Sidebar = (props) => {
  const [game, setGame] = useState(0)

  const pullGame = (game) => {
    if (window.location.pathname === "/roulette") {
      setGame(1)
    } else if (window.location.pathname === "/crash") {
      setGame(2)
    }
    props.func(game)
  }

  console.log(game)

  return (
    <div className="flex-col items-start hidden w-1/6 gap-3 p-5 border-gray-500 md:flex">
      <button
        onClick={() => {
          pullGame(2)
          window.history.replaceState(null, "KaniCasino - Crash", "/crash")
        }}
      >
        Crash
      </button>
      <button
        onClick={() => {
          pullGame(1)
          window.history.replaceState(
            null,
            "KaniCasino - Roulette",
            "/roulette"
          )
        }}
      >
        Roulette
      </button>
    </div>
  )
}

export default Sidebar
