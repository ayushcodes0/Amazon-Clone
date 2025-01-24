import React, { useState } from 'react'
import "./UploadProduct.css"
import productCategory from '../../helper/productCategory'
import uploadImage from '../../helper/uploadImage.js'
import DisplayUploadedImage from '../DisplayUploadedImage/DisplayUploadedImage.jsx'
import summaryApi from '../../common/index.js'
import {toast} from "react-toastify"

const UploadProduct = ({onClose, fetchAdminProduct}) => {

    const [fullScreenImage, setfullScreenImage] = useState("")
    const [openFullscreenImage, setopenFullscreenImage] = useState(false) 

    const [data, setdata] = useState({
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: ""
    })


    const handleOnChange = (e)=>{
        const {name, value} = e.target
        setdata((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }

    const handleUploadProduct = async (e)=>{
        const file = e.target.files[0];
        const uploadImageCloudinary = await uploadImage(file);

        setdata((prev)=>{
            return{
                ...prev,
                productImage: [...prev.productImage, uploadImageCloudinary.url]
            }
        })
        console.log("upload-image", uploadImageCloudinary);
    }

    const handleDeleteProductImage = async(index)=>{
        console.log("image index : ", index)

        let newProductImage = [...data.productImage]
        newProductImage.splice(index,1)
        setdata((prev)=>{
            return{
                ...prev,
                productImage: [...newProductImage] 
            }
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("final data : ", data);

        const response = await fetch(summaryApi.uploadProduct.url, {
            method: summaryApi.uploadProduct.method,
            headers: {
                "content-type" : "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        if(responseData.success){
            toast.success(responseData?.message)
            fetchAdminProduct();
            onClose();
        }
        if(responseData.error){
            toast.error(responseData?.message)
        }

    }

  return (
    <div className='upload-product-container'>
        <div className='scrolling'>
      <div className="upload-product-top">
        <h2>Upload Product</h2>
        <i className="fa-solid fa-xmark" onClick={onClose}></i>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='product-name'>
            <input type="text" name="productName" id="productName" placeholder='Enter Product Name' value={data.productName} onChange={handleOnChange}/>
        </div>
        <div className='product-name'>
            <input type="text" name="brandName" id="brandName" placeholder='Enter Brand Name' value={data.brandName} onChange={handleOnChange}/>
        </div>
        <div className='category'>
            <select onChange={handleOnChange} name="category" id="category">
                <option className='initial-option' value="">Select Category</option>
                {
                    productCategory.map((item,index)=>{
                        return(
                            <option  value={item.value} key={index}>{item.label}</option>
                        )
                    })
                }
            </select>
        </div>
        <div className="product-images">
            <label htmlFor="uploadImageInput">
            <div className="upload-icons">
                <i className="fa-solid fa-cloud-arrow-up"></i>
                <h3>Upload Product Image</h3>
                <input type="file" id='uploadImageInput' onChange={handleUploadProduct}/>
            </div>
            </label>
        </div>
        <div className="display-product-image">
            {
                data?.productImage[0]? (
                    data.productImage.map((item,index)=>{
                        return(
                            <div className="small-uploaded-product-image">
                                <img src={item} alt="item" width={100} height={100} onClick={()=>{setopenFullscreenImage(true),  setfullScreenImage(item) }}/> 
                                <i className="delete fa-solid fa-delete-left" onClick={()=>handleDeleteProductImage(index)}></i>
                            </div>
                        )
                    })
                ) : (
                    <p>*Please Upload Product Image</p>
                )
            }
        </div>
        <div className='product-name'>
            <input type="number" name="price" id="price" placeholder='Enter Price' value={data.price} onChange={handleOnChange}/>
        </div>
        <div className='product-name'>
            <input type="number" name="sellingPrice" id="sellingPrice" placeholder='Enter Selling Price' value={data.sellingPrice} onChange={handleOnChange}/>
        </div>
        <div className='description product-name'>
            <textarea name="description" id="description" value={data.description} placeholder='Description' onChange={handleOnChange} ></textarea>
        </div>
        <div className="upload-button">
            <button>Upload</button>  
        </div>
      </form>
      {
        openFullscreenImage && <DisplayUploadedImage onClose={()=>setopenFullscreenImage(false)} imgUrl={fullScreenImage}/>
      }
      </div>
    </div>
  )
}

export default UploadProduct
