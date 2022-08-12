import { Helmet } from "react-helmet"

const Coin = () => {
  let buttons
  let renderButtons

  buttons = [
    {
      text: "Heads",
      value: "heads",
      color: "green-600",
    },
    {
      text: "Tails",
      value: "tails",
      color: "red-500",
    },
  ]

  renderButtons = buttons.map((button) => {
    return (
      <button
        key={button.value}
        className={`flex items-center justify-center w-24 h-12 bg-${button.color} rounded `}
      >
        {button.text}
      </button>
    )
  })

  return (
    <>
      <Helmet>
        <title>Coin Flip | KaniCasino</title>
      </Helmet>
      <div className="flex justify-center">
        <div className="flex w-full max-w-6xl divide-x divide-gray-400 rounded h-80 bg-slate-500">
          <div className="flex flex-col gap-2 p-4 w-60">
            <div className="flex py-2 rounded bg-slate-600">
              <span className="flex items-center px-2 text-gray-200">$</span>
              <input
                type="number"
                className="w-5/6 p-1 text-base outline-none bg-slate-600"
                placeholder="Place your bet"
              />
            </div>
            <span className="flex justify-start text-base text-gray-200">
              Choose a face:
            </span>
            <div className="flex justify-between">{renderButtons}</div>
            <div className="pt-6">
              <button className="w-full p-2 transition-all duration-200 bg-blue-600 rounded hover:bg-blue-500">
                Flip Coin
              </button>
            </div>
          </div>
          <div className="flex p-4">game</div>
        </div>
      </div>
    </>
  )
}

export default Coin
