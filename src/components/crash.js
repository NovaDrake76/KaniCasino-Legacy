import React, { useEffect, useState } from "react"

const Crash = () => {
  const [count, setCount] = useState(1)
  const [crasher, setCrasher] = useState()

  //generate a random number
  const randomNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  useEffect(() => {
    setCrasher(randomNumber())

    // while (count !== crasher) {
    //   setTimeout(() => {
    //     setCount(count + 0.01)
    //   }, 1000)
    // }

    setCount(parseFloat(count.toFixed(2)))
  }, [count, crasher])

  return (
    <div className="flex flex-col">
      <span>In development...</span>
      {count}
    </div>
  )
}

export default Crash
