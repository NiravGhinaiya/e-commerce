import React from 'react'
import { Form, Input, Button } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import './style.css'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'


const LoginForm = () => {

  const [form] = Form.useForm();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.userData.userRecord)

  const onFinishLogin = (data) => {
    const duplicate = userData.some(person => person.email === data.email && person.password === data.password);
    console.log('duplicate',duplicate)
    if (duplicate) {
      localStorage.setItem('token', JSON.stringify(data))
      navigate('/Home')
    } else {
      alert('enter valid email and password')
    }
  }


  return (
    <div className='signLoginForm'>
      <div style={{ border: '0', borderRadius: '20px', width: "400px", backgroundColor: '#FFF', padding: '30px 30px 0px 30px' }}>
        <Form form={form} onFinish={(data) => onFinishLogin(data)} >
          <Form.Item>
            <h1 style={{ fontSize: '32px', textAlign: 'center', fontFamily: 'emoji', fontWeight: "700" }}>Welcome back!</h1>
          </Form.Item>
          <Form.Item name='email'
            rules={[{
              required: true,
              message: '* Please Enter Email..!'
            }, {
              type: 'email',
              message: 'Valid Email...!'
            }]}
          >
            <Input size="large" prefix={<MailOutlined />} autoComplete='off' placeholder='Email' />
          </Form.Item>
          <Form.Item name='password'
            rules={[{
              required: true,
              message: 'Input Password',
            }]}
          >
            <Input.Password size='large' prefix={<LockOutlined />} autoComplete='off' placeholder='Password' />
          </Form.Item>
          <Form.Item >
            <Button type='default' htmlType='submit' style={{ border: '0', borderRadius: '8px', padding: '5px 0', boxShadow: '0px 3px 3px black ', marginTop: '30px', fontSize: '20px', width: '100%', height: '100%', background: "linear-gradient(90deg, rgba(227,127,27,1) 27%, rgba(245,61,33,0.8783088235294117) 100%" }}>
              Login
            </Button>
          </Form.Item>
          <Form.Item>
            <Link to={'/signup_form'}>
              <p style={{ textAlign: 'center', marginTop: '12px', fontWeight: '700', fontSize: '18px', color: 'rgb(227,127,27)' }}>Create account</p>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginForm