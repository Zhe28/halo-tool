import _axios from "axios"

export const axios = _axios.create({
  baseURL: "http://localhost:521/",
})

const getIdentityCard = async () => {
  return (await axios.get("/getRandomIdentityCard")).data
}

export {
  getIdentityCard
}
