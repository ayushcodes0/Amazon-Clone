import summaryApi from "../common";
import {toast} from "react-toastify"

const addToCart = async(e,id)=>{
    e?.stopPropagation();
    e?.preventDefault();

    const response = await fetch(summaryApi.addToCartProduct.url,{
        method: summaryApi.addToCartProduct.method,
        headers: {
            "content-type": "application/json" ,
            "authorization": localStorage.getItem("token")
        },
        body: JSON.stringify({
            productId: id
        })
    })

    console.log("Calling add to cart function"); 

    const data = await response.json();
    if(data.success){
        toast.success(data.message);
    }
    if(data.error){
        toast.error(data.message);
    }

    return data;f
}

export default addToCart;