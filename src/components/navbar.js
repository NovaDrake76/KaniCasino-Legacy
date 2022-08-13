import React, { useState, useEffect } from "react"
import Login from "./Auth/Login"
import Logout from "./Auth/Logout"
import AxiosKani from "../utils/axiosKani"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState("")
  const [money, setMoney] = useState(0)
  const [info, setInfo] = useState([])
  const token = localStorage.getItem("token")
  const [profilePic, setProfilePic] = useState(
    "https://www.gravatar.com/avatar/"
  )

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     setLoggedIn(true)
  //     setInfo(JSON.parse(localStorage.getItem("info")))
  //     setProfilePic(JSON.parse(localStorage.getItem("info")).imageUrl)
  //   }
  // }, [])

  useEffect(() => {
    if (localStorage.getItem("token")) {
      AxiosKani.create(token)
        .get("/user/me", {})
        .then((res) => {
          setInfo(res.data.data.profile)
          setProfilePic(res.data.data.profile.picture)
          setMoney(res.data.data.money)
          setLoggedIn(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [token, info])

  useEffect(() => {
    function renderLogin() {
      if (loggedIn === true) {
        setUserInfo(
          <div className="flex items-center gap-6">
            <div className="hidden gap-2 px-5 py-2 border border-gray-500 rounded md:flex">
              <span className="text-gray-400">$</span>
              <span className="font-semibold">
                {parseFloat(money.toFixed(2))}
              </span>
            </div>
            <Link to={"/profile"}>
              <img
                src={profilePic}
                alt="profile"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
            </Link>
            <Logout />
          </div>
        )
      } else {
        setUserInfo(<Login />)
      }
    }
    return renderLogin()
  }, [loggedIn, profilePic, info, money])

  return (
    <nav className="flex justify-between w-full h-16 p-2 px-5 text-base bg-slate-700">
      <Link to={"/"}>
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://i.imgur.com/cVLsYjJ.png"
            alt="site logo"
            className="h-12"
          />
          <h1 className="font-bold ">KaniCasino</h1>
        </div>
      </Link>
      <div className="flex items-center gap-6">{userInfo}</div>
    </nav>
  )
}

export default Navbar
