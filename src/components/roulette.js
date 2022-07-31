import React, { useState } from "react"
import AxiosKani from "../utils/axiosKani"

const prizes = [
  {
    name: "Dogs Case",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22475212-6b9c-42c8-9e9e-ec412980781f/depngmn-3d94a57d-8ebb-4029-968c-62f3cf7562d2.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyNDc1MjEyLTZiOWMtNDJjOC05ZTllLWVjNDEyOTgwNzgxZlwvZGVwbmdtbi0zZDk0YTU3ZC04ZWJiLTQwMjktOTY4Yy02MmYzY2Y3NTYyZDIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.8Co9s_iMUicAV_sf9oiiYCwnymx0VMaMhzEW_6IV3c8",
    case: [
      {
        name: "Dog",
        image:
          "https://images.dog.ceo/breeds/mountain-bernese/n02107683_4494.jpg",
        probability: 0.1,
        id: 1,
        color: "yellow",
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_97.jpg",
        probability: 0.2,
        id: 2,
        color: "red",
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/african/n02116738_1739.jpg",
        probability: 0.2,
        id: 3,
        color: "red",
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/weimaraner/n02092339_6209.jpg",
        probability: 0.3,
        id: 4,
        color: "purple",
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/hound-ibizan/n02091244_2838.jpg",
        probability: 0.4,
        id: 5,
        color: "blue",
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/pug/n02110958_10186.jpg",
        probability: 0.4,
        id: 6,
        color: "blue",
      },
      {
        name: "Dog",
        image:
          "https://images.dog.ceo/breeds/ovcharka-caucasian/IMG_20200205_163615.jpg",
        probability: 0.4,
        id: 7,
        color: "blue",
      },
    ],
  },
  {
    name: "Scarlet Case",
    image:
      "https://i.kym-cdn.com/entries/icons/facebook/000/038/773/clownpiece.jpg",
    case: [
      {
        name: "Reimu",
        image:
          "https://en.touhouwiki.net/images/thumb/c/c8/Th18Reimu.png/278px-Th18Reimu.png",
        probability: 0.1,
        id: 8,
        color: "yellow",
      },
      {
        name: "Marisa",
        image:
          "https://en.touhouwiki.net/images/thumb/c/cd/Th18Marisa.png/278px-Th18Marisa.png",
        probability: 0.2,
        id: 9,
        color: "red",
      },
      {
        name: "Cirno",
        image:
          "https://en.touhouwiki.net/images/thumb/d/d5/Th14Cirno.png/235px-Th14Cirno.png",
        probability: 0.2,
        id: 10,
        color: "red",
      },
      {
        name: "Patchouli",
        image:
          "https://en.touhouwiki.net/images/thumb/9/99/Th105Patchouli.png/275px-Th105Patchouli.png",
        probability: 0.3,
        id: 11,
        color: "purple",
      },
      {
        name: "Sakuya",
        image:
          "https://en.touhouwiki.net/images/thumb/6/62/Th18Sakuya.png/276px-Th18Sakuya.png",
        probability: 0.4,
        id: 12,
        color: "blue",
      },
      {
        name: "Remilia",
        image:
          "https://en.touhouwiki.net/images/thumb/e/e7/Th105Remilia.png/275px-Th105Remilia.png",
        probability: 0.4,
        id: 13,
        color: "blue",
      },
    ],
  },
  {
    name: "Case 3",
    image: "https://i.imgur.com/Y8NPlJ2.png",
    case: [
      {
        name: "Lulu",
        image: "https://i.imgur.com/cXQ3ouo.png",
        probability: 0.1,
        id: 14,
        color: "yellow",
      },
      {
        name: "Flamengo",
        image: "https://i.imgur.com/gWRTVsj.png",
        probability: 0.2,
        id: 15,
        color: "yelloredw",
      },
      {
        name: "Neko Arc",
        image: "https://i.imgur.com/w1ZWflp.png",
        probability: 0.2,
        id: 16,
        color: "red",
      },
      {
        name: "Nando",
        image: "https://i.imgur.com/ghHRL4M.png",
        probability: 0.2,
        id: 17,
        color: "red",
      },
      {
        name: "Gahara",
        image: "https://i.imgur.com/d8idpfd.png",
        probability: 0.3,
        id: 18,
        color: "purple",
      },
      {
        name: "Gaguejadora",
        image: "https://i.imgur.com/X8oYaV7.png",
        probability: 0.4,
        id: 19,
        color: "blue",
      },
      {
        name: "mt foda",
        image: "https://i.imgur.com/FxYdtSW.png",
        probability: 0.4,
        id: 19,
        color: "blue",
      },
    ],
  },
]

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
      let className =
        "min-w-[150px] h-[120px] object-fill rounded border-b-4 border-" +
        prize.color +
        "-500"
      return (
        <img
          className={className}
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
