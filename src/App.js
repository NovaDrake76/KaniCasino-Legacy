import "./App.css"
import Landing from "./pages/landing"
import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import { gapi } from "gapi-script"
import Crash from "./pages/crash"
import Roulette from "./pages/roulette/roulette"
import Profile from "./pages/profile"
import CoinFlip from "./pages/coin"
import BlackJack from "./pages/blackjack"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function App() {
  const [userInformation, updateUserInformation] = useState(undefined)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  // useEffect(() => {
  //   console.log("[App] userInformation: ", userInformation)
  // }, [userInformation])

  return (
    <div className="flex flex-col App">
      <Navbar
        userInformation={userInformation}
        updateUserInformation={updateUserInformation}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      <div className="flex w-full h-[calc(100vh-64px)]   bg-slate-600">
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}/>
        <div className="w-full p-6 overflow-auto ">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route
              path="roulette"
              element={
                <Roulette updateUserInformation={updateUserInformation} />
              }
            />
            <Route path="crash" element={<Crash  userInformation={userInformation}
                  updateUserInformation={updateUserInformation} />} 
                />
            <Route
              path="profile"
              element={<Profile userInformation={userInformation} />}
            />
            <Route
              path="coinFlip"
              element={
                <CoinFlip
                  userInformation={userInformation}
                  updateUserInformation={updateUserInformation}
                />
              }
            />
            <Route
              path="blackjack"
              element={
                <BlackJack
                  userInformation={userInformation}
                  updateUserInformation={updateUserInformation}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
