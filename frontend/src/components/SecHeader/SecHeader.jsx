import React, { useEffect, useState } from 'react'
import "./SecHeader.css"
import summaryApi from '../../common';
import { Link } from 'react-router-dom';

const SecHeader = () => {

    const [categoryProduct, setcategoryProduct] = useState([]);
    
    const fetchCategoryProduct = async()=>{
        const response = await fetch(summaryApi.categoryProduct.url, {
            method: summaryApi.categoryProduct.method,
        })

        const data =await response.json();
        setcategoryProduct(data.data);
    }

    useEffect(() => {
      fetchCategoryProduct();
    }, [])


  return (
    <div className='sec-header-container'>
        <ul>
            {
                categoryProduct.map((item,index)=>{
                    return (
                        <Link style={{ textDecoration: "none" }} to={"/product-category/"+item?.category} key={index}><li>{item.category}</li></Link>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default SecHeader
