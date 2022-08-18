import React from "react"
import { GoogleLogout } from "react-google-login"
import { MdLogout } from "react-icons/md"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function Logout() {
  const onSuccess = () => {
    window.location.reload(false)
    localStorage.removeItem("token")
  }

  return (
    <div id="SignOutButton" aria-label="Sign Out">
      <GoogleLogout
        clientId={clientId}
        disabledStyle={{ all: "none" }}
        render={(renderProps) => (
          <button
            className="flex items-center justify-center p-2"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <MdLogout />
          </button>
        )}
        onLogoutSuccess={onSuccess}
        icon={false}
      ></GoogleLogout>
    </div>
  )
}

export default Logout
