// import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
// import AxiosKani from "../utils/axiosKani"
// import { ToastContainer, toast, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function Blackjack(userInformation) {
    // const [startGame, setStartGame] = useState(false)
    // const [endGame, setEndGame] = useState(false)
    // const [placeBet, setPlaceBet] = useState(false)
    // const [bet, setBet] = useState(0)
    // const [money, setMoney] = useState(0)
    // //eslint-disable-next-line
    // const [disableButton, setDisableButton] = useState(false)
    // const token = localStorage.getItem("token")


    // const preventMinus = (e) => {
    //     if (e.code === "Minus") {
    //       e.preventDefault()
    //     }
    //   }

    //   const start = () => {
    //     if (placeBet > money) {
    //       toast.error("You don't have enough money!", {
    //         position: "bottom-right",
    //         autoClose: 1000,
    //         hideProgressBar: true,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         theme: "dark",
    //         transition: Slide,
    //       })
    //     } else {
    //       setStartGame(true)
    //       if (placeBet.length > 0) {
    //         setBet(placeBet)
    //         setMoney(money - placeBet)
    //       }
    //     }
    //   }

    return (
      <>
        <Helmet>
          <title>Blackjack | KaniCasino</title>
        </Helmet>
        {/* <div className="flex justify-center text-base">
        <div className="flex flex-col-reverse w-full max-w-3xl md:divide-x items-center md:items-start divide-gray-400 rounded md:flex-row bg-slate-500">
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
                ""
              ) : (
                <button
                  id="start"
                  className="w-full p-2 transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500"
                  disabled={disableButton}
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
                hello
            </div>

          </div>
        </div>
      </div> */}

             <div className="flex flex-col items-center">
        <span>In development...</span>
        <img
          src="https://i.imgur.com/kj3fL6c.png"
          alt="monkey"
          className="max-w-10"
        />
      </div> 

      </>
    )

}

export default Blackjack
