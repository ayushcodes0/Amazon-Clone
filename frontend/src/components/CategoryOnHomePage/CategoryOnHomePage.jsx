import React, { useEffect, useState } from 'react'
import "./CategoryOnHomePage.css"
import fetchCategoryWiseProduct from '../../helper/fetchCategoryWiseProduct';
import displayINRCurrency from '../../helper/displayINRCurrency';
import { Link } from 'react-router-dom';
import addToCart from '../../helper/addToCart';

const  CategoryOnHomePage = ({category}) => {
  const [data, setdata] = useState([]);

  const fetchData = async ()=>{
    const responseData = await fetchCategoryWiseProduct(category);
    setdata(responseData.product);
  }
  

  useEffect(() => {
    fetchData();
  }, [])
  
  
  return (
    <div className='category-container no-scrollbar'>
      {
        data.map((item,index)=>{
          return(
            <Link  to={"/product/"+item?._id} key={index} className='image-container' onClick={()=>window.scrollTo({top: 0, behavior: "smooth"})}>
              <img src={item.productImage[0]} alt="" width={150} height={150} />
              <div className="info">
                <p>{item.productName}</p>
                <p className='category'>{item.category}</p>
                <div className='price'>
                  <p className='selling-price'>{displayINRCurrency(item.sellingPrice)}</p>
                  <p className='only-price'>{displayINRCurrency(item.price)}</p>
                </div>
                <button className='add-to-cart' onClick={(e)=>addToCart(e,item?._id)} >Add to cart</button>
              </div>
            </Link>
            
          )
        })
      }
    </div>
  )
}

export default CategoryOnHomePage
