import React, { useState } from "react"
import { ImRocket } from "react-icons/im"
import { GiDoubleDiaphragm } from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi"

const Sidebar = (props) => {
  const [game, setGame] = useState(0)
  const [sidebarWidth, setSidebarWidth] = useState("w-60")
  const [open, setOpen] = useState(false)

  const toggleSidebar = () => {
    setSidebarWidth(sidebarWidth === "w-60" ? "w-[80px]" : "w-60")
    console.log(sidebarWidth)
    setOpen(!open)
  }

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
    <div
      className={`flex-col text-[#c5c9d4] items-start hidden gap-5 p-5 ${sidebarWidth} md:flex transition-all duration-300 ease-in-out`}
    >
      <button
        className={`flex ${
          open ? "justify-center" : "justify-start"
        } w-full text-3xl hover:text-white `}
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu />
      </button>
      <button
        className={`flex items-center ${
          open ? "justify-center" : "justify-start"
        } w-full gap-3 hover:text-white`}
        onClick={() => {
          pullGame(2)
          window.history.replaceState(null, "KaniCasino - Crash", "/crash")
        }}
      >
        <ImRocket className="text-2xl" />
        {open ? "" : "Crash"}
      </button>
      <button
        className={`flex items-center ${
          open ? "justify-center" : "justify-start"
        } w-full gap-3 hover:text-white`}
        onClick={() => {
          pullGame(1)
          window.history.replaceState(
            null,
            "KaniCasino - Roulette",
            "/roulette"
          )
        }}
      >
        <GiDoubleDiaphragm className="text-2xl" /> {open ? "" : "Case Roulette"}
      </button>
    </div>
  )
}

export default Sidebar
