import React, { useState, useEffect } from "react"
import { ImRocket } from "react-icons/im"
import {
  GiDoubleDiaphragm,
  GiCardAceSpades,
  GiCoinflip,
  GiHamburgerMenu,
} from "react-icons/gi"
import { CgProfile } from "react-icons/cg"
import { Link } from "react-router-dom"

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [sidebarWidth, setSidebarWidth] = useState()
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
    })
  }

  useEffect(() => {
    window.addEventListener("resize", detectSize)

    return () => {
      window.removeEventListener("resize", detectSize)
    }
  }, [windowDimenion])
  let renderSidebarItems

  useEffect(() => {
    if (windowDimenion.winWidth > 768) {
      if (sidebarOpen) {
        setSidebarWidth(" w-screen md:w-64")
      } else {
        setSidebarWidth("hidden md:flex md:w-[80px]")
      }
    } else {
      if (sidebarOpen) {
        setSidebarWidth("hidden")
      } else {
        setSidebarWidth("w-screen md:w-60")
      }
    }
  }, [sidebarOpen, windowDimenion.winWidth])

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
    {
      name: "Blackjack",
      icon: <GiCardAceSpades className="text-2xl" />,
      link: "/blackjack",
    },
  ]

  function closeSidebar() {
    if (windowDimenion.winWidth < 768) {
      setSidebarOpen(true)
    }
  }

  renderSidebarItems = sidebarItems.map((item) => {
    return (
      <Link
        to={item.link}
        key={item.name}
        className={`w-full flex  ${
          sidebarOpen || windowDimenion.winWidth < 768
            ? "justify-start"
            : "justify-center"
        }  hover:text-white border-b-[1px] md:border-0 border-gray-300/20 pb-1`}
      >
        <button
          className="flex gap-3 text-ellipsis"
          onClick={() => {
            closeSidebar()
          }}
        >
          <span>{item.icon}</span>
          {sidebarOpen || windowDimenion.winWidth < 768 ? `${item.name}` : ""}
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
