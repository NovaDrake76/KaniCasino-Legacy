import { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { ToastContainer, toast, Slide } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Coin = () => {
  const [selectedFace, setSelectedFace] = useState(null)
  const [coin, setCoin] = useState([{ name: "" }])
  const [history, setHistory] = useState([])
  const [historyAux, setHistoryAux] = useState(false)
  const [startGame, setStartGame] = useState(false)

  const toastWin = () =>
    toast.success("You win!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
      transition: Slide,
    })
  const toastLose = () =>
    toast.error("You lose!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      theme: "dark",
      transition: Slide,
    })

  let buttons
  let renderButtons
  let renderSelectedFace
  let renderHistory

  const flipCoin = () => {
    setStartGame(true)
    document.getElementById("flip").disabled = true

    let randomNumber = Math.floor(Math.random() * 2)
    if (randomNumber === 0) {
      setCoin([
        {
          name: "Heads",
          color: "green-600",
        },
      ])
    } else {
      setCoin([
        {
          name: "Tails",
          color: "red-500",
        },
      ])
    }
    if (history.length >= 16) {
      history.shift()
    }
    setHistoryAux(true)
    setTimeout(() => {
      document.getElementById("flip").disabled = false
    }, 1000)
  }

  useEffect(() => {
    if (historyAux === true) {
      setHistory([
        ...history,
        { face: coin[0].name, id: Math.random(), color: coin[0].color },
      ])
      setHistoryAux(false)
    }
  }, [coin, historyAux, history])

  useEffect(() => {
    if (startGame === true) {
      if (selectedFace === coin[0].name) {
        toastWin()
      } else {
        toastLose()
      }
      setStartGame(false)
    }
  }, [coin, selectedFace, startGame])

  buttons = [
    {
      text: "Heads",
      value: "Heads",
      color: "green-600",
    },
    {
      text: "Tails",
      value: "Tails",
      color: "red-500",
    },
  ]

  renderButtons = buttons.map((button) => {
    return (
      <button
        key={button.value}
        className={`flex items-center justify-center w-24 h-12 bg-${button.color} rounded border-white active:border `}
        onClick={() => {
          setSelectedFace(button.value)
        }}
      >
        {button.text}
      </button>
    )
  })

  renderHistory = history.map((item) => {
    return (
      <div key={item.id} className={`w-6 h-6 bg-${item.color} rounded-full`}>
        {item.result}
      </div>
    )
  })

  renderSelectedFace = () => {
    if (selectedFace === "Heads") {
      return (
        <div className="flex gap-1">
          You are betting on
          <span className="font-bold text-green-600">Heads</span>
        </div>
      )
    } else {
      return (
        <div className="flex gap-1">
          You are betting on
          <span className="font-bold text-red-500">Tails</span>
        </div>
      )
    }
  }

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
        <title>Coin Flip | KaniCasino</title>
      </Helmet>
      <div className="flex justify-center text-base">
        <div className="flex flex-col-reverse w-full max-w-3xl divide-x divide-gray-400 rounded md:flex-row bg-slate-500">
          <div className="flex flex-col h-full gap-2 p-4 max-h-72">
            <div className="flex py-2 rounded bg-slate-600">
              <span className="flex items-center px-2 text-gray-200">$</span>
              <input
                type="number"
                className="w-5/6 p-1 outline-none bg-slate-600"
                placeholder="Place your bet"
              />
            </div>
            <span className="flex justify-start text-gray-200">
              Choose a face:
            </span>
            <div className="flex justify-around gap-2 md:justify-between">
              {renderButtons}
            </div>
            <div className="flex flex-col justify-end h-full">
              <span className="flex py-1 text-sm text-gray-200">
                {selectedFace ? renderSelectedFace() : "Select a face"}
              </span>
              <button
                id="flip"
                className="w-full p-2 transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500"
                onClick={() => {
                  flipCoin()
                }}
              >
                Flip Coin
              </button>
            </div>
          </div>
          <div className="flex flex-col w-full h-full divide-y divide-gray-400">
            <div className="flex p-4">
              <div className="flex items-center justify-center w-full rounded bg-slate-600 max-h-64">
                <img
                  src={`/images/coin${coin[0].name}.png`}
                  alt="coin"
                  className="h-full p-2 transition-all duration-200 "
                />
              </div>
            </div>
            <div className="flex-col hidden gap-2 p-4  lg:flex">
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
    </>
  )
}

export default Coin
