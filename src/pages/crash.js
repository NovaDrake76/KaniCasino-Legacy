import React from "react"
import { Helmet } from "react-helmet"

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
    <>
      <Helmet>
        <title>Crash | KaniCasino</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <span>In development...</span>
        <img
          src="https://i.imgur.com/kj3fL6c.png"
          alt="monkey"
          className="max-w-10"
        />
      </div>
    </>
  )
}

export default Crash
