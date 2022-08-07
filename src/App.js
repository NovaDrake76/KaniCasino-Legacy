import "./App.css"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Crash from "./components/crash"
import Roulette from "./components/roulette"
import Profile from "./components/profile"
import Landing from "./components/landing"
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
    gameAux = 1
  } else if (window.location.pathname === "/crash") {
    gameAux = 2
  } else if (window.location.pathname === "/profile") {
    gameAux = 3
  } else if (window.location.pathname === "/") {
    gameAux = 0
  }

  const [game, setGame] = useState(gameAux)

  const pullGame = (game) => {
    setGame(game)
  }

  const renderGame = (game) => {
    if (game === 1) {
      return <Roulette />
    } else if (game === 2) {
      return <Crash />
    } else if (game === 3) {
      return <Profile />
    } else {
      return <Landing />
    }
  }

  const Content = ({ game }) => <div>{renderGame(game)}</div>

  return (
    <div className="flex flex-col App">
      <Navbar func={pullGame} />
      <div className="flex w-full h-[calc(100vh-64px)] divide-x divide-gray-500 bg-slate-600">
        <Sidebar func={pullGame} />
        <div className="flex justify-center w-full overflow-scroll">
          <Content game={game} />
        </div>
      </div>
    </div>
  )
}

export default App
