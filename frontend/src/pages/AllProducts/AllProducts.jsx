import React, { useEffect, useState } from 'react'
import "./AllProducts.css"
import UploadProduct from '../../components/UploadProduct/UploadProduct'
import summaryApi from '../../common'
import AdminProductCard from '../../components/AdminProductCard/AdminProductCard'

const AllProducts = () => {

  const [openUploadProduct, setopenUploadProduct] = useState(false)

  const [allProduct, setallProduct] = useState([])

  const fetchAllProduct = async ()=>{
    const response = await fetch(summaryApi.allProduct.url,{
      method: summaryApi.allProduct.method,
    })

    const responseData = await response.json();
    console.log("response Data ", responseData);
    setallProduct(responseData?.data || [])
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])
  

  return (
    <div className='all-products-container'>
      <div className="top">
        <h2>All Products</h2>
        <p onClick={()=>setopenUploadProduct(true)}>Upload Product</p>
      </div>

      <div className="all-products">
        {
          allProduct.map((item,index)=>{
            return(
              <AdminProductCard fetchAdminProduct = {fetchAllProduct} key={index} item = {item}/>
            )
          })
        }
      </div>



      {openUploadProduct && <UploadProduct fetchAdminProduct= {fetchAllProduct} onClose = {()=>setopenUploadProduct(false)}/>}
      
    </div>
  )
}

export default AllProducts
