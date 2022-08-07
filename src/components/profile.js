import AxiosKani from "../utils/axiosKani"
import { useState, useEffect } from "react"
import Cases from ".././cases.json"

function Profile() {
  const info = JSON.parse(localStorage.getItem("info"))
  const token = localStorage.getItem("token")
  const [inventory, setInventory] = useState([])
  const prizes = Cases.prizes

  useEffect(() => {
    AxiosKani.create(token)
      .get("/inventory", {})
      .then((res) => {
        setInventory(res.data.data.inventory)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [token])

  if (info === null) {
    return <div>You must be logged in</div>
  } else {
    return (
      <div>
        <div className="flex flex-col gap-8 p-5 w-[80vw]">
          <div className="flex gap-4">
            <img
              src={info.imageUrl}
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
          </div>

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
                  key={key}
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
        </div>
      </div>
    )
  }
}

export default Profile
