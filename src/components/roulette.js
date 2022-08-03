import React, { useState } from "react"
import AxiosKani from "../utils/axiosKani"
import Cases from ".././cases.json"

const Roulette = () => {
  const [container, setContainer] = useState(0)
  const [prize, setPrize] = useState(null)
  const [prizeDefined, setPrizeDefined] = useState(false)
  const [prizeRouletteSpin, setPrizeRouletteSpin] = useState("")
  const [showPrize, setShowPrize] = useState(false)
  const [spining, setSpining] = useState(false)
  // const [randomPixelNumber, setRandomPixelNumber] = useState(
  //   Math.floor(Math.random() * (50 - 10 + 1)) + 10
  // )
  const prizes = Cases.prizes

  let prizeRenderAux
  let caseRender
  let prizeRoulette
  let prizeRouletteAux
  let prizeInfo
  let possiblePrizes

  const getRandomPrize = () => {
    setSpining(true)
    setPrizeDefined(false)
    setShowPrize(false)
    setPrizeRouletteSpin("-translate-x-[0px] duration-[10ms]")

    document.getElementById("spin").disabled = true
    document.getElementById("cases").disabled = true

    const randomPrize =
      prizes[container].case[
        Math.floor(Math.random() * prizes[container].case.length)
      ]
    setPrize(randomPrize)

    AxiosKani.create(localStorage.getItem("token"))
      .post(
        "/inventory",
        JSON.stringify({
          name: randomPrize.name,
        })
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    setPrizeDefined(true)

    setTimeout(() => {
      setPrizeRouletteSpin(
        "-translate-x-[6080px] sm:-translate-x-[6000px]  md:-translate-x-[6050px] xl:-translate-x-[5960px] 2xl:-translate-x-[5900px] 3xl:-translate-x-[5820px] duration-[5000ms]"
      )
    }, 0)

    setTimeout(() => {
      setShowPrize(true)
      document.getElementById("spin").disabled = false
      document.getElementById("cases").disabled = false
      setSpining(false)
    }, 5900)
  }

  caseRender = prizes.map((prize, index) => {
    return (
      <div
        id="cases"
        onClick={() => {
          if (spining === false) {
            setContainer(index)
            setPrizeDefined(false)
          }
        }}
        key={index}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <img
          className="w-[100px] h-[100px] object-cover rounded"
          src={`${prizes[index].image}`}
          alt={`${prizes[index].name}`}
        />
        <button>{prize.name}</button>
      </div>
    )
  })

  if (prizeDefined) {
    prizeRouletteAux = Array.from({ length: 45 }, () => {
      return prizes[container].case[
        Math.floor(Math.random() * prizes[container].case.length)
      ]
    })

    prizeRouletteAux[40] = prize

    prizeRoulette = prizeRouletteAux.map((prize, index) => {
      return (
        <img
          className={`min-w-[150px] h-[120px] object-fill rounded border-b-4 border-${prize.color}-500`}
          src={`${prize.image}`}
          alt={`${prize.name}`}
          key={index}
        />
      )
    })

    prizeInfo = (
      <div className="flex flex-col items-center justify-center">
        <h2>You won a {prize.name}!</h2>
        <img
          className="w-[250px] h-[250px] object-max-w-xs self-center rounded"
          src={`${prize.image}`}
          alt={`${prize.name}`}
        />{" "}
      </div>
    )

    prizeRenderAux = (
      <div className="flex flex-col justify-center gap-5 align-center">
        <div className=" overflow-hidden w-[80vw] md:w-[40vw]  self-center flex">
          <div className="absolute z-10 w-1 h-36 bg-gray-400 ml-[38%] md:ml-[20%] -mt-2" />
          <div
            className={`flex gap-1  ${prizeRouletteSpin} ease-[cubic-bezier(0.1, 0, 0.2, 1)]	`}
          >
            {prizeRoulette}
          </div>
        </div>
        {showPrize && prizeInfo}
      </div>
    )
  }

  possiblePrizes = prizes[container].case.map((prize, index) => {
    return (
      <img
        className="w-[110px] h-[110px]  object-fill rounded"
        src={`${prize.image}`}
        alt={`${prize.name}`}
        key={index}
      />
    )
  })

  return (
    <>
      <div className="flex flex-col justify-center  w-screen md:w-[80vw] gap-4 p-5 max-w-[1280px]">
        <h1 className="flex justify-center">Roulette</h1>
        <div className="flex flex-col gap-5 md:flex-row ">{caseRender}</div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{prizes[container].name}</h2>
          <div className="w-3/4 bg-slate-500 flex self-center  h-[2px]" />
          <div className="flex flex-col gap-4 md:flex-row">
            <img
              className="min-w-[120px] h-[120px] md:min-w-[300px] md:h-[300px] object-cover rounded"
              src={`${prizes[container].image}`}
              alt={`${prizes[container].name}`}
            />
            <div className="flex flex-col justify-center w-full gap-4 align-center">
              {prizeRenderAux}
              <div className="flex gap-4"></div>

              <div className="flex justify-center">
                <button
                  className="flex justify-center w-1/4 px-12 py-2 bg-blue-600 rounded"
                  id="spin"
                  onClick={getRandomPrize}
                >
                  Spin
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-5 mt-20">
            <h2>Case Content:</h2>
            <div className="w-3/4 bg-slate-500 flex self-center  h-[2px]" />

            <div className="flex flex-wrap justify-center gap-5">
              {possiblePrizes}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roulette
