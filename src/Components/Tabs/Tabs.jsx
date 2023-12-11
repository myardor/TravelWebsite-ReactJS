import React, { useEffect, useState } from "react"
import "./Tabs.css"
import axios from "axios"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1")
  const [regionData, setRegionData] = useState([])
  const [cityData, setCityData] = useState([])
  const [placesData, setPlaceData] = useState([])

  const handleTabClick = tabId => {
    setActiveTab(tabId)
  }

  useEffect(() => {
    const getRegionData = async () => {
      const url1 = "http://47.95.39.183:3005/regionData"
      const url2 = "http://47.95.39.183:3005/cityData"
      const url3 = "http://47.95.39.183:3005/interestPlaceData"

      //   一次请求多份数据
      await axios
        .all([axios.get(url1), axios.get(url2), axios.get(url3)])
        .then(
          axios.spread((res1, res2, res3) => {
            // 所有请求完成后的处理
            setRegionData(res1.data)
            setCityData(res2.data)
            setPlaceData(res3.data)
          })
        )
        .catch(error => {
          // 处理错误
          console.error("Error:", error)
        })
    }
    getRegionData()
  }, [])
  return (
    <>
      <div className='tabs section container'>
        <h2 className='tabTitle'>Destinations we love</h2>
        <div className='tabName'>
          <div
            className={`tab ${activeTab === "tab1" ? "active" : ""}`}
            onClick={() => handleTabClick("tab1")}
          >
            Regions
          </div>
          <div
            className={`tab ${activeTab === "tab2" ? "active" : ""}`}
            onClick={() => handleTabClick("tab2")}
          >
            Cities
          </div>
          <div
            className={`tab ${activeTab === "tab3" ? "active" : ""}`}
            onClick={() => handleTabClick("tab3")}
          >
            Places of interest
          </div>
        </div>

        <div className='tabItem'>
          <div
            className='tab-content'
            id='tab1-content'
            style={{ display: activeTab === "tab1" ? "block" : "none" }}
          >
            <ul className='grid'>
              {regionData.map(item => (
                <li key={item.name}>
                  <div className='location'>{item.name}</div>
                  <span className='property'>{item.properties}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className='tab-content'
            id='tab2-content'
            style={{ display: activeTab === "tab2" ? "block" : "none" }}
          >
            <ul className='grid'>
              {cityData.map(item => (
                <li key={item.name}>
                  <div className='location'>{item.name}</div>
                  <span className='property'>{item.properties}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className='tab-content'
            id='tab3-content'
            style={{ display: activeTab === "tab3" ? "block" : "none" }}
          >
            <ul className='grid'>
              {placesData.map(item => (
                <li key={item.name}>
                  <div className='location'>{item.name}</div>
                  <span className='property'>{item.properties}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tabs
