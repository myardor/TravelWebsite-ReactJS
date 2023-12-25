import axios from "axios"

// 设置前置url
// axios.defaults.baseURL = "http://47.95.39.183:3005"
axios.defaults.baseURL = "http://localhost:3005"

// setUsrInfo
const setUsrInfo = data => {
  return axios({
    url: "/usrInfo",
    method: "post",
    data,
  })
}

// Destinations
const getAttrDataAPI = () => {
  return axios({
    url: "/destinationData",
  })
}

// Main
const getMainDataAPI = () => {
  return axios({
    url: "/Data",
  })
}

// Slider
const getHotelDataAPI = () => {
  return axios({
    url: "/hotelData",
  })
}

// Tabs
const getRegionDataAPI = () => {
  const url1 = "/regionData"
  const url2 = "/cityData"
  const url3 = "/interestPlaceData"

  //   一次请求多份数据
  return axios.all([axios.get(url1), axios.get(url2), axios.get(url3)])
}

// 导出
export {
  getAttrDataAPI,
  getMainDataAPI,
  getHotelDataAPI,
  getRegionDataAPI,
  setUsrInfo,
}
