import React from "react"
import Home from "../../Components/Home/Home"

import stayVideo from "../../assets/stayVideo.mp4"

// import RoomInput from "../../Components/RoomInput/RoomInput"

const Stay = () => {
  return (
    <>
      <div className='stay'>
        <Home
          smallText='Find your next stay'
          homeTitle='Search deals on hotels, homes, and much more...'
          stay='true'
          video={stayVideo}
        />
      </div>
    </>
  )
}

export default Stay
