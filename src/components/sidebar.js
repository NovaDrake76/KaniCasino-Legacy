import React, { useState } from "react"
import { ImRocket } from "react-icons/im"
import { GiDoubleDiaphragm } from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgProfile } from "react-icons/cg"
import { GiCoinflip } from "react-icons/gi"
import { Link } from "react-router-dom"

const Sidebar = (props) => {
  const [sidebarWidth, setSidebarWidth] = useState("w-60")
  const [open, setOpen] = useState(false)
  let renderSidebarItems

  const toggleSidebar = () => {
    setSidebarWidth(sidebarWidth === "w-60" ? "w-[80px]" : "w-60")
    setOpen(!open)
  }

  const sidebarItems = [
    {
      name: "Profile",
      icon: <CgProfile className="text-2xl" />,
      link: "/profile",
    },
    {
      name: "Case Roulette",
      icon: <GiDoubleDiaphragm className="text-2xl " />,
      link: "/roulette",
    },
    {
      name: "Crash",
      icon: <ImRocket className="text-2xl" />,
      link: "/crash",
    },
    {
      name: "Coin Flip",
      icon: <GiCoinflip className="text-2xl" />,
      link: "/coinFlip",
    },
  ]

  renderSidebarItems = sidebarItems.map((item) => {
    return (
      <Link
        to={item.link}
        key={item.name}
        className={`w-full flex  ${
          open ? "justify-center" : "justify-start"
        }  hover:text-white`}
      >
        <button className="flex gap-3">
          {item.icon}
          {open ? "" : `${item.name}`}
        </button>
      </Link>
    )
  })

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
      {renderSidebarItems}
    </div>
  )
}

export default Sidebar
