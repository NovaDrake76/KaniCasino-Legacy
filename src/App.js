import "./App.css"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Crash from "./components/crash"
import Roulette from "./components/roulette"
import React, { useState } from "react"

function App() {
  let gameAux = 0
  if (window.location.pathname === "/roulette") {
    gameAux = 0
  } else if (window.location.pathname === "/crash") {
    gameAux = 1
  }

  const [game, setGame] = useState(gameAux)
  const pullGame = (game) => {
    setGame(game)
  }

  const renderGame = (game) => (game ? <Crash /> : <Roulette />)
  const Content = ({ game }) => <div>{renderGame(game)}</div>

  return (
    <div className="flex flex-col App">
      <Navbar />
      <div className="flex w-full h-screen divide-x divide-gray-500 bg-slate-600">
        <Sidebar func={pullGame} />
        <div className="">
          <Content game={game} />
        </div>
      </div>
    </div>
  )
}

export default App
