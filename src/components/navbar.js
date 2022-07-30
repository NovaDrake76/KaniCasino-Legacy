import React, { useState, useEffect } from "react"
import Login from "./Auth/Login"
import Logout from "./Auth/Logout"

function Navbar(info) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState("")

  useEffect(() => {
    if (info.data.email) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [info])

  useEffect(() => {
    function renderLogin() {
      if (loggedIn === true) {
        console.log("logado")
        setUserInfo(
          <div className="flex">
            <img
              src={info.data.imageUrl}
              alt="profile"
              className="w-12 h-12 rounded-full"
            />
            <Logout />
          </div>
        )
      } else {
        console.log("não logado")
        setUserInfo(<Login />)
      }
    }
    return renderLogin()
  }, [loggedIn])

  return (
    <nav className="flex justify-between w-full h-16 p-6 text-base bg-slate-700">
      <div className="flex items-center">
        <img
          src="https://gametora.com/images/umamusume/og/default.png"
          alt="site logo"
          className="h-12"
        />
        <h1 className="font-bold ">KaniCasino</h1>
      </div>
      <div className="items-center hidden gap-6 md:flex">
        <div className="flex gap-2 px-5 py-2 border border-gray-500 rounded">
          <span className="text-gray-400">$</span>
          <span className="font-semibold">0.00</span>
        </div>
        {userInfo}
      </div>
    </nav>
  )
}

export default Navbar
