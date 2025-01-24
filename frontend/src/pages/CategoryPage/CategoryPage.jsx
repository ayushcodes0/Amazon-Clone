import React from 'react'
import "./CategoryPage.css"
import { useParams } from 'react-router-dom'

const CategoryPage = () => {

    const params = useParams();

  return (
    <div>
      {params?.categoryName} 
    </div> 
  )
}

export default CategoryPage
