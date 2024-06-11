import _axios from "axios"

function createAxios() {
  // 检测是否是 http 页面  https端口请求 522
  if (window.location.protocol === "http:") {
    return _axios.create({
      baseURL: "https://localhost:522/",
    })
  }
  // http 端口请求 521
  return _axios.create({
    baseURL: "http://localhost:521/",
  })
}

export const axios = createAxios();

const getIdentityCard = async () => {
  return (await axios.get("/getRandomIdentityCard")).data
}

export {
  getIdentityCard
}
