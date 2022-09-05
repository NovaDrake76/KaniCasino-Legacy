import React, { useState } from "react"
import { ImRocket } from "react-icons/im"
import { GiDoubleDiaphragm } from "react-icons/gi"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgProfile } from "react-icons/cg"
import { GiCoinflip } from "react-icons/gi"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const Sidebar = ({sidebarOpen, setSidebarOpen }) => {
  const [sidebarWidth, setSidebarWidth] = useState("w-screen md:w-60")
  let renderSidebarItems

  useEffect(() => {
    if (sidebarOpen) {
      setSidebarWidth(" w-screen md:w-60")
    } else {
      setSidebarWidth("hidden md:flex md:w-[80px]")
    }

  
  }, [sidebarOpen])

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
          sidebarOpen ? "justify-start"  : "justify-center" 
        }  hover:text-white`}
      >
        <button className="flex gap-3 text-ellipsis">
          <span>{item.icon}</span>
          {sidebarOpen ? `${item.name}` : ""}
        </button>
      </Link>
    )
  })

  return (
    <div
      className={`absolute md:static flex-col text-[#c5c9d4] items-start h-full z-10 bg-slate-600 gap-5 p-5 ${sidebarWidth} flex md:transition-all md:duration-300 ease-in-out border-r border-gray-500`}
    >
      <button
        className={`hidden md:flex ${
          sidebarOpen ? "justify-start" : "justify-center"
        } w-full text-3xl hover:text-white `}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Open or close the sidebar"
      >
        <GiHamburgerMenu />
      </button>
      {renderSidebarItems}
    </div>
  )
}

export default Sidebar
