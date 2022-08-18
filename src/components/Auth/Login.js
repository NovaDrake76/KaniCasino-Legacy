import React from "react"
import { GoogleLogin } from "react-google-login"
import AxiosKani from "../../utils/axiosKani"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function Login({ updateUserInformation }) {
  const onSuccess = (res) => {
    AxiosKani.create()
      .post(
        "/login/google",
        JSON.stringify({
          idToken: res.tokenId,
        })
      )
      .then((res) => {
        localStorage.setItem("token", res.data.data.token)

        AxiosKani.create(res.data.data.token)
          .get("/user/me", {})
          .then((res) => {
            updateUserInformation(res.data.data)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const onFailure = (res) => {
    console.log("[Login Failure] currentUser: ", res)
  }

  return (
    <div id="SignInButton" aria-label="Sign in">
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
