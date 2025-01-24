import React, { useState } from 'react'
import "./Banner.css"
import { abc1, abc2, banner1, banner2, banner3, banner4, banner5 } from '../../assets/products/assets'

const Banner = () => {

  const banner = [
    banner1,banner2,banner3,banner4,banner5
  ]

  const [currentImage, setcurrentImage] = useState(0)

  // setTimeout(()=>{
  //   if(currentImage<banner.length-1){
  //     setcurrentImage(currentImage+1)
  //   }
  // },4000)

  return (
    <div className='banner'>
      <div className="images">
        {
          banner.map((item,index)=>{
            return (
              <img key={index} src={item} alt="" style={{transform : `translateX(-${currentImage*100}%)`, transition: `all .3s`}} />
            )
          })
        }
        
      </div>
      <div className="btns">
        <div className="prev" id='prev' onClick={()=>{
          if(currentImage>0){
            setcurrentImage(currentImage-1);
          }
        }}>
            <i class="fa-solid fa-chevron-left"></i>
        </div>
        <div className="next" id='next' onClick={()=>{
          if(currentImage<4){
            setcurrentImage(currentImage+1);
          }
        }}>
            <i class="fa-solid fa-chevron-right"></i>
        </div>
      </div>
      <div className="content-on-banner">
        <div className='abc '>
          <h3>Up to 80% off | Laptops</h3>
          <img src={abc1} alt="" width={280}/>
          <p>See all offers</p>
        </div>
        <div className='abc'>
          <h3>Starting ₹6,999 | Upgrade to latest Mobile Phones</h3>
          <img src={abc2} alt="" width={280}/>
          <p>See all offers</p>
        </div>
        <div className='abc'>
          <h3>Minimum 50% off | Electronic devices</h3>
          <img src={abc1} alt="" width={280}/>
          <p>See all offers</p>
        </div>
        <div className='abc'>
          <h3>Up to 75% off | Never before offers on watches</h3>
          <img src={abc2} alt="" width={280}/>
          <p>See all offers</p>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
