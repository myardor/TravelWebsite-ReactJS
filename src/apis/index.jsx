import axios from "axios"

// Destinations
const getAttrDataAPI = () => {
  return axios({
    url: "http://47.95.39.183:3005/destinationData",
  })
}

// Main
const getMainDataAPI = () => {
  return axios({
    url: "http://47.95.39.183:3005/Data",
  })
}

// Slider
const getHotelDataAPI = () => {
  return axios({
    url: "http://47.95.39.183:3005/hotelData",
  })
}

// Tabs
const getRegionDataAPI = () => {
  const url1 = "http://47.95.39.183:3005/regionData"
  const url2 = "http://47.95.39.183:3005/cityData"
  const url3 = "http://47.95.39.183:3005/interestPlaceData"

  //   一次请求多份数据
  return axios.all([axios.get(url1), axios.get(url2), axios.get(url3)])
}

// 导出
export { getAttrDataAPI, getMainDataAPI, getHotelDataAPI, getRegionDataAPI }
