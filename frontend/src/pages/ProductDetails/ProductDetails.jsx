import React, { useEffect, useState } from 'react';
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import summaryApi from "../../common/index.js";
import displayINRCurrency from "../../helper/displayINRCurrency.js";
import { offer } from '../../assets/products/assets.js';
import addToCart from '../../helper/addToCart.js';

const ProductDetails = () => {
    const [data, setData] = useState({
        _id: "",
        productName: "",
        brandName: "",
        category: "",
        productImage: [],
        description: "",
        price: "",
        sellingPrice: ""
    });

    const params = useParams();
    const [imageIndex, setImageIndex] = useState(0);
    const [zoomImageCoordinate, setZoomImageCoordinate] = useState({ x: 0, y: 0 });

    const fetchProductDetails = async () => {
        const response = await fetch(summaryApi.productDetails.url, {
            method: summaryApi.productDetails.method,
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ productId: params?.id })
        });

        const data = await response.json();
        setData(data.data);
    };

    const handleZoomImage = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect();
        
        // Calculate normalized x and y coordinates
        let x = (e.clientX - left) / width;
        let y = (e.clientY - top) / height;

        // Update zoom image coordinates
        setZoomImageCoordinate({ x, y });
    };

    useEffect(() => {
        fetchProductDetails();
    }, []);

    const getId = ()=>{
        
    }

    return (
        <div className='product-details-body'>
            <div className="hero">
                <div className="left-most">
                    <div className="images-container">
                        {data.productImage.map((item, index) => (
                            <div className='image-inside-container' key={index}>
                                <img 
                                    src={item} 
                                    alt="" 
                                    height={70} 
                                    width={70} 
                                    onClick={() => setImageIndex(index)} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="middle-one">
                    <div className="middle-image-container">
                        <img 
                            src={data.productImage[imageIndex]} 
                            alt="" 
                            width={700} 
                            height={700} 
                            onMouseMove={handleZoomImage} 
                        />

                        {/* Zoom Image */}
                        <div className="product-zoom">
                            <div 
                                className="zoomed-image"
                                style={{
                                    backgroundImage: `url(${data.productImage[imageIndex]})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: `${zoomImageCoordinate.x * 100}% ${zoomImageCoordinate.y * 100}%`,
                                    transform: `scale(2)`,
                                    width: '200%', // Adjust width for zoom effect
                                    height: '200%', // Adjust height for zoom effect
                                    position: 'absolute', // Ensure it's positioned correctly
                                    pointerEvents: 'none' // Prevent mouse events on the zoomed image
                                }}
                            />
                        </div>
                    </div>
                </div>
                <div className="right-most">
                    <div className="product-information">
                        <h5>{data.description}</h5>
                        <hr />
                        <p className='great-indian-festival'>Great Indian Festival</p>
                        <div className="display-price">
                            <p className='selling-price'>{displayINRCurrency(data.sellingPrice)} </p>
                            <p className='price'>{displayINRCurrency(data.price)}</p>
                        </div>
                        <div className='taxes-and-emi'>
                            <p className='taxes'>Inclusive of all taxes</p>
                            <p className='emi'>EMI starts at {displayINRCurrency(0.35 * data.sellingPrice)} per month.</p>
                        </div>
                        <hr />
                        <div className='offers'>
                            <div className="offer-heading">
                                <img src={offer} alt="" width={30} />
                                <p>Offer</p>
                            </div>
                            <div className="bank-offer">
                                <div className="off">
                                    <p>Bank Offer</p>
                                    <span>Upto {displayINRCurrency(4000)} discount on SBI credit card</span>
                                </div>
                                <div className="off">
                                    <p>Partner Offer</p>
                                    <span>Get gst invoice and save upto 28%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rightest-part">
                    <div className="buy">
                        <div className="top-side">
                            <div className="circle"></div>
                        </div>
                        <div className="bottom-side">
                            <div className="price-heading">
                                <p>{displayINRCurrency(data.sellingPrice)}</p>
                                <p className='delivery'>Free Delivery Thursday 3 October</p>
                            </div>
                            <div className="stocks">
                                <h3>In stock</h3>
                                <div className="stocks-info">
                                    <div className="first">
                                        <p className='light'>Payment</p>
                                        <p className='blue'>Secure Transaction</p>
                                    </div>
                                    <div className="first">
                                        <p className='light'>Ships from</p>
                                        <p className='blue'>Amazon</p>
                                    </div>
                                    <div className="first">
                                        <p className='light'>Brand</p>
                                        <p className='blue'>{data.brandName}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className='atc' onClick={(e)=>addToCart(e,data?._id)}>Add to Cart</button>
                                <button className='buy-now'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ProductDetails;
