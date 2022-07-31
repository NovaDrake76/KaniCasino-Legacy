import { Axios } from "axios"

export default class AxiosKani {
  static create(token) {
    return new Axios({
      baseURL: "https://kanicasino.herokuapp.com",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: token,
      },
      transformResponse: (data = "{}") => {
        try {
          return JSON.parse(data)
        } catch (error) {
          console.log(error)
          return {}
        }
      },
    })
  }
}
