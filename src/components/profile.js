import AxiosKani from "../utils/axiosKani"
import { useState, useEffect } from "react"

function Profile() {
  const info = JSON.parse(localStorage.getItem("info"))
  const token = localStorage.getItem("token")
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    AxiosKani.create(token)
      .get("/inventory", {})
      .then((res) => {
        setInventory(res.data.data.inventory)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

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
          {inventory.map((key) => (
            <div>{key}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Profile
