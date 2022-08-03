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

  return (
    <div>
      <div className="flex flex-col p-5">
        <div className="flex gap-4">
          <img
            src={info.imageUrl}
            alt="profile"
            className="w-32 h-32 rounded-full"
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">{info.name}</h1>
            <p className="text-sm">{info.email}</p>
          </div>
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
              <div className="flex flex-col items-center gap-2">
                <img
                  src={imageLink}
                  alt="case"
                  className="w-32 h-32 rounded "
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

export default Profile
