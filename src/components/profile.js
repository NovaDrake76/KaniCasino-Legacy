import AxiosKani from "../utils/axiosKani"
import { useState, useEffect } from "react"
import Cases from ".././cases.json"

function Profile() {
  const token = localStorage.getItem("token")
  const [info, setInfo] = useState([])
  const [inventory, setInventory] = useState([])
  const [Loading, setLoading] = useState(true)
  const prizes = Cases.prizes

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
        <div className="flex flex-wrap gap-4">
          {inventory.map((key) => {
            let imageLink
            for (const i of prizes) {
              for (const j of i.case) {
                if (j.name === key) imageLink = j.image
              }
            }
            return (
              <div
                key={key + Math.random()}
                className="flex max-w-[150px]  flex-col items-center gap-2"
              >
                <img
                  src={imageLink}
                  alt="item"
                  className="w-[150px] h-[110px] rounded"
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

  if (info === null) {
    return <div>You must be logged in</div>
  } else {
    return (
      <div>
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
          <div className="flex flex-col items-start ">
            <span>Your items:</span>
            <div className="w-full bg-slate-500 flex self-center  h-[2px]" />
            {renderInventory()}
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
