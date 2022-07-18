import React, {useState} from "react";

import RoulettePro from "react-roulette-pro";
import 'react-roulette-pro/dist/index.css';

const prizes = [
    {
        id: '0',
        image: 'https://i.ibb.co/6Z6Xm9d/good-1.png',
    },
    {
        id: '1',
        image: 'https://i.ibb.co/Qbm8cNL/good-3.png',
        },
    {
        id: '2',
        image: 'https://i.ibb.co/5Tpfs6W/good-4.png',
        },
];

const reproductionArray = (array = [], length = 0) => [
    ...Array(length)
      .fill('_')
      .map(() => array[Math.floor(Math.random() * array.length)]),
  ];
  
  const prizeList = [
    ...prizes,
    ...reproductionArray(prizes, prizes.length * 3),
    ...prizes,
    ...reproductionArray(prizes, prizes.length),
  ];

const Roulette = () => {
    const [start, SetStart] = useState(false);

    const prizeIndex = prizes.length * 4 + 2;

    const handleStart = () => {
        setStart((prevState) => !prevState);
    }

    const handlePrizeDefined = () => {
        console.log('🥳 Prize defined! 🥳');
      };

    return (
        <div>
      <RoulettePro
        prizes={prizeList}
        prizeIndex={prizeIndex}
        start={start}
        onPrizeDefined={handlePrizeDefined}
      />
      <button onClick={handleStart}>Start</button>
        </div>
    );
}

export default Roulette;