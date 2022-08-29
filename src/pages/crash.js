import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import AxiosKani from "../utils/axiosKani"
import { ToastContainer, toast, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Crash = ({userInformation, updateUserInformation}) => {
  const [startGame, setStartGame] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [endGameMesage, setEndGameMessage] = useState("")
  const [placeBet, setPlaceBet] = useState(false)
  const [bet, setBet] = useState(0)
  const [money, setMoney] = useState(0)
  const [multiplier, setMultiplier] = useState(1.0)
  const [multiplierLembrance, setMultiplierLembrance] = useState(null)
  const [intervalPeriod, setIntervalPeriod] = useState(100)
  const [multiplierDefined, setMultiplierDefined] = useState(false)
  const [randomNumber, setRandomNumber] = useState(0)
  const [history, setHistory] = useState([])
  const token = localStorage.getItem("token")
  const E = 2**52

  let renderCrash, renderHistory

  useEffect(() => {

    if(multiplierDefined === false) {
       setRandomNumber((0.99*(E))/(E - Math.random()*(E)))
       setMultiplierDefined(true)
    }
    if (startGame) {
      const interval = setInterval(() => {
        if (multiplier < randomNumber) {
          setMultiplier((multiplier) => multiplier + 0.01)

        } else {
          clearInterval(interval)
          setEndGame(true)
          setEndGameMessage("Crashed!")
          setMultiplierLembrance(multiplier)
          if (localStorage.getItem("token")) {
            AxiosKani.create(token)
              .put(
                "/user/money",
                JSON.stringify({
                  money: money,
                })
              )
              .then(() => {
                AxiosKani.create(localStorage.getItem("token"))
                  .get("/user/me", {})
                  .then((res) => {
                    updateUserInformation(res.data.data)
                  })
                  .catch((err) => {
                    console.log(err)
                  })
              })
              .catch((err) => {
                console.log(err)
              })
          }
        }

        if (intervalPeriod > 10) {
          setIntervalPeriod(
            (intervalPeriod) => intervalPeriod - intervalPeriod * 0.003
          )
        }
      }, intervalPeriod)
      return () => clearInterval(interval)
    }
  }, [startGame, multiplier, intervalPeriod, E, randomNumber, multiplierDefined, money, token, updateUserInformation])

  useEffect(() => {
    if (endGame) {
      setMultiplier(1.0)
      setIntervalPeriod(100)
      setStartGame(false)
      setMultiplierDefined(false)
      setHistory([...history, multiplierLembrance])
   
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endGame, multiplierLembrance])

  useEffect(() => {
    if (userInformation !== undefined) {
      setMoney(userInformation.money)
    }
  }, [userInformation])

  const start = () => {
    if (placeBet > money) {
      toast.error("You don't have enough money!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
        transition: Slide,
      })
    } else {
      setStartGame(true)
    if (placeBet.length > 0) {
      setBet(placeBet)
      setMoney(money - placeBet)
    }
  }}

  const preventMinus = (e) => {
    if (e.code === "Minus") {
      e.preventDefault()
    }
  }

  if (multiplierLembrance == null) {
    renderCrash = <span>Crash</span>
  }

  if (startGame === true) {
    renderCrash = <span>{multiplier.toFixed(2)}</span>
  } else if (endGame) {
    renderCrash = <span>{endGameMesage} {multiplierLembrance.toFixed(2)}</span>
  }

  const cashout = () => {
      setMoney(money + bet * multiplier)
      setMultiplierLembrance(multiplier)
      setEndGameMessage("Landed!")

    if (localStorage.getItem("token")) {
      AxiosKani.create(token)
        .put(
          "/user/money",
          JSON.stringify({
            money: money + bet * multiplier,
          })
        )
        .then(() => {
          AxiosKani.create(localStorage.getItem("token"))
            .get("/user/me", {})
            .then((res) => {
              updateUserInformation(res.data.data)
            })
            .catch((err) => {
              console.log(err)
            })
        })
        .catch((err) => {
          console.log(err)
        })
    }
    setEndGame(true)

  }

  renderHistory = history.map((item, index) => {
    if (item > 1.81) {
      return (
        <div key={index} className="text-green-500">
          {item.toFixed(2)}
        </div>
      )
    }else{
      return (
        <div key={index} className="text-red-500">
          {item.toFixed(2)}
        </div>
      )
    }
  })


  return (
    <>
     <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        limit={2}
      />
      <Helmet>
        <title>Crash | KaniCasino</title>
      </Helmet>
      <div className="flex justify-center text-base">
        <div className="flex flex-col-reverse w-full max-w-3xl divide-x divide-gray-400 rounded md:flex-row bg-slate-500">
          <div className="flex flex-col h-full gap-2 p-4 max-h-72">
            <div className="flex py-2 rounded bg-slate-600">
              <span className="flex items-center px-2 text-gray-200">$</span>
              <input
                type="number"
                className="w-5/6 p-1 transition-all duration-200 outline-none bg-slate-600 invalid:text-red-600"
                placeholder="Place your bet"
                min={0.0}
                max={money}
                onKeyPress={preventMinus}
                onChange={(e) => {
                  setPlaceBet(e.target.value)
                }}
              />
            </div>

            <div className="flex flex-col h-full">
              {startGame ? (
                <button id="cashout" className="w-full p-2 transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500 "  onClick={() => {
                  cashout()}}>
                  Cashout
                </button>
              ) : (
                <button
                  id="start"
                  className="w-full p-2 transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500"
                  onClick={() => {
                    start()
                  }}
                >
                  Start Game
                </button>
              )}
            </div>
          </div>
          <div className="flex flex-col w-full h-full divide-y divide-gray-400">
            <div className="flex p-4">
              <div className="flex items-center justify-center w-full h-64 rounded bg-slate-600">
                {renderCrash}
              </div>
            </div>
            <div className="flex-col hidden gap-2 p-4 lg:flex">
              <span className="flex text-xs font-bold text-gray-200">
                PREVIOUS GAMES
              </span>
              <div className="flex self-end h-6 max-w-[500px] gap-2 overflow-hidden ">
              {renderHistory}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col items-center">
        <span>In development...</span>
        <img
          src="https://i.imgur.com/kj3fL6c.png"
          alt="monkey"
          className="max-w-10"
        />
      </div> */}
    </>
  )
}

export default Crash
