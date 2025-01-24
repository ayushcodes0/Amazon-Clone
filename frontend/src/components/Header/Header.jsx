import React from "react";
import "./Header.css";
import logo_amazon from "../../assets/products/assets";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "../../store/userSlice";
import { toast } from "react-toastify";
import ROLE from "../../common/role";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleLogout = ()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    dispatch(setUserDetails(null));
    toast.success("Sign Out Successfull")
    navigate("/");
  }

  const handleSearch = (e)=>{
    const {value} = e.target;
    if(value){
      navigate(`/search?q=${value}`);
    }
    else{
      navigate("/search");  
    }
  }

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to={"/"}>
            <img src={logo_amazon} alt="" />
          </Link>
        </div>
        <div className="location">
          <div className="loc-icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="loc-info">
            <p>Delivering to Delhi 110001</p>
            <h4>Update location</h4>
          </div>
        </div>
        <div className="search">
          <input type="text" placeholder="Search Amazon.in" onChange={handleSearch} />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="lang">
          <select name="EN" id="">
            <option value="english">English</option>
            <option value="english">Hindi</option>
            <option value="english">Marathi</option>
            <option value="english">Panjabi</option>
          </select>
        </div>
        <div className="account">
          <div className="loc-info">
            <p>Hello, {user?.name || "sign in"}</p>
            <h4>Account & List</h4>
          </div>
          <div className="drawer">
              <div className="signin-button">
                <Link style={{ textDecoration: "none" }} to={"/login"}>
                  <button>Sign in</button>
                </Link>
              </div>
              <hr />
              <div className="drawer-info">
                <p>Your Account</p>
                <p>Your Orders</p>
                { user?.role === ROLE.ADMIN && <Link style={{ textDecoration: "none" }} to={"/admin-panel/all-products"}><p>Admin Panel</p></Link>}
                
                <p onClick={handleLogout}>Sign Out</p>
                
              </div>
              <hr />
              <i className="fa-solid fa-caret-up"></i>
          </div>
        </div>
        <div className="orders">
          <div className="loc-info">
            <p>Returns</p>
            <h4>& Orders</h4>
          </div>
        </div>
        <Link className="cart" style={{ textDecoration: "none" }} to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
          <h4>Cart</h4>
        </Link>
      </div>
    </>
  );
};

export default Header;
