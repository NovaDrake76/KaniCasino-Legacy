import React, { useState, useEffect } from 'react';

const prizes = [
  {
    name: '1st',
    image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
    probability: 0.1,
  },
  {
    name: '2st',
    image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
    probability: 0.1,
  },
  {
    name: '3st',
    image: 'https://i.ibb.co/T1M05LR/good-2.png',
    probability: 0.2,
  },
  {
    name: '4st',
    image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
    probability: 0.2,
  },
  {
    name: '5st',
    image: 'https://i.ibb.co/5Tpfs6W/good-4.png',
    probability: 0.2,
  },
  {
    name: '6st',
    image: 'https://i.ibb.co/64k8D1c/good-5.png',
    probability: 0.2,
  },
];


const Roulette = () => {
  const [prize, setPrize] = useState(null);

  const getRandomPrize = () => {
    setPrize(prizes[Math.floor(Math.random() * prizes.length)]);
    document.getElementById('spin').disabled = true;
    setTimeout(() => {
      document.getElementById('spin').disabled = false;

    }, 2000);
    }

  let prizeRenderAux;

  if (prize) {
    prizeRenderAux = <div>
      <h1>You won {prize.name}</h1>
      <img src={prize.image} alt="prize" />
    </div>
  }


  return (
    <>
      <div className="flex flex-col justify-center gap-4">
        <div className='flex'>Roulette</div>
          <button id='spin' onClick={getRandomPrize} >Spin</button>
                   {prizeRenderAux}

      </div>
    </>
  );
};



export default Roulette;