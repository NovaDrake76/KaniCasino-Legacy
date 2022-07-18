import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Crash from './components/crash';
import Roulette from './components/roulette';
import React, { useState} from 'react';

function App() {

  const [game, setGame] = useState(0);
  const pullGame = (game) => {
    setGame(game);
  }
    
  const renderGame = game => (game ?  <Crash/> : <Roulette/>);
  const Content = ({game}) => <div>{renderGame(game)}</div>

    return (
      <div className="App flex flex-col">
        <Navbar />
        <div className="w-full h-screen bg-slate-600 flex divide-x divide-gray-500">
          <Sidebar func={pullGame}/>
          <div className="flex">
            <Content game={game} />
          </div>
          
        </div>
      </div>
    );
}

export default App;
