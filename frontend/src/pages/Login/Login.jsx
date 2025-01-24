import React, { useContext, useState } from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
import summaryApi from '../../common'
import { toast } from 'react-toastify'
import Context from '../../context'


const Login = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleOnChange = (e)=>{
        const {name, value} = e.target;

        setData((prev)=>{
            return{
                ...prev,
                [name]: value
            }
        })
    }

    const navigate = useNavigate();
    const {fetchUserDetails} = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault();

        const response = await fetch(summaryApi.login.url, {
            method: summaryApi.login.method,
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
            fetchUserDetails();
        }
        else if (resData.error){
            toast.error(resData.message)
        }
    }



  return (
    <section id='login' className='login'>
        <div className="complete-login-info">
        <div className="login-information">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <div><input required name='email' value={data.email} onChange={handleOnChange} type="email" placeholder='Email' /></div>
                <div><input required name='password' value={data.password} onChange={handleOnChange} type="password" placeholder='Password' /></div>
                <div><button>Continue</button></div>
            </form>
            <div className="bottom-information">
                <p>By continuing, you agree to Amazon's Condition of Use and Privacy Notice</p>
            </div>
            <div className="forgot">
                <i className="fa-solid fa-caret-right"></i>
                <Link style={{textDecoration: "none"}} to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
        <div className="create-acc">
            <div className="new-to-amazon">
                <hr />
                <p>New to Amazon?</p>
                <hr />
            </div>
            <div className="create-button">
                <Link to="/sign-up"><button>Create your Amazon account</button></Link>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Login
