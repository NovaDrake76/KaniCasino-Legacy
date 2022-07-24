import React, { useState, useEffect } from "react"

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
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_97.jpg",
        probability: 0.1,
        id: 2,
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/african/n02116738_1739.jpg",
        probability: 0.2,
        id: 3,
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/weimaraner/n02092339_6209.jpg",
        probability: 0.2,
        id: 4,
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/hound-ibizan/n02091244_2838.jpg",
        probability: 0.2,
        id: 5,
      },
      {
        name: "Dog",
        image: "https://images.dog.ceo/breeds/pug/n02110958_10186.jpg",
        probability: 0.2,
        id: 6,
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
        id: 7,
      },
      {
        name: "Marisa",
        image:
          "https://en.touhouwiki.net/images/thumb/c/cd/Th18Marisa.png/278px-Th18Marisa.png",
        probability: 0.1,
        id: 8,
      },
      {
        name: "Cirno",
        image:
          "https://en.touhouwiki.net/images/thumb/d/d5/Th14Cirno.png/235px-Th14Cirno.png",
        probability: 0.2,
        id: 9,
      },
      {
        name: "Patchouli",
        image:
          "https://en.touhouwiki.net/images/thumb/9/99/Th105Patchouli.png/275px-Th105Patchouli.png",
        probability: 0.2,
        id: 10,
      },
      {
        name: "Sakuya",
        image:
          "https://en.touhouwiki.net/images/thumb/6/62/Th18Sakuya.png/276px-Th18Sakuya.png",
        probability: 0.2,
        id: 11,
      },
      {
        name: "Yuyuko",
        image:
          "https://en.touhouwiki.net/images/thumb/e/e7/Th105Remilia.png/275px-Th105Remilia.png",
        probability: 0.2,
        id: 12,
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
      },
      {
        name: "Flamengo",
        image: "https://i.imgur.com/gWRTVsj.png",
        probability: 0.1,
      },
      {
        name: "Neko Arc",
        image: "https://i.imgur.com/w1ZWflp.png",
        probability: 0.2,
      },
      {
        name: "Nando",
        image: "https://i.imgur.com/ghHRL4M.png",
        probability: 0.2,
      },
      {
        name: "Gahara",
        image: "https://i.imgur.com/d8idpfd.png",
        probability: 0.2,
      },
      {
        name: "Gaguejadora",
        image: "https://i.imgur.com/X8oYaV7.png",
        probability: 0.2,
      },
    ],
  },
]

const Roulette = () => {
  const [container, setContainer] = useState(0)
  const [prize, setPrize] = useState(null)
  const [prizeDefined, setPrizeDefined] = useState(false)
  let prizeRenderAux
  let caseRender
  let prizeRoulette

  const getRandomPrize = () => {
    setPrizeDefined(false)
    document.getElementById("spin").disabled = true

    setPrize(
      prizes[container].case[
        Math.floor(Math.random() * prizes[container].case.length)
      ]
    )

    setPrizeDefined(true)

    setTimeout(() => {
      document.getElementById("spin").disabled = false
    }, 300)
  }

  caseRender = prizes.map((prize, index) => {
    return (
      <div
        onClick={() => {
          setContainer(index)
          setPrizeDefined(false)
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

  prizeRoulette = prizes[container].case.map((prize, index) => {
    return (
      <img
        className="min-w-[70px] h-[70px] object-fill rounded"
        src={`${prize.image}`}
        alt={`${prize.name}`}
      />
    )
  })

  if (prizeDefined === true) {
    prizeRenderAux = (
      <div className="flex flex-col justify-center align-center">
        <div className="flex w-[350px] self-center overflow-hidden gap-1">
          {prizeRoulette}
        </div>
        <h2>You won a {prize.name}!</h2>
        <img
          className="w-[150px] h-[150px] object-max-w-xs self-center rounded"
          src={`${prize.image}`}
          alt={`${prize.name}`}
        />{" "}
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col justify-center w-[80vw] gap-4 p-5 ">
        <h1 className="flex justify-center">Roulette</h1>
        <div className="flex gap-5 ">{caseRender}</div>
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">{prizes[container].name}</h2>
          <div className="w-3/4 bg-slate-500 flex self-center  h-[2px]" />
          <div className="flex items-center gap-3">
            <img
              className="min-w-[300px] h-[300px] object-cover rounded"
              src={`${prizes[container].image}`}
              alt={`${prizes[container].name}`}
            />
            <div className="flex flex-col justify-center w-full gap-4 align-center">
              {prizeRenderAux}

              <div className="flex justify-center">
                <button
                  className="w-1/4 px-12 py-2 bg-blue-600 rounded"
                  id="spin"
                  onClick={getRandomPrize}
                >
                  Spin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Roulette
