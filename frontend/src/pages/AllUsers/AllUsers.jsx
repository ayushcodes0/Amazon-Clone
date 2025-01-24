import React, { useEffect, useState } from 'react'
import "./AllUsers.css"
import summaryApi from '../../common';
import { toast } from 'react-toastify'
import {placeholder_img} from "../../assets/products/assets"
import moment from "moment";
import ChangeUserRole from '../../components/ChangeUserRole/ChangeUserRole';


const AllUsers = () => {

  const [users, setusers] = useState([]);
  const [openUpdateRole, setopenUpdateRole] = useState(false)
  const [updateUserDetails, setupdateUserDetails] = useState({
    name: "",
    email: "",
    role: "",
    _id: ""
  })

  const fetchAllUsers = async ()=>{
    const response = await fetch(summaryApi.allUsers.url,{
      method: summaryApi.allUsers.method,
      headers: {
        "authorization" : localStorage.getItem("token")
      }
    })

    const data = await response.json();
    if(data.success){
      setusers(data.data);
    }
    if(data.error){
      toast.error(data.message)
    }
  }

  useEffect(() => {
    fetchAllUsers()
  }, [])
  

  return (
    <div className='all-user-container'>
      <div className="heading">
        <h2>All Users</h2>
      </div>
      <div className="users">
        {users.map((item, index)=>{
          return (
            <div key={index} className='all-user-info'>
              <div className="profile-pic">
                  <img src={placeholder_img} alt="" />
              </div>
              <div className="name">
                <h4>{item.name}</h4>
              </div>
              <div className="email">
                <p>{item.email}</p>
              </div>
              <div className="role">
                <p>{item.role}</p>
              </div>
              <div className="created-date">
                <p>{moment(item?.createdAt).format("LL")}</p>
              </div>
              <div className="edit">
                <i className="fa-solid fa-pen" onClick={()=>{
                  setupdateUserDetails(item)
                  setopenUpdateRole(true)
                  }}></i>
              </div>
            </div>
          )
        })}
      </div>
    {openUpdateRole && <ChangeUserRole onclose={()=>setopenUpdateRole(false)} name= {updateUserDetails.name} email = {updateUserDetails.email} role = {updateUserDetails.role} userId = {updateUserDetails._id} fetchAllUsers = {fetchAllUsers} />}
      
    </div>
  )
}

export default AllUsers
