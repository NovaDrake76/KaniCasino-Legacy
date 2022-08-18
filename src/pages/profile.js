import { useState, useEffect } from "react"
import Cases from ".././cases.json"
import { Helmet } from "react-helmet"
import { BsSortAlphaDown, BsSortAlphaUp, BsStars } from "react-icons/bs"
import { TbStarOff } from "react-icons/tb"

function Profile(userInformation) {
  const [inventory, setInventory] = useState([])
  const [renderInventory, setRenderInventory] = useState("")
  const [sortName, setSortName] = useState(false)
  const [sortRarity, setSortRarity] = useState(false)

  const prizes = Cases.prizes

  useEffect(() => {
    if (userInformation.userInformation !== undefined) {
      userInformation.userInformation.inventory.map((key) => {
        for (const i of prizes) {
          for (const j of i.case) {
            if (j.name === key) {
              setInventory((prevState) => [...prevState, j])
            }
          }
        }
        return null
      })
    }
  }, [userInformation, prizes])

  function sortByName() {
    if (sortName === false) {
      setInventory(inventory.sort((a, b) => a.name.localeCompare(b.name)))
      setSortName(true)
    } else {
      setInventory(inventory.sort((a, b) => b.name.localeCompare(a.name)))
      setSortName(false)
    }
  }

  function sortByRarity() {
    if (sortRarity === false) {
      setInventory(inventory.sort((a, b) => b.color.localeCompare(a.color)))
      setSortRarity(true)
    } else {
      setInventory(inventory.sort((a, b) => a.color.localeCompare(b.color)))
      setSortRarity(false)
    }
  }

  useEffect(() => {
    if (userInformation.userInformation !== undefined) {
      setRenderInventory(
        <div className="flex flex-wrap justify-center gap-4">
          {inventory.map((key) => {
            return (
              <div
                key={key.probability + Math.random()}
                className="flex max-w-[150px]  flex-col items-center gap-2"
              >
                <img
                  className={`w-[150px] h-[110px] border-b-4 border-${key.color}-500  bg-gray-400 bg-opacity-25 object-scale-down rounded`}
                  src={`${key.image}`}
                  alt={`${key.name}`}
                />
                <p className="text-sm">{key.name}</p>
              </div>
            )
          })}
        </div>
      )
    }
  }, [inventory, sortName, sortRarity, userInformation.userInformation])

  if (userInformation.userInformation !== undefined) {
    return (
      <>
        <Helmet>
          <title>Profile | KaniCasino</title>
        </Helmet>
        <div className="flex justify-center">
          <div className="flex flex-col gap-8 p-5 w-[80vw]">
            <div className="flex gap-4">
              <img
                src={userInformation.userInformation.profile.picture}
                alt="profile"
                className="w-32 h-32 rounded-full"
              />
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl">
                  {userInformation.userInformation.profile.name}
                </h2>
              </div>
            </div>

            <div className="flex flex-col items-start gap-3">
              <span>Your items</span>

              <div className="w-full bg-slate-500 flex self-center  h-[2px]" />
              <div className="flex gap-4 py-4">
                <button onClick={sortByName} className="text-2xl ">
                  {sortName === false ? <BsSortAlphaDown /> : <BsSortAlphaUp />}
                </button>
                <button onClick={sortByRarity} className="text-2xl">
                  {sortRarity === false ? <BsStars /> : <TbStarOff />}
                </button>
              </div>
              {inventory.length > 0 ? (
                renderInventory
              ) : (
                <div className="flex items-center gap-3">
                  <div className="text-xl">Empty.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <div>You must be logged in</div>
  }
}

export default Profile
