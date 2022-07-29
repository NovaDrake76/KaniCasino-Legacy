import React from "react"
import Login from "./Auth/Login"
import Logout from "./Auth/Logout"

const Navbar = () => {
  const isLoggedIn = false
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
        <div>{isLoggedIn ? <Logout /> : <Login />}</div>
        <div className="flex gap-2 px-5 py-2 border border-gray-500 rounded">
          <span className="text-gray-400">$</span>
          <span className="font-semibold">0.00</span>
        </div>
        <button className="px-5 py-2 bg-green-600 rounded">Deposit</button>
      </div>
    </nav>
  )
}

export default Navbar
