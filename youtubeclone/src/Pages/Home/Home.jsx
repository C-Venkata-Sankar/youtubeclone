import React from 'react'
import './Home.css'
import LeftSidebar from '../../components/LeftSideBar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../components/Video/vid.mp4'
import { useSelector } from 'react-redux'
function Home() {

  const vids = useSelector(state=>state.videoReducer)?.data;
  // console.log(videosFile)
  // const vids = [{
  //   _id:1,
  //   video_src: vid,
  //   Chanel:"62bafe6752cea3a6c3068f",
  //   title:"Video 1",
  //   Uploder: "abc",
  //   description: "description of video 1"
  // }, 
  // {
  //   _id:2,
  //   video_src:vid,
  //   Chanel:"cdd",
  //   title:"video2",
  //   Uploder: "abc",
  //   description:"description of video 2"
  // },
  //  {
  //   _id:3,
  //   video_src: vid,
  //   Chanel:"add",
  //   title:"Video 3",
  //   Uploder:"abc",
  //   description: "description of video 3"
  //  },
  //  {
  //   _id:4,
  //   video_src: vid,
  //   Chanel:"add",
  //   title:"Video 4",
  //   Uploder:"abc",
  //   description: "description of video 3"
  //  },];
   const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy"
   ]
  return (
    <div className = 'Container_Pages_App'>
        <LeftSidebar />
        <div className="Continer2_Pages_App">
          <div className="navigation_home">
            {
              NavList.map(m=>{
                return(
                <p key={m} className='btn_nav_home'>
                  {m}
                </p>)
              })
            }
          </div>
          <ShowVideoGrid vids = {vids}/>
            </div></div>
  )
}

export default Home