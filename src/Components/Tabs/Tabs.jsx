import React, { useEffect, useState } from "react"
import "./Tabs.css"
import axios from "axios"

const additionalCitiesData = [
  { name: "Wembley Stadium", properties: "14,542 properties" },
  { name: "Universal Studios Orlando", properties: "3,687 properties" },
  { name: "Eiffel Tower", properties: "7,595 properties" },
  { name: "Disneyland", properties: "247 properties" },
  { name: "Guadalupe River Tubing", properties: "327 properties" },
  { name: "Times Square", properties: "1,386 properties" },
  { name: "Disneyland Paris", properties: "7,595 properties" },
  { name: "Comal River Tubing", properties: "327 properties" },
  { name: "Heathrow Terminal 2", properties: "Data not available" }, // Example for missing data
  { name: "Burj Al Arab Tower", properties: "4,310 properties" },
  { name: "Ocean City Boardwalk", properties: "765 properties" },
  { name: "River Walk", properties: "671 properties" },
  { name: "Al Maha Wildlife Reserve", properties: "1 property" },
  { name: "Kalahari Waterpark", properties: "43 properties" },
  { name: "Heathrow Terminal 5", properties: "63 properties" },
  { name: "O2 Arena", properties: "14,542 properties" },
  { name: "State Park", properties: "21 properties" },
  { name: "Niagara Falls State Park", properties: "75 properties" },
  { name: "The Shard", properties: "14,542 properties" },
  { name: "Portmeirion", properties: "9 properties" },
]

console.log(JSON.stringify(additionalCitiesData))

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
      const url1 = "http://localhost:3002/regionData"
      const url2 = "http://localhost:3002/cityData"
      const url3 = "http://localhost:3002/interestPlaceData"

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
