import { Space, Form, Input, Button } from 'antd'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signupUser } from '../actions/actions'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import './style.css'
import {Link, useNavigate } from 'react-router-dom'



const SignpForm = () => {

  const [form] = Form.useForm();

  const userData = useSelector((state) => state.userData.userRecord)
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const emailVerify = []
  userData.map((e) => emailVerify.push(e.email))
  // console.log('emailVerify',emailVerify)

  const onFinishForm = (data) => {
    dispatch(signupUser(data))
    navigate('/')
    form.resetFields()
  }



  return (
    <div className='signLoginForm'>
      <div style={{ border: '0', borderRadius: '20px', width: "400px", backgroundColor: '#FFF', padding: '30px 30px 0px 30px' }}>
        <Form form={form} onFinish={(data) => onFinishForm(data)}>
          <Form.Item>
            <h1 style={{ fontSize: '32px', textAlign: 'center', fontFamily: 'emoji', fontWeight: "700" }}>Create Your Account</h1>
          </Form.Item>
          <div style={{ display: 'flex' }}>
            <Space size={20}>
              <Form.Item name='fname'
                rules={[
                  {
                    required: true,
                    message: 'Input First name',
                  },
                ]}
              >
                <Input size="large" prefix={<UserOutlined />} autoComplete='off' placeholder='First Name' />
              </Form.Item>
              <Form.Item name='lname'
                rules={[
                  {
                    required: true,
                    message: 'Input Last name',
                  },
                ]}
              >
                <Input size="large" autoComplete='off' prefix={<UserOutlined />} placeholder='Last Name' />
              </Form.Item>
            </Space>
          </div>
          <Form.Item name='email'
            rules={[{
              required: true,
              message: 'Input Email',
            }, {
              type: 'email',
              message: 'Valid Email...!'
            }, {
              validator: (_, value) => {
                if (!emailVerify.includes(value)) {
                  return Promise.resolve();
                } else {
                  return Promise.reject();
                }
              },
              message: 'Email Already Exiting'
            }]}
          >
            <Input size="large" autoComplete='off' prefix={<MailOutlined />} placeholder='Email' />
          </Form.Item>
          <Form.Item name='password'
            rules={[{
              required: true,
              message: 'Input Password',
            }]}
          >
            <Input.Password autoComplete='off' size='large' prefix={<LockOutlined />} placeholder='Password' />
          </Form.Item>
          <Form.Item >
            <Button type='default' htmlType='submit' style={{ border: '0', borderRadius: '8px', padding: '5px 0', boxShadow: '0px 3px 3px black ', marginTop: '30px', fontSize: '20px', width: '100%', height: '100%', background: "linear-gradient(90deg, rgba(227,127,27,1) 27%, rgba(245,61,33,0.8783088235294117) 100%" }}>
              Create Account
            </Button>
          </Form.Item>
          <Form.Item>
          <Link to={'/'}>
            <p style={{ textAlign: 'center', marginTop: '12px', fontWeight: '700', fontSize: '18px', color: 'rgb(227,127,27)' }}>Already have an account</p>
          </Link>
          </Form.Item>
        </Form>

      </div>
    </div>
  )
}

export default SignpForm