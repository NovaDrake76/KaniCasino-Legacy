import React from "react"
import { GoogleLogout } from "react-google-login"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function Logout() {
  const onSuccess = () => {
    console.log("[Logout Sucess]")
  }

  return (
    <div id="SignOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  )
}

export default Logout
