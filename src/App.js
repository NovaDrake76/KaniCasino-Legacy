import "./App.css"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Crash from "./components/crash"
import Roulette from "./components/roulette"
import Profile from "./components/profile"
import React, { useState, useEffect } from "react"
import { gapi } from "gapi-script"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  let gameAux = 0
  if (window.location.pathname === "/roulette") {
    gameAux = 0
  } else if (window.location.pathname === "/crash") {
    gameAux = 1
  } else if (window.location.pathname === "/profile") {
    gameAux = 2
  }

  const [game, setGame] = useState(gameAux)

  const pullGame = (game) => {
    setGame(game)
  }

  const renderGame = (game) => {
    if (game === 0) {
      return <Roulette />
    } else if (game === 1) {
      return <Crash />
    } else if (game === 2) {
      return <Profile />
    }
  }

  const Content = ({ game }) => <div>{renderGame(game)}</div>

  return (
    <div className="flex flex-col App">
      <Navbar func={pullGame} />
      <div className="flex w-full min-h-screen divide-x divide-gray-500 bg-slate-600">
        <Sidebar func={pullGame} />
        <div>
          <Content game={game} />
        </div>
      </div>
    </div>
  )
}

export default App
