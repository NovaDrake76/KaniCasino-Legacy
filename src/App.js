import "./App.css"
import Landing from "./pages/landing"
import React, { useEffect } from "react"
import { gapi } from "gapi-script"

const clientId =
  "1013639015004-4qhnf7ocuabkob525tpoddastpi47ico.apps.googleusercontent.com"

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      })
    }
    gapi.load("client:auth2", start)
  }, [])

  return <Landing />
}

export default App
