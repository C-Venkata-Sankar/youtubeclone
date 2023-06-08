import { useDispatch } from 'react-redux';
import './App.css';
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import AllRoutes from './components/AllRoutes';
import DrawerSidebar from './components/LeftSideBar/DrawerSidebar';
import Navbar from './components/Navbar/Navbar';
import React, {useEffect} from "react";
import {useState} from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { fetchAllChanel } from './actions/chanelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo } from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';



function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllChanel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
  }, [dispatch])
  
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      settoggleDrawerSidebar({
        display: "flex"
      })
    }else{
      settoggleDrawerSidebar({
        display: "none"
      })      
    }
  }
  const [EditCreateChanelBtn, setEditCreateChanelBtn] = useState(false)
  const [VidUploadPage, setVidUploadPage] = useState(false)
  return (
    <Router>
      {
        VidUploadPage && <VideoUpload setVidUploadPage = {setVidUploadPage}/>
      }
      
      {
        EditCreateChanelBtn && 
    <CreateEditChanel setEditCreateChanelBtn = {setEditCreateChanelBtn}/>
      }
    <Navbar setEditCreateChanelBtn = {setEditCreateChanelBtn}
      toggleDrawer = {toggleDrawer}
    />{
      <DrawerSidebar 
      toggleDrawer = {toggleDrawer}
      toggleDrawerSidebar = {toggleDrawerSidebar}
      />
    }
    <AllRoutes setEditCreateChanelBtn = {setEditCreateChanelBtn} setVidUploadPage = {setVidUploadPage}/>   
    </Router>
  );
}

export default App;
