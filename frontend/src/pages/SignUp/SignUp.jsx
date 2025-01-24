import React from 'react'
import "./SignUp.css"
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import summaryApi from '../../common'
import { toast } from 'react-toastify'

const SignUp = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    })

const navigate = useNavigate();

const handleOnChange = (e)=>{
    const {name, value} = e.target;

    setData((prev)=>{
        return{
            ...prev,
            [name]: value
        }
    })
}

const handleSubmit = async(e)=>{
    e.preventDefault();

    const response = await fetch(summaryApi.signUp.url, {
        method: summaryApi.signUp.method,
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })

    const resData = await response.json();
    if(resData.success){
        toast.success(resData.message);
        localStorage.setItem("token",resData.jwtToken)
        localStorage.setItem("loggedInUser",resData.name)
        navigate("/")
    }
    else if (resData.error){
        toast.error(resData.message)
    }
}




return (
<section id='login' className='login'>
    <div className="complete-login-info">
    <div className="login-information">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div><input required name='name' value={data.name} onChange={handleOnChange} type="text" placeholder='Name' /></div>
            <div><input required name='email' value={data.email} onChange={handleOnChange} type="email" placeholder='Email' /></div>
            <div><input required name='password' value={data.password} onChange={handleOnChange} type="password" placeholder='Password' /></div>
            <div><button>Continue</button></div>
        </form>
        <div className="bottom-information">
            <p>By continuing, you agree to Amazon's Condition of Use and Privacy Notice</p>
        </div>
    </div>
    <div className="create-acc">
        <div className="new-to-amazon">
            <hr />
            <p>Have an account?</p>
            <hr />
        </div>
        <div className="create-button">
            <Link to="/login"><button>Login to your Amazon account</button></Link>
        </div>
    </div>
    </div>
</section>
)
}

export default SignUp
