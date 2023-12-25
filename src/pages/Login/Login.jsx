import React from "react"
import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input } from "antd"
import "./Login.css"
import { useNavigate } from "react-router-dom"
import { verifyUsrInfo } from "../../apis"

const Login = () => {
  const navigate = useNavigate()
  const onFinish = values => {
    const res = verifyUsrInfo(values.username)
    // console.log("Received values of form: ", values)
    console.log(res)
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
          </Form>
        </div>
      </section>
    </>
  )
}
export default Login
