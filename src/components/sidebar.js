import React, { useState } from "react";

const Sidebar = (props) => {
    const [game, setGame] = useState(0);
    
    const pullGame = (game) => {

        if (window.location.pathname === '/roulette') {
            setGame(1);
        } else if (window.location.pathname === '/crash') {
            setGame(0);
        }
        props.func(game);
    }
    
    return(
        <div className="w-1/6 flex flex-col gap-3 border-gray-500 items-start p-5">
        <button onClick={() => {pullGame(1); window.history.replaceState(null, "KaniCasino - Crash", "/crash")}}>Crash</button>
        <button onClick={() => {pullGame(0); window.history.replaceState(null, "KaniCasino - Roulette", "/roulette")}}>Roulette</button>
      </div>
    )
}

export default Sidebar; 