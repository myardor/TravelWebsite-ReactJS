import React, { useState } from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Alert, Button, Checkbox, Form, Input } from "antd"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { verifyUsrInfoAPI } from "../../apis"

const Login = () => {
  const [alertShow, setAlertShow] = useState(false)
  const [verifyInput, setVerifyInput] = useState({})
  const navigate = useNavigate()
  const onFinish = async values => {
    const res = await verifyUsrInfoAPI(values)
    setVerifyInput(res)
    setAlertShow(true)

    setTimeout(() => {
      setAlertShow(false)
      if (res.type === "success") {
        navigate("/")
      }
    }, 600)
  }
  return (
    <>
      <section className='login'>
        <div className='loginForm'>
          <Form
            name='normal_login'
            className='login-form'
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <div className='loginTitle'>
              <span>Welcome Back!</span>
            </div>

            <div className='formItems'>
              <Form.Item
                name='username'
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Username'
                />
              </Form.Item>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password'
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className='login-form-forgot' href=''>
                  Forgot password?
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  className='login-form-button'
                >
                  Log in
                </Button>
                or{" "}
                <a href='#' onClick={() => navigate("/register")}>
                  Register now!
                </a>
              </Form.Item>
            </div>

            {alertShow && (
              <Alert
                message={verifyInput.message}
                type={verifyInput.type}
                style={{
                  marginTop: "20px",
                  textAlign: "center",
                  fontSize: "1rem",
                  height: "50px",
                }}
              />
            )}
          </Form>
        </div>
      </section>
    </>
  )
}
export default Login
