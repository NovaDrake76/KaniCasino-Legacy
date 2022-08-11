import { useState } from "react"

const Coin = () => {
  const [coin, setCoin] = useState(null)

  const flipCoin = () => {
    setCoin(Math.floor(Math.random() * 2))
    console.log(coin)
  }

  return (
    <div>
      <button onClick={flipCoin}>Flip Coin</button>
      <p>{coin === 0 ? "Heads" : "Tails"}</p>
    </div>
  )
}

export default Coin
