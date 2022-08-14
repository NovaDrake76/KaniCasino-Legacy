import { useState, useEffect } from "react"
import Cases from ".././cases.json"
import { Helmet } from "react-helmet"

function Profile(userInformation) {
  const [renderInventory, setRenderInventory] = useState(undefined)
  const prizes = Cases.prizes
  let imageLink

  useEffect(() => {
    if (userInformation.userInformation !== undefined) {
      setRenderInventory(
        <div className="flex flex-wrap justify-center gap-4">
          {userInformation.userInformation.inventory.map((key) => {
            for (const i of prizes) {
              for (const j of i.case) {
                //eslint-disable-next-line
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
    }
  }, [userInformation])

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
              <span>Your items:</span>

              <div className="w-full bg-slate-500 flex self-center  h-[2px]" />
              {userInformation.userInformation.inventory.length > 0 ? (
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
