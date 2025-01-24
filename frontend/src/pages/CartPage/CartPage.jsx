import React, { useEffect, useState } from 'react'
import "./CartPage.css"
import summaryApi from '../../common'
import displayINRCurrency from '../../helper/displayINRCurrency'
import { Link } from 'react-router-dom'

const CartPage = () => {
    const [data, setdata] = useState([])

    const fetchCartData = async()=>{
        const response = await fetch(summaryApi.viewAddToCartProduct.url, {
            method: summaryApi.viewAddToCartProduct.method,
            headers: {
                "content-type" : "application/json",
                "authorization" : localStorage.getItem("token")
            },
        })
        const data = await response.json();
        
        if(data.success){
            setdata(data.data);
        }
    }

    useEffect(() => {
      fetchCartData();
    }, [])

    const increaseQty = (async(id,qty)=>{
        const response = await fetch(summaryApi.updateCartProduct.url,{
            method: summaryApi.updateCartProduct.method,
            headers: {
                "authorization" : localStorage.getItem("token"),
                "content-type" : "application/json"
            },
            body: JSON.stringify( {
                _id : id,
                quantity: qty+1
            })
        })
        const data = await response.json();
        if(data.success){
            fetchCartData();
            console.log("quantity Update kar raha ",data);
        }
    })
    const decreaseQty = (async(id,qty)=>{
        const response = await fetch(summaryApi.updateCartProduct.url,{
            method: summaryApi.updateCartProduct.method,
            headers: {
                "authorization" : localStorage.getItem("token"),
                "content-type" : "application/json"
            },
            body: JSON.stringify( {
                _id : id,
                quantity: qty-1
            })
        })
        const data = await response.json();
        if(data.success){
            fetchCartData();
            console.log("quantity Update kar raha ",data);
        }
    })

    const deleteProduct = (async(id)=>{
        const response = await fetch(summaryApi.deleteCartProduct.url,{
            method: summaryApi.deleteCartProduct.method,
            headers: {
                "authorization" : localStorage.getItem("token"),
                "content-type" : "application/json"
            },
            body: JSON.stringify( {
                _id : id,
            })
        })
        const data = await response.json();
        if(data.success){
            fetchCartData();
        }
    })

    const totalAmount = data.reduce(
        (sum, item) => sum + item.quantity * item.productId.sellingPrice, 
        0
    );
    const totalItems = data.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className='cart-container'>
        <div className="cart-produtct-container">
            <div className="cart-heading">
                <h3>Shopping Cart</h3>
            </div>
            <div className="divider-line"></div>
            <div className="cart-items-container">
                {data.map((item,idx)=>{
                    return(
                        <div key={idx} className="cart-item">
                            <div className="item-info-container">
                            <Link  to={"product/"+item?.productId._id} key={idx}><div className="img-container">
                                    <img width={150} height={150} src={item.productId.productImage[0]} alt="" />
                                </div></Link>
                                <div className="cart-product-info-container">
                                    <div className="product-names">
                                        <h4 className="product-description">{item.productId.description}</h4>
                                        <p className="in-stock">In stock</p>
                                        <p className='free-shipping'>Eligible For FREE Shipping</p>
                                        <p className='brand-name'>{item.productId.brandName}</p>
                                        <div className='showing-quantity'>
                                            {item.quantity == 1? <i className="fa-solid fa-trash"onClick={()=>deleteProduct(item?._id)}></i> : <i className="fa-solid fa-minus" onClick={()=>decreaseQty(item?._id,item?.quantity)}></i> }
                                            <p>{item.quantity}</p>
                                            <i className="fa-solid fa-plus" onClick={()=>increaseQty(item?._id,item?.quantity)}></i>
                                        </div>
                                    </div>
                                    <div className="product-prices">
                                        <h4 className='selling-price'>{displayINRCurrency(item.productId.sellingPrice)}</h4>
                                        <h4 className='price'>{displayINRCurrency(item.productId.price)}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="divider-line"></div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="cart-total-container">
            <div className="total-top">
                <div className="delivery">
                    <div className="delivery-bar"></div>
                    <p className="delivery-price">{displayINRCurrency(499)}</p>
                </div>
                <div className="delivery-sub-heading">
                    <i className="fa-solid fa-check"></i>
                    <p className='delivery-heading'>Your order is available for FREE Delivery.</p>
                </div>
            </div>
            <div className="sub-total">
                <h4>Subtotal ({totalItems} items): <span className="final-amount">{displayINRCurrency(totalAmount)}</span></h4>
            </div>
            <div className="buy-button">
                <button>Proceed to Buy</button>
            </div>
        </div>
    </div>
  )
}

export default CartPage

