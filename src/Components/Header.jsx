import React from 'react'
import { PoweroffOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Space, Tooltip, Button, Badge } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';



const Header = () => {

    const navigate = useNavigate();

    const loginUserData = useSelector((state) => state)
    const cartProducts = useSelector((state) => state.CartProduct.cartProduct)
    // console.log('loginUserData', loginUserData)



    return (
        <div className='headerStyle' style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 30px', backgroundColor: 'whitesmoke', height: '80px' }}>
            <div>
                <h1>Logo</h1>
            </div>
            <div>
                <Space size={20}>
                    <h2>Hii.. {loginUserData.loginUserData.loginUser.fname} </h2>
                    {
                        Object.keys(cartProducts).length === 0
                            ? (
                                <Tooltip title="Buy Now" color='gold'>
                                    <Button type="primary" icon={<ShoppingCartOutlined />}
                                        onClick={() => {
                                            navigate('/productcart')
                                        }}
                                    />
                                </Tooltip>
                            ) : (
                                <Badge count={(cartProducts).length}>
                                    <Tooltip title="Buy Now" color='gold'>
                                        <Button type="primary" icon={<ShoppingCartOutlined />}
                                            onClick={() => {
                                                navigate('/productcart')
                                            }}
                                        />
                                    </Tooltip>
                                </Badge>

                            )
                    }
                    <Tooltip title="Logout" color='gold'>
                        <Button type="primary" icon={<PoweroffOutlined
                            onClick={() => {
                                navigate('/')
                                localStorage.removeItem('token')
                            }}
                        />} />
                    </Tooltip>
                </Space>
            </div>
        </div>
    )
}

export default Header
