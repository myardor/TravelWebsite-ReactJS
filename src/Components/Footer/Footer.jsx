import React, { useEffect } from "react"
import "./footer.css"
import video2 from "../../assets/video(2).mp4"

import { FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from "react-icons/md"
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"

import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video2} autoPlay muted loop type='video/mp4'></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          {/* 文字区 */}
          <div data-aos='fade-up' className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          {/* 输入框 */}
          <div className='inputDiv flex'>
            <input
              data-aos='fade-up'
              type='text'
              placeholder='Enter Email Address'
            />
            <button data-aos='fade-up' className='btn flex' type='submit'>
              SEND
              <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' data-aos='fade-up' className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-aos='fade-up' className='footerParagraph'>
              Explore the beauty of the world and embark on a dreamy journey
              with our travel website! Customize your itinerary and leave
              unforgettable moments. Discover different miracles from the beach
              to the mountains and rivers. Make every trip the most beautiful
              adventure in life.
            </div>

            <div data-aos='fade-up' className='footerSocials flex'>
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className='footerLinks grid'>
            {/* Group One */}
            <div
              data-aos='fade-up'
              data-aos-duration='3000'
              className='linkGroup'
            >
              <span className='groupTitle'>OUR AGENCY</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>
            {/* Group Two */}
            <div
              data-aos='fade-up'
              data-aos-duration='4000'
              className='linkGroup'
            >
              <span className='groupTitle'>PARTNERS</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Ctrip
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>
            {/* Group Three*/}
            <div
              data-aos='fade-up'
              data-aos-duration='5000'
              className='linkGroup'
            >
              <span className='groupTitle'>LAST MINUTE</span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                California
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>
          </div>

          <div className='footerDiv flex'>
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - CHINA 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
