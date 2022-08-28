import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"

const Crash = () => {
  const [startGame, setStartGame] = useState(false)
  const [endGame, setEndGame] = useState(false)
  const [placeBet, setPlaceBet] = useState(false)
  const [bet, setBet] = useState(0)
  const [money, setMoney] = useState(0)
  const [multiplier, setMultiplier] = useState(1.0)
  const [multiplierLembrance, setMultiplierLembrance] = useState(null)
  const [intervalPeriod, setIntervalPeriod] = useState(100)

  let renderCrash

  useEffect(() => {
    if (startGame) {
      let randomNumber = Math.floor(Math.random() * 100)

      const interval = setInterval(() => {
        if (multiplier < randomNumber) {
          setMultiplier((multiplier) => multiplier + 0.01)
        } else {
          clearInterval(interval)
          setEndGame(true)
          setMultiplierLembrance(multiplier)
        }

        if (intervalPeriod > 10) {
          setIntervalPeriod(
            (intervalPeriod) => intervalPeriod - intervalPeriod * 0.001
          )
        }
      }, intervalPeriod)
      return () => clearInterval(interval)
    }
  }, [startGame, intervalPeriod, multiplier])

  useEffect(() => {
    if (endGame) {
      setMultiplier(1.0)
      setIntervalPeriod(100)
      setStartGame(false)
      setTimeout(() => {
        document.getElementById("start").disabled = false
      }, 1000)
    }
  }, [endGame])

  const start = () => {
    setStartGame(true)
    document.getElementById("start").disabled = true

    if (placeBet.length > 0) {
      setBet(placeBet)
      setMoney(money - placeBet)
    }
  }

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
    renderCrash = <span>Crashed! {multiplierLembrance.toFixed(2)}</span>
  }

  return (
    <>
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
                <button className="w-full p-2 transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500">
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
              <div className="flex self-end h-6 max-w-[500px] gap-2 overflow-hidden "></div>
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
