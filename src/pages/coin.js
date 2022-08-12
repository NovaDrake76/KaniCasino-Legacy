import { Helmet } from "react-helmet"

const Coin = () => {
  return (
    <>
      <Helmet>
        <title>Coin Flip | KaniCasino</title>
      </Helmet>
      <div className="flex divide-x divide-gray-400 rounded h-80 bg-slate-500">
        <div className="flex w-1/4 p-4">menu</div>
        <div className="flex p-4">game</div>
      </div>
    </>
  )
}

export default Coin
