import React, { useEffect, useState } from "react"

const Crash = () => {
  const [count, setCount] = useState(1)
  // const [crasher, setCrasher] = useState()
  // const [stopGame, setStopGame] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 0.01)
    }, 100)
    setCount(parseFloat(count.toFixed(2)))

    return () => clearInterval(interval)
  }, [count])

  return <div>{count}</div>
}

export default Crash
