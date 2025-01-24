import React, { useState } from 'react'
import "./ChangeUserRole.css"
import summaryApi from '../../common/index.js';
import ROLE from '../../common/role.js';
import { toast } from 'react-toastify';

const ChangeUserRole = ({name,email,role,onclose,userId,fetchAllUsers}) => {

    const [userRole, setuserRole] = useState(role);

    const handleOnChangeSelect = (e)=>{
        setuserRole(e.target.value);
        console.log(e.target.value);
    }

    const updateUserRole = async ()=>{
        const response = await fetch(summaryApi.updateUser.url,{
            method: summaryApi.updateUser.method,
            headers: {
                "content-type": "application/json",
                "authorization": localStorage.getItem("token")
            },
            body: JSON.stringify({
              userId: userId,
              role: userRole
            })
        })
        const data = await response.json();
        if(data.success){
          toast.success(data.message)
          onclose()
          fetchAllUsers()
        }
        setuserRole(data.role);
        console.log("role updated: ", data);
    }

  return (
    <div className='change-user-role'>
      <h4>Change User Role</h4>
      <div className="name-email">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
      </div>
      <div className="role">
        <p>Role : </p>
        <select value={userRole} onChange={handleOnChangeSelect}>
            {
                Object.values(ROLE).map((item, index)=>{
                    return (
                        <option value={item} key={index}>{item}</option>
                    )
                })
            }
        </select>
      </div>
      <div className="change-role-btn">
        <button onClick={updateUserRole}>Change Role</button>
      </div>
      <i className="fa-solid fa-xmark" onClick={onclose}></i>
    </div>
  )
}

export default ChangeUserRole
