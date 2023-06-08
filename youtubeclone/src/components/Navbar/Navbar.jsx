import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from "./logo.ico"
import SearchBar from './SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdNotificationsOutline} from "react-icons/io"
import {BiUserCircle} from "react-icons/bi"
import {GoogleLogin} from "react-google-login"
import { gapi } from 'gapi-script';
import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../actions/auth'
import Auth from '../../Pages/Auth/Auth'


function Navbar({toggleDrawer, setEditCreateChanelBtn}) {
  const [AuthBtn, setAuthBtn] = useState(false)

  // const CurrentUser = null;
  // const CurrentUser = {
  //   result:{
  //     email:"xyz@gmail.com",
  //     joinedOn: "2222-07-15T09:57:23.49Z",
  //   },
  // };
  const CurrentUser = useSelector(state=>state.currentUserReducer)
  console.log(CurrentUser)

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:"955461963196-h49jiucjeihj2dnbesov0i8trg3ahit6.apps.googleusercontent.com",
        
        scope: "email",
      });
    }
    gapi.load("client:auth2",start)
  },[]);
  const  dispatch = useDispatch();
  const onSuccess = (response) =>{
    const Email= response?.profileObj.email;
    // console.log(Email);
    dispatch(login({email:Email}))
  } 
  const onFailure=(response)=>{
    console.log("Failed",response)
  }
  return (
    <>
  <div className ="container_Navbar">
    <div className = "Burger_logo_Navbar">
      <div className = "burger" onClick={()=>toggleDrawer()}>
        <p></p>
        <p></p>
        <p></p>
      </div>
       <div className = "logo_div_navbar">
        <img src = {logo} alt = ""/>
        <p className = "logo_title_Navbar">YouTube</p>
      </div>
      </div>
      <SearchBar size = {22}/>
      <RiVideoAddLine size = {22} className = {"vid_bell_Navbar"}/>
      <div className = "apps_box">
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
        <p className = "appBox"></p>
      </div>
      <IoMdNotificationsOutline size = {22} className = {"vid_bell_Navbar"}/>
      <div className="Auth_cont_Navbar">
        {CurrentUser? (
          <>
          <div className='Chanel_logo_App' onClick={()=>setAuthBtn(true)}>
            <p className = "fstchar_logo_App">{
              CurrentUser?.result.name ?(
                <>
                {CurrentUser?.result.name.charAt(0).toUpperCase()}
                </>
              ):(<>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>)
            }
              </p></div></>
        ):(
          <>
          <GoogleLogin 
          clientId={'955461963196-h49jiucjeihj2dnbesov0i8trg3ahit6.apps.googleusercontent.com'}
          onSuccess={onSuccess}
          onFailure={onFailure}
          render={(renderProps)=>(
          <p  onClick={renderProps.onClick} className="Auth_btn">
          <BiUserCircle onClick={renderProps.onClick} size = {22}/>
          <b>Sign in</b>
        </p>)
        }
          />
        
        </>
        )}
      </div>
    </div>
    {
      AuthBtn && 
     <Auth 
     setEditCreateChanelBtn = {setEditCreateChanelBtn}
     setAuthBtn = {setAuthBtn}
     User = {CurrentUser}
     /> 
    }
    </>
  );
}

export default Navbar
