import React, { useEffect, useState } from 'react'
import "./SearchProduct.css"
import { useLocation, useParams } from 'react-router-dom'
import summaryApi from '../../common';
import displayINRCurrency from '../../helper/displayINRCurrency';
import addToCart from '../../helper/addToCart';

const SearchProduct = () => {
    const query = useLocation ();
    console.log("query  :  ",query.search);
    const [data, setdata] = useState([])

    const fetchProduct = async()=>{
        const response = await fetch(summaryApi.searchProduct.url+query.search,{
            method: summaryApi.searchProduct.method,
        })
        const data = await response.json();
        console.log("daaataaaa",data);
        setdata(data.data)
    }

    const getRandomDate = () => {
        const currentDate = new Date();
        const maxDate = new Date();
        maxDate.setDate(currentDate.getDate() + 10);
    
        const randomTimestamp = currentDate.getTime() + Math.random() * (maxDate.getTime() - currentDate.getTime());
        const randomDate = new Date(randomTimestamp);
    
        // Format the date to include the day, month, and day number
        const options = { weekday: 'short', day: 'numeric', month: 'short' }; // Add weekday
        return randomDate.toLocaleDateString('en-US', options); // e.g., "Mon, 27 Jan"
    };
       
      
      

    useEffect(() => {
      fetchProduct();
    }, [query])
    
  return (
    
    <div className='search-product-container'>
      {data.map((item,idx)=>{
        const randomDate = getRandomDate();
        return (
            <div key={idx} className='search-products'>
                <div className="img-container">
                    <img width={230} src={item.productImage[0]} alt="" />
                </div>
                <div className="search-product-informations">
                    <h3 className='search-product-names'>{item.description}</h3>
                    <p className="amount-bought">5K+ bought in past month</p>
                    <p style={{color: "white", fontSize: "12px"}} className="brand">{item.brandName}</p>
                    <div className="search-amounts">
                        <h2 className='search-product-price'>{displayINRCurrency(item.sellingPrice)}</h2>
                        <p className='search-price'>{displayINRCurrency(item.price)}</p>
                    </div>
                    <p className="offer">Up to 5% back with Amazon Pay ICI…</p>
                    <p className="delivery">FREE Delivery <span>{randomDate}</span></p>
                    <button className='search-add-to-cart' onClick={(e)=>addToCart(e,item?._id)}>Add to cart</button>
                    
                </div>
            </div>
        )
      })}

    </div>
  )
}

export default SearchProduct
