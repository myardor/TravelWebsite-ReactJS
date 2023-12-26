import React, { useState } from "react"
import { Button, Checkbox, Form, Input, Select, Alert } from "antd"

import "./Register.css"
import { setUsrInfoAPI } from "../../apis"
import { useNavigate } from "react-router-dom"

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}
const Register = () => {
  const navigate = useNavigate()
  const [alertShow, setAlertShow] = useState(false)
  const [form] = Form.useForm()
  const onFinish = values => {
    console.log(values)
    setTimeout(() => {
      localStorage.setItem("nickname", values.nickname)
      navigate("/")
    }, 1200)
    setAlertShow(true)
    setUsrInfoAPI(values)
  }
  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value='86'>+86</Option>
      </Select>
    </Form.Item>
  )

  return (
    <>
      <section className='register'>
        <div className='registerForm'>
          <Form
            {...formItemLayout}
            form={form}
            name='register'
            onFinish={onFinish}
            requiredMark={false}
            initialValues={{
              residence: ["zhejiang", "hangzhou", "xihu"],
              prefix: "86",
            }}
            scrollToFirstError
          >
            <div className='RegisterTitle'>
              <span>Welcome!</span>
            </div>

            <div className='formItems'>
              {/* nickname */}
              <Form.Item
                name='nickname'
                label='Nickname'
                tooltip='What do you want others to call you?'
                rules={[
                  {
                    required: true,
                    message: "Please input your nickname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              {/* Phone Number */}
              <Form.Item
                name='phone'
                label='Phone Number'
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              {/* password */}
              <Form.Item
                name='password'
                label='Password'
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>

              {/* confirm password */}
              <Form.Item
                name='confirm'
                label='Confirm Pwd'
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      )
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name='agreement'
                valuePropName='checked'
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject(new Error("Should accept agreement")),
                  },
                ]}
                {...tailFormItemLayout}
              >
                <Checkbox>
                  I have read the <a href='#'>AGREEMENT</a>
                </Checkbox>
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type='primary' htmlType='submit'>
                  Register
                </Button>
              </Form.Item>
            </div>
            {alertShow && (
              <Alert
                message='registration success! Will jump to homepage soon...'
                type='success'
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
export default Register
