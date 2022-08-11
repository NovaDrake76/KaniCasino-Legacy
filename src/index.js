import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"
import Crash from "./pages/crash"
import Roulette from "./pages/roulette"
import Profile from "./pages/profile"
import CoinFlip from "./pages/coin"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <BrowserRouter>
    <div className="flex flex-col App">
      <Navbar />
      <div className="flex w-full h-[calc(100vh-64px)]  divide-x divide-gray-500 bg-slate-600">
        <Sidebar />
        <div className=" w-full overflow-auto">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="roulette" element={<Roulette />} />
            <Route path="crash" element={<Crash />} />
            <Route path="profile" element={<Profile />} />
            <Route path="coinFlip" element={<CoinFlip />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
