import React from 'react'
import './Library.css'
import WHLVideoList from '../../components/WHL/WHLVideoList'
import {FaHistory} from 'react-icons/fa'
import LeftSidebar from '../../components/LeftSideBar/LeftSidebar'
import vid from '../../components/Video/vid.mp4'
import { MdOutlineWatchLater } from 'react-icons/md'
import { AiOutlineLike } from 'react-icons/ai'
function Library() {
  const vids = [{
    _id:1,
    video_src: vid,
    Chanel:"62bafe6752cea3a6c3068f",
    title:"Video 1",
    Uploder: "abc",
    description: "description of video 1"
  }, 
  {
    _id:2,
    video_src:vid,
    Chanel:"cdd",
    title:"video2",
    Uploder: "abc",
    description:"description of video 2"
  },
   {
    _id:3,
    video_src: vid,
    Chanel:"add",
    title:"Video 3",
    Uploder:"abc",
    description: "description of video 3"
   },
   {
    _id:4,
    video_src: vid,
    Chanel:"add",
    title:"Video 4",
    Uploder:"abc",
    description: "description of video 3"
   },];
return (
  <div className = 'Container_Pages_App'>
      <LeftSidebar />
      <div className="Continer2_Pages_App">
        <div className="contaner_Libraray_page">
          
            <h1 className='title_container_library_page'>
              <b>
                <FaHistory />
              </b>
              <b>History</b>
            </h1>
            <div className="container_videoList_library_page">
              <WHLVideoList 
              page  = {"History"}
              videoList={vids}/>
            </div>
            </div>
        <div className="contaner_Libraray_page">
          
            <h1 className='title_container_library_page'>
              <b>
                <MdOutlineWatchLater />
              </b>
              <b>Watch Later</b>
            </h1>
            <div className="container_videoList_library_page">
              <WHLVideoList 
              page  = {"Watch Later"}
              videoList={vids}/>
            </div>
          </div>
        <div className="contaner_Libraray_page">
          
            <h1 className='title_container_library_page'>
              <b>
                <AiOutlineLike />
              </b>
              <b>Liked Videos</b>
            </h1>
            <div className="container_videoList_library_page">
              <WHLVideoList 
              page  = {"Watch Later"}
              videoList={vids}/>
            </div>
          </div>
        </div>
          </div>
          
)}

export default Library


