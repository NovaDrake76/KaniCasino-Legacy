import React, { useState } from "react"
import AxiosKani from "../../utils/axiosKani"
import Cases from "../../cases.json"
import Helmet from "react-helmet"

const Roulette = ({ updateUserInformation }) => {
  const [container, setContainer] = useState(0)
  const [prize, setPrize] = useState(null)
  const [prizeDefined, setPrizeDefined] = useState(false)
  const [prizeRouletteSpin, setPrizeRouletteSpin] = useState("")
  const [showPrize, setShowPrize] = useState(false)
  const [spining, setSpining] = useState(false)
  const prizes = Cases.prizes

  let prizeRenderAux,
    caseRender,
    prizeRoulette,
    prizeRouletteAux,
    prizeInfo,
    possiblePrizes,
    probability,
    randomNumber,
    rouletteContainer

  const getRandomPrize = () => {
    setSpining(true)
    setPrizeDefined(false)
    setShowPrize(false)
    setPrizeRouletteSpin("-translate-x-[0px] duration-[10ms]")

    document.getElementById("spin").disabled = true
    document.getElementById("cases").disabled = true

    probability = prizes[container].case.map((item) => [
      item.probability * 10,
      item,
    ])

    randomNumber =
      Math.floor(
        Math.random() *
          (probability[probability.length - 1][0] - probability[0][0] + 1)
      ) + probability[0][0]

    for (let i = 0; i < probability.length; i++) {
      if (randomNumber <= probability[i][0]) {
        prizeRenderAux = probability[i][1]

        break
      }
    }
    setPrize(prizeRenderAux)

    AxiosKani.create(localStorage.getItem("token"))
      .post(
        "/inventory",
        JSON.stringify({
          name: prizeRenderAux.name,
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

    setPrizeDefined(true)

    setTimeout(() => {
      setPrizeRouletteSpin(
        "-translate-x-[6080px] sm:-translate-x-[6000px]  md:-translate-x-[6050px] xl:-translate-x-[5960px] 2xl:-translate-x-[5900px] 3xl:-translate-x-[5820px] 4xl:-translate-x-[5760px] duration-[5000ms]"
      )
    }, 11)

    setTimeout(() => {
      setSpining(false)
      setShowPrize(true)
      document.getElementById("spin").disabled = false
      document.getElementById("cases").disabled = false
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
      >
        <img
          className="w-[100px] h-[100px] object-cover rounded cursor-pointer hover:scale-110 transition-all duration-150"
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
          className={`min-w-[150px] bg-gray-400 bg-opacity-25 bg- h-[120px] object-fill rounded border-b-4 border-${prize.color}-500`}
          src={`${prize.image}`}
          alt={`${prize.name}`}
          key={index}
        />
      )
    })

    prizeInfo = (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl ">You won a {prize.name}!</h2>
        <img
          className="self-center rounded max-h-[300px] object-max-w-xs"
          src={`${prize.image}`}
          alt={`${prize.name}`}
        />
      </div>
    )

    if (spining) {
      rouletteContainer = (
        <div className="relative overflow-hidden w-[80vw] md:w-[40vw]  self-center flex">
          <div className="absolute z-10 w-[2px] h-36 bg-blue-200 ml-[50%] -mt-2" />
          <div
            className={`flex gap-1  ${prizeRouletteSpin} ease-[cubic-bezier(0.1, 0, 0.2, 1)]	`}
          >
            {prizeRoulette}
          </div>
        </div>
      )
    }

    prizeRenderAux = (
      <div className="flex flex-col justify-center gap-5 align-center">
        {rouletteContainer}
        {showPrize && prizeInfo}
      </div>
    )
  }

  possiblePrizes = prizes[container].case.map((prize, index) => {
    return (
      <img
        className={`w-[150px] h-[110px] border-b-4 border-${prize.color}-500 bg-gray-400 bg-opacity-25 object-scale-down rounded`}
        src={`${prize.image}`}
        alt={`${prize.name}`}
        key={index}
      />
    )
  })

  return (
    <>
      <Helmet>
        <title>Roulette | KaniCasino</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center  w-screen md:w-[80vw] gap-4 p-5 max-w-[1280px]">
          <h2 className="flex justify-center text-xl md:justify-start">
            New and trending cases
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-5 md:justify-start md:flex-row">
            {caseRender}
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-bold">{prizes[container].name}</h2>
            <div className="w-3/4 bg-slate-500 flex self-center  h-[2px]" />
            <div className="flex flex-col items-center justify-around gap-4 md:flex-row">
              <div className="flex flex-col items-center w-2/5 gap-2">
                <img
                  className="w-[150px] h-[150px] md:min-w-[300px] md:h-[300px] object-cover rounded "
                  src={`${prizes[container].image}`}
                  alt={`${prizes[container].name}`}
                />
                <span className="text-xl ">
                  {prizes[container].description}
                </span>
              </div>
              <div className="flex flex-col justify-center w-3/5 gap-4 align-center">
                {prizeRenderAux}

                <div className="flex justify-center">
                  <button
                    className="flex justify-center w-1/4 px-12 py-2 text-base transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500"
                    id="spin"
                    onClick={getRandomPrize}
                  >
                    {spining ? "Spinning..." : "Spin"}
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
      </div>
    </>
  )
}

export default Roulette
