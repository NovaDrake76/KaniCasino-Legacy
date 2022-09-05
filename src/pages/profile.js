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
  const [totalItems, setTotalItems] = useState(0)

  const prizes = Cases.prizes
  let renderCases

  useEffect(() => {
    getInventory()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInformation, prizes])

  function getInventory() {
    if (userInformation.userInformation !== undefined) {
      setInventory([])
      setTotalItems(0)
      userInformation.userInformation.inventory.reverse().map((key) => {
        for (const i of prizes) {
          for (const j of i.case) {
            if (j.name === key) {
              setInventory((prevState) => [...prevState, j])
              setTotalItems((prevState) => prevState + 1)
            }
          }
        }
        return null
      })
    }
  }

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

  renderCases = prizes.map((key) => {
    return (
      <button
        key={key.name}
        onClick={() => chooseCase(key.name)}
        className={
          "border p-2 border-gray-500 hover:border-gray-300 transition-all hover:text-white text-gray-300 rounded"
        }
      >
        <span>{key.name}</span>
      </button>
    )
  })

  function chooseCase(e) {
    //get the case from prizes with the name of the choosen case
    const caseToRender = prizes.find((key) => key.name === e)

    if (userInformation.userInformation !== undefined) {
      setInventory([])
      userInformation.userInformation.inventory.map((key) => {
        for (const j of caseToRender.case) {
          if (j.name === key) {
            setInventory((prevState) => [...prevState, j])
          }
        }
        return null
      })
    }
  }

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
              <div className="flex flex-col items-start ">
                <span className="text-xs text-gray-400">{totalItems}</span>
                <span>Your items</span>
              </div>

              <div className="w-full bg-slate-500 flex self-center  h-[2px]" />
              <div className="flex flex-wrap justify-center gap-4 py-2 text-gray-300 ">
                <button
                  onClick={sortByName}
                  className="text-2xl hover:text-white"
                >
                  {sortName === false ? <BsSortAlphaDown /> : <BsSortAlphaUp />}
                </button>
                <button
                  onClick={sortByRarity}
                  className="text-2xl hover:text-white"
                >
                  {sortRarity === false ? <BsStars /> : <TbStarOff />}
                </button>
                <button
                  onClick={getInventory}
                  className={
                    "hover:text-white border p-2 border-gray-500 hover:border-gray-300 transition-all text-gray-300 rounded"
                  }
                >
                  All
                </button>
                {renderCases}
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
