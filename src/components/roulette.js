import React, { useState, useEffect } from "react"

const prizes = [
  {
    name: "Dogs Case",
    case: [
      {
        name: "1st",
        image:
          "https://images.dog.ceo/breeds/mountain-bernese/n02107683_4494.jpg",
        probability: 0.1,
      },
      {
        name: "2st",
        image: "https://images.dog.ceo/breeds/terrier-wheaten/n02098105_97.jpg",
        probability: 0.1,
      },
      {
        name: "3st",
        image: "https://images.dog.ceo/breeds/african/n02116738_1739.jpg",
        probability: 0.2,
      },
      {
        name: "4st",
        image: "https://images.dog.ceo/breeds/weimaraner/n02092339_6209.jpg",
        probability: 0.2,
      },
      {
        name: "5st",
        image: "https://images.dog.ceo/breeds/hound-ibizan/n02091244_2838.jpg",
        probability: 0.2,
      },
      {
        name: "6st",
        image: "https://images.dog.ceo/breeds/pug/n02110958_10186.jpg",
        probability: 0.2,
      },
    ],
  },
  {
    name: "Scarlet Case",
    case: [
      {
        name: "1st",
        image:
          "https://en.touhouwiki.net/images/thumb/c/c8/Th18Reimu.png/278px-Th18Reimu.png",
        probability: 0.1,
      },
      {
        name: "2st",
        image:
          "https://en.touhouwiki.net/images/thumb/c/cd/Th18Marisa.png/278px-Th18Marisa.png",
        probability: 0.1,
      },
      {
        name: "3st",
        image:
          "https://en.touhouwiki.net/images/thumb/d/d5/Th14Cirno.png/235px-Th14Cirno.png",
        probability: 0.2,
      },
      {
        name: "4st",
        image:
          "https://en.touhouwiki.net/images/thumb/9/99/Th105Patchouli.png/275px-Th105Patchouli.png",
        probability: 0.2,
      },
      {
        name: "5st",
        image:
          "https://en.touhouwiki.net/images/thumb/6/62/Th18Sakuya.png/276px-Th18Sakuya.png",
        probability: 0.2,
      },
      {
        name: "6st",
        image:
          "https://en.touhouwiki.net/images/thumb/e/e7/Th105Remilia.png/275px-Th105Remilia.png",
        probability: 0.2,
      },
    ],
  },
  {
    name: "Case 3",
    case: [
      {
        name: "1st",
        image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
        probability: 0.1,
      },
      {
        name: "2st",
        image: "https://i.ibb.co/6Z6Xm9d/good-1.png",
        probability: 0.1,
      },
      {
        name: "3st",
        image: "https://i.ibb.co/T1M05LR/good-2.png",
        probability: 0.2,
      },
      {
        name: "4st",
        image: "https://i.ibb.co/Qbm8cNL/good-3.png",
        probability: 0.2,
      },
      {
        name: "5st",
        image: "https://i.ibb.co/5Tpfs6W/good-4.png",
        probability: 0.2,
      },
      {
        name: "6st",
        image: "https://i.ibb.co/64k8D1c/good-5.png",
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

  caseRender = prizes.map((prize, index) => {
    return (
      <button key={index} onClick={() => setContainer(index)}>
        {prize.name}
      </button>
    )
  })

  if (prizeDefined === true) {
    prizeRenderAux = (
      <div className="flex flex-col justify-center align-center">
        <h1>You won {prize.name}</h1>
        <img className="flex self-center w-2/4" src={prize.image} alt="prize" />
      </div>
    )
  }

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

  return (
    <>
      <div className="flex flex-col justify-center w-[80vw] gap-4">
        <div className="flex justify-center">Roulette</div>
        <div className="flex gap-5 ">{caseRender}</div>
        <button id="spin" onClick={getRandomPrize}>
          Spin
        </button>
        {prizeRenderAux}
      </div>
    </>
  )
}

export default Roulette
