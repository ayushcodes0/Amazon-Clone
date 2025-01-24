import React, { useState } from 'react'
import "./AdminProductCard.css"
import AdminEditProductCard from '../AdminEditProductCard/AdminEditProductCard'
import displayINRCurrency from '../../helper/displayINRCurrency'

const AdminProductCard = ({item,fetchAdminProduct}) => {
    const [editProduct, seteditProduct] = useState(false)
  return (
    <div className="product-card" >
        <div className='product-img'>
            <img src={item.productImage[0]} height={150} width={130} alt="" />
            <i className="edit-icon fa-solid fa-pen" onClick={()=>seteditProduct(true)}></i>
        </div>
        <div className="product-name">
            <p>{item.productName}</p>
            {/* {displayINRCurrency(200000)} */}
        </div>

        
        
        {
            editProduct && <AdminEditProductCard fetchAdminProduct={fetchAdminProduct} onClose={()=>seteditProduct(false)} item = {item}/>
        }

        
        
    </div>
  )
}

export default AdminProductCard
