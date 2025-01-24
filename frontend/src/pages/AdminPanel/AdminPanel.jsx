import React from 'react'
import "./AdminPanel.css"
import {placeholder_img} from "../../assets/products/assets"
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

const AdminPanel = () => {

  const user = useSelector((state) => state?.user?.user);
  return (
    <div className='admin'>
        <aside className='side-bar'>
            <div className='image'>
                <img src={placeholder_img} alt="" />
                <div className='name-role'>
                  <h4>{user?.name || "Admin Name"} </h4>
                  <p>{user?.role}</p>
                </div>
            </div>
            <hr />
            <div className="admin-navigations">
              <div className="navigation">
                <Link style={{ textDecoration: "none" }} to={"all-users"} >  <p>All Users</p> </Link>
                <Link style={{ textDecoration: "none" }} to={"all-products"} >  <p>All Products</p> </Link>
              </div>
            </div>
        </aside>
        <hr />
        <main className='main-section'>
         <Outlet/>
        </main>
      
    </div>
  )
}

export default AdminPanel
