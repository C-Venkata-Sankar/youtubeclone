import React from 'react'
import Home from '../Pages/Home/Home'
import {
    Routes,
    Route,
  } from "react-router-dom";
import Library from '../Pages/Library/Library';
import YourVideos from '../Pages/YourVideos/YourVideos';
import WatchLater from '../Pages/WatchLater/WatchLater';
import LikedVideo from '../Pages/LikedVideo/LikedVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import Chanel from '../Pages/Chanel/Chanel';

function AllRoutes( {setEditCreateChanelBtn, setVidUploadPage}) {
  return (
    
    <Routes>
        <Route path = '/' element = {<Home />}/>
        <Route path = '/library' element = {<Library/>}/>
        <Route path = '/history' element = {<WatchHistory/>}/>
        <Route path = '/watchlater' element = {<WatchLater />}/>
        <Route path = '/likedvideos' element = {<LikedVideo />}/>
        <Route path = '/yourvideos' element = {<YourVideos/>}/>
        <Route path = '/videopage/:vid' element = {<VideoPage/>}/>
        <Route path='/chanel/:Cid' element = {<Chanel 
        setVidUploadPage = {setVidUploadPage}
        setEditCreateChanelBtn = {setEditCreateChanelBtn}/>}/>
        
    </Routes>
  )
}

export default AllRoutes