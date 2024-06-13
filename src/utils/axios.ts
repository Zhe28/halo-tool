import _axios from "axios"

function createAxios() {
  let baseUrl = ""
  const HOST = window.location.hostname
  const protocol = window.location.protocol

  // 检测是否是 http 页面  https端口请求 522  http端口请求 521
  baseUrl &&
  window.location.protocol === "https:"
    ? baseUrl = `${protocol}//${HOST}:522/`
    : baseUrl = `${protocol}//${HOST}:521/`;

  // console.log(baseUrl)
  return _axios.create({
    baseURL: baseUrl
  })
}

export const axios = createAxios();

const getIdentityCard = async () => {
  return (await axios.get("/getRandomIdentityCard")).data
}

export {
  getIdentityCard
}
