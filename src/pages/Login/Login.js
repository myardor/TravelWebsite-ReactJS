import React, { useEffect, useState } from "react"
import "./Login.css"
import "@fortawesome/fontawesome-free/css/all.min.css" // 导入 Font Awesome 样式表
import { useNavigate } from "react-router-dom"

import Aos from "aos"
import "aos/dist/aos.css"

const Login = () => {
  const [active, setActive] = useState(false)

  const navigate = useNavigate()

  // 施加动画效果
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  const [inputValue, setInputValue] = useState("")
  const [error, setError] = useState("")

  const handleInputChange = e => {
    const value = e.target.value
    // console.log(value)
    setInputValue(value)

    // 调用规则校验函数
    validateInput(value)
  }

  const validateInput = value => {
    // 简单的规则校验，例如检查是否为空
    if (value.trim() === "") {
      setError("输入不能为空")
    } else {
      setError("")
      localStorage.setItem("accountName", value)
    }
    // 你可以添加其他规则校验逻辑
  }

  return (
    <>
      <div className='loginBody'>
        <div className={`loginContainer ${active && "active"}`} id='container'>
          <div className='form-container sign-up'>
            <form>
              <h1>Create Account</h1>
              <div className='social-icons'>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-google-plus-g'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-facebook-f'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-github'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input
                type='text'
                placeholder='Name'
                onBlur={handleInputChange}
              />
              {error && (
                <p
                  className='nameError'
                  style={{
                    color: "red",
                    margin: "0",
                    height: "10px",
                    fontSize: "10px",
                  }}
                >
                  {error}
                </p>
              )}
              <input type='text' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <button onClick={() => navigate("/")}>Sign Up</button>
            </form>
          </div>

          <div className='form-container sign-in'>
            <form>
              <h1>Sign In</h1>
              <div className='social-icons'>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-google-plus-g'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-facebook-f'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-github'></i>
                </a>
                <a href='#' className='icon'>
                  <i className='fa-brands fa-linkedin-in'></i>
                </a>
              </div>
              <span>or use your email and password</span>
              <input type='text' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <a href='#'>Forget Your Password?</a>
              <button onClick={() => navigate("/")}>Sign In</button>
            </form>
          </div>

          <div className='toggle-container'>
            <div className='toggle'>
              <div className='toggle-panel toggle-left'>
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all site features</p>
                <button
                  className='hidden'
                  id='login'
                  onClick={() => setActive(false)}
                >
                  Sign In
                </button>
              </div>

              <div className='toggle-panel toggle-right' data-aos='fade-left'>
                <h1>Hello Friend!</h1>
                <p>
                  Register with your personal details to use all site features
                </p>
                <button
                  className='hidden'
                  id='register'
                  onClick={() => setActive(true)}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login