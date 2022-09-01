import React, { useState, useEffect } from "react"
import Login from "./Auth/Login"
import Logout from "./Auth/Logout"
import { Link } from "react-router-dom"
import NumberFormat from 'react-number-format';
import { GiHamburgerMenu } from "react-icons/gi"

const Navbar = ({ userInformation, updateUserInformation, sidebarOpen, setSidebarOpen }) => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfoRender, setUserInfoRender] = useState(undefined)

  useEffect(() => {
    if (userInformation !== undefined) {
      setLoggedIn(true)
      setUserInfoRender(
        <div className="flex items-center gap-6">
          <div className="gap-2 px-2 md:px-5 py-2 border border-gray-500 rounded flex">
            <span className="text-gray-400">$</span>
            <span className="font-semibold text-sm md:text-lg flex  items-center">
              <NumberFormat value={userInformation.money} displayType={'text'} thousandSeparator={true} fixedDecimalScale={true} decimalScale={2}/>
            </span>
          </div>
          <Link to={"/profile"}>
            <img
              src={userInformation.profile.picture}
              alt="profile"
              className="w-12 h-12 rounded-full cursor-pointer"
            />
          </Link>
          <Logout />
        </div>
      )
    }
  }, [userInformation])

  return (
    <nav className="flex justify-between w-full h-16 p-2 px-5 text-base bg-slate-700">
      <button
          className={"flex md:hidden text-3xl"}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Open or close the sidebar">
        <GiHamburgerMenu />
      </button>
      <Link to={"/"}>
        <div className="items-center gap-2 cursor-pointer hidden md:flex">
          <img
            src="https://i.imgur.com/cVLsYjJ.png"
            alt="site logo"
            className="h-12"
          />
          <h1 className="font-bold ">KaniCasino</h1>
        </div>
      </Link>
      <div className="flex items-center gap-6">
        {loggedIn ? (
          userInfoRender
        ) : (
          <Login updateUserInformation={updateUserInformation} />
        )}
      </div>
    </nav>
  )
}

export default Navbar
