import React from 'react'
import "./Home.css"
import CategoryList from '../../components/CategoryList/CategoryList'
import Banner from '../../components/Banner/Banner'
import SecHeader from '../../components/SecHeader/SecHeader'
import CategoryOnHomePage from '../../components/CategoryOnHomePage/CategoryOnHomePage'

const Home = () => {
  return (
    <div className='home'>
      <div><SecHeader/></div>
      <div>
        <Banner/>
      </div>
      <div className='home-body'>
        <div className='category-wise-product'>
          <CategoryOnHomePage category = "watches"/>
          <hr />
          <CategoryOnHomePage category = "laptops"/>
          <hr />
          <CategoryOnHomePage category = "headphones"/>
          <hr />
          <CategoryOnHomePage category = "mobiles"/>
          <hr />
          <CategoryOnHomePage category = "tablets"/>
        </div>
      </div>
      
      
      {/* <CategoryList/> */}
    </div>
  )
}

export default Home
