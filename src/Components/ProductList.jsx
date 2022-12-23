import Header from './Header'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectedProduct } from '../actions/actions'
import './LodingStyle.css'


const ProductList = () => {

    const products = useSelector((state) => state.CartProduct.products)
    const dispatch = useDispatch();


    const clickBuyProduct = (ele) => {
        dispatch(selectedProduct(ele))
    }


    // console.log('products--products',products)

    return (
        <>
            {
                Object.keys(products).length === 0
                    ? (
                        <figure>
                            <div className="dot white"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                            <div className="dot"></div>
                        </figure>
                    ) : (
                        <div>
                            <Header />
                            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '40px', justifyContent: 'space-evenly' }}>

                                {
                                    products.map((ele) => {
                                        return (
                                            <div key={ele.id} style={{ marginBottom: '23px', border: '1px solid black', padding: '20px 30px', width: '444px', height: '500px', color: 'black' }}>
                                                <div style={{ height: '200px' }}>
                                                    <img src={ele.image} alt='Image' height='100%' />
                                                </div>
                                                <div style={{ marginTop: '40px', color: 'black' }}>
                                                    <h3>{ele.category}</h3><br />
                                                    <p><strong>Title :</strong>&nbsp; {ele.title} </p><br />
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                                        <p><strong>Prise :</strong>&nbsp; ${ele.price} </p>
                                                        <button style={{ padding: '5px 10px', cursor: 'pointer' }} onClick={() => clickBuyProduct(ele)}>BUY NOW</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
            }

        </>
    )
}

export default ProductList