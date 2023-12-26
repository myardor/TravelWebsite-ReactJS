import axios from "axios"

// 设置前置url
// axios.defaults.baseURL = "http://47.95.39.183:3005"
axios.defaults.baseURL = "http://localhost:3005"

// verifyUsrInfo
const verifyUsrInfoAPI = async username => {
  const res = await axios({
    url: `/usrInfo`,
    params: {
      phone: username.username,
    },
  })
  if (res.data[0] && res.data[0].password === username.password) {
    localStorage.setItem("nickname", res.data[0].nickname)
    return {
      message: "Login successfully! Will jump to homepage soon...",
      type: "success",
    }
  } else {
    return { message: "Incorrect username or password!", type: "error" }
  }
}

// setUsrInfo
const setUsrInfoAPI = data => {
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
  setUsrInfoAPI,
  verifyUsrInfoAPI,
}
