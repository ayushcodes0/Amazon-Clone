import React, { useEffect, useState } from 'react'
import "./CategoryList.css"
import summaryApi from '../../common';

const CategoryList = () => {

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
    <div>
      {
        categoryProduct.map((item,index)=>{
            return <div key={index} className="img">
                <img src={item?.productImage[0 ]} height={100} width={100} alt="" />
                <p>{item.category}</p>
            </div>
        })
      }
    </div>
  )
}

export default CategoryList
