import React from "react"

const Crash = () => {
  // const [count, setCount] = useState(1)
  // const [crasher, setCrasher] = useState()

  //generate a random number
  // const randomNumber = () => {
  //   return Math.floor(Math.random() * 100)
  // }

  // useEffect(() => {
  //   setCrasher(randomNumber())

  //   while (count !== crasher) {
  //     setTimeout(() => {
  //       setCount(count + 0.01)
  //     }, 1000)
  //   }

  //   setCount(parseFloat(count.toFixed(2)))
  // }, [count, crasher])

  return (
    <div className="flex flex-col items-center">
      <span>In development...</span>
      <img
        src="https://i.imgur.com/kj3fL6c.png"
        alt="monkey"
        className="max-w-10"
      />
    </div>
  )
}

export default Crash
