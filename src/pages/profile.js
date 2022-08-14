import AxiosKani from "../utils/axiosKani"
import { useState, useEffect } from "react"
import Cases from ".././cases.json"
import { Helmet } from "react-helmet"

function Profile(userInformation) {
  const token = localStorage.getItem("token")
  const [info, setInfo] = useState([])
  const [inventory, setInventory] = useState([])
  const [Loading, setLoading] = useState(true)
  const prizes = Cases.prizes
  let imageLink

  useEffect(() => {
    AxiosKani.create(token)
      .get("/user/me", {})
      .then((res) => {
        setInfo(res.data.data.profile)
        setInventory(res.data.data.inventory)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [token])

  const renderInventory = () => {
    if (Loading) {
      return <div>Loading...</div>
    }
    if (inventory.length > 0) {
      return (
        <div className="flex flex-wrap justify-center gap-4">
          {inventory.map((key) => {
            for (const i of prizes) {
              for (const j of i.case) {
                if (j.name === key) imageLink = j
              }
            }
            return (
              <div
                key={key + Math.random()}
                className="flex max-w-[150px]  flex-col items-center gap-2"
              >
                <img
                  className={`w-[150px] h-[110px] border-b-4 border-${imageLink.color}-500  bg-gray-400 bg-opacity-25 object-scale-down rounded`}
                  src={`${imageLink.image}`}
                  alt={`${imageLink.name}`}
                />
                <p className="text-sm">{key}</p>
              </div>
            )
          })}
        </div>
      )
    } else {
      return (
        <div className="flex items-center gap-3">
          <div className="text-xl">Empty.</div>
        </div>
      )
    }
  }

  if (token === null) {
    return <div>You must be logged in</div>
  } else {
    return (
      <>
        <Helmet>
          <title>Profile | KaniCasino</title>
        </Helmet>
        <div className="flex justify-center">
          <div className="flex flex-col gap-8 p-5 w-[80vw]">
            <div className="flex gap-4">
              <img
                src={info.picture}
                alt="profile"
                className="w-32 h-32 rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl">{info.name}</h2>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <span>Your items:</span>

              <div className="w-full bg-slate-500 flex self-center  h-[2px]" />
              {renderInventory()}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Profile
