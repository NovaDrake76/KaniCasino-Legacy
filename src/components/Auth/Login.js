import React from "react"
import { GoogleLogin } from "react-google-login"
import AxiosKani from "../../utils/axiosKani"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function Login() {
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
      })
      .catch((err) => {
        console.log(err)
      })
    setTimeout(() => {
      window.location.reload()
    }, 800)
  }

  const onFailure = (res) => {
    console.log("[Login Failure] currentUser: ", res)
  }

  // function componentDidMount() {
  //   const reloadCount = sessionStorage.getItem("reloadCount")
  //   if (reloadCount < 1) {
  //     sessionStorage.setItem("reloadCount", String(reloadCount + 1))
  //     window.location.reload()
  //   } else {
  //     sessionStorage.removeItem("reloadCount")
  //   }
  // }

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
