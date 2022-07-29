import React from "react"
import { GoogleLogin } from "react-google-login"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function Login() {
  const onSuccess = (res) => {
    console.log("[Login Sucess] currentUser: ", res.profileObj)
  }

  const onFailure = (res) => {
    console.log("[Login Failure] currentUser: ", res)
  }

  return (
    <div id="SignInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  )
}

export default Login
