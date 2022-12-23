import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { Modal } from 'antd';

import { selectedProduct, removeAddProduct, selectProductRemove, byuNowProduct } from '../actions/actions'
import React, { useState } from 'react'

const ProductCart = () => {


    const [open, setOpen] = useState(false);


    const cartProducts = useSelector((state) => state.CartProduct)
    const dispatch = useDispatch()

    console.log('cartProducts', cartProducts.productBuy)

    return (
        <div>
            <Header />
            <h2 style={{ textAlign: 'center', margin: '30px 0', fontSize: '35px', fontFamily: 'fantasy', letterSpacing: '10px' }}>Product Cart</h2>
            <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
                <div style={{ marginTop: '20px', display: 'flex', width: '1000px', border: '1px solid', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30%', height: '200px' }}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPnZ1YstpeSrqN7Km2UM6CLRZ4YLL6ZWxDmA&usqp=CAU'
                            width='100%' height='auto'
                        />
                    </div>
                    <div style={{ padding: '10px', border: '1px solid', width:'70%', float:'right' }}>
                        <div>
                            <h4>Title: HELLO</h4><br />
                            <p><strong>category:</strong> AAAAaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbcccccccccccccccc </p><br />
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
                                <p><strong>Prise:</strong> $289</p><br />
                                <p><strong>Total : $ 999</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        // <div>
        //     <Header />
        //     <h2 style={{ textAlign: 'center', margin: '30px 0', fontSize: '35px', fontFamily: 'fantasy', letterSpacing: '10px' }}>Product Cart</h2>
        //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        //         <div style={{
        //             boxShadow: '1px 1px 8px black', width: '855px',
        //             height: '740px', overflow: 'auto', padding: '25px',
        //             border: '1px solid rgba(140, 140, 140, 0.35)',
        //         }}>
        //             {
        //                 cartProducts.cartProduct.map((val, i) => {
        //                     return (
        //                         <div key={i} style={{ display: 'flex', padding: '10px', marginBottom: '20px', border: '1px solid rgba(140, 140, 140, 1)', width: '785px', height: '180px' }}>
        //                             <div style={{ width: '40%', padding: '5px 20px' }}>
        //                                 <img src={val.image} alt={val.title} width='auto' height='100%' />
        //                             </div>
        //                             <div style={{ marginLeft: '13px', width: '60%' }}>
        //                                 <div>
        //                                     <h4>Title: {val.title}</h4><br />
        //                                     <p><strong>category:</strong> {val.category} </p><br />
        //                                     <div style={{ display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
        //                                         <p><strong>Prise:</strong> ${val.price}</p><br />
        //                                         <p><strong>Total : $ {val.price * val.quantity}</strong></p>
        //                                     </div>
        //                                 </div>
        //                                 <div style={{ display: 'flex', justifyContent: 'space-between' }} >
        //                                     <div style={{ display: 'flex' }} >
        //                                         <div style={{ marginTop: '10px', alignItems: 'center', fontSize: '20px', display: 'flex', padding: '5px 10px', width: '80px', justifyContent: 'space-between', backgroundColor: 'whitesmoke' }}>
        //                                             <span style={{ cursor: 'pointer' }} onClick={() => dispatch(removeAddProduct(val))} >-</span>
        //                                             <span>{val.quantity}</span>
        //                                             <span style={{ cursor: 'pointer' }} onClick={() => dispatch(selectedProduct(val))} >+</span>
        //                                         </div>
        //                                         <span style={{ marginLeft: '30px', color: 'red', marginTop: '10px', padding: '5px 10px', cursor: 'pointer' }} onClick={() => dispatch(selectProductRemove(val.id))}>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
        //                                                 <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        //                                                 <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        //                                             </svg>
        //                                         </span>
        //                                     </div>
        //                                     <div style={{ marginTop: '10px', display: 'flex', padding: '5px 10px', }}>
        //                                         <button style={{ padding: '5px 20px', cursor: 'pointer' }} onClick={() => dispatch(byuNowProduct(val), setOpen(true))}>Buy Now</button>
        //                                         <Modal open={open} onOk={() => setOpen(false)} onCancel={() => setOpen(false)} >
        //                                             <p>Some contents...</p>
        //                                             <p>Some contents...</p>
        //                                             <p>Some contents...</p>
        //                                         </Modal>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 })
        //             }
        //         </div>
        //     </div>
        // </div>
    )
}

export default ProductCart