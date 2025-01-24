import React, { useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import summaryApi from './common'
import Context from './context'
import {useDispatch} from "react-redux";
import { setUserDetails } from './store/userSlice'

function App() {
  

  const dispatch = useDispatch()

  const fetchUserDetails = async ()=>{
    const response = await fetch(summaryApi.currentUser.url,{
      method: summaryApi.currentUser.method,
      headers: {
        "authorization" : localStorage.getItem("token")
      }
    })
    const data = await response.json();
    if(data.success){
      dispatch(setUserDetails(data.data))
    }
    console.log("current-user", data);
  }

  useEffect(() => {
    fetchUserDetails();
  }, [])
  

  return (
    <>
      <Context.Provider value={{
        fetchUserDetails
      }}>
      <ToastContainer/>
      <Header/>
      <main><Outlet/></main>
      <Footer/>
      </Context.Provider>
    </>
  )
}

export default App
