import React from 'react'
import "./DisplayUploadedImage.css"

const DisplayUploadedImage = ({imgUrl, onClose}) => {
  return (
    <div className='display-fullscreen'>
      <img src={imgUrl} alt="" height={600} width={600} />
      <i className="fa-solid fa-xmark" onClick={onClose}></i>
    </div>
  )
}

export default DisplayUploadedImage
