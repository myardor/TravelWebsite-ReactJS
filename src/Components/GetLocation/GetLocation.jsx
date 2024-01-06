import React from "react"
import { Map } from "react-amap"

function GetLocation() {
  const amapKey = "1ef10e359229755d42a7e6536b4613ef"

  const events = {
    created: mapInstance => {
      // 在这里你可以使用AMap对象
      const AMap = window.AMap
      const geolocation = new AMap.Geolocation({
        // 配置选项
      })
      mapInstance.addControl(geolocation)
    },
  }

  return (
    <Map
      amapkey={amapKey}
      events={events}
      style={{ width: "100%", height: "100%" }}
    />
  )
}

export default GetLocation
