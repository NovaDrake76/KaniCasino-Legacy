import React, { useState, useCallback, useEffect } from "react";

const Sidebar = (props) => {
    const [game, setGame] = useState(0);
    
    useEffect(() => {
        props.func(game);
    }
    , [game]);
    
    return(
        <div className="w-1/6 flex flex-col gap-3 border-gray-500 items-start p-5">
        <button onClick={() => {setGame(0); }}>Crash</button>
        <button onClick={() => {setGame(1); }}>Roulette</button>
      </div>
    )
}

export default Sidebar;