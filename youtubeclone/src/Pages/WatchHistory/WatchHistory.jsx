import React from 'react'
import WHL from '../../components/WHL/WHL';
import vid from '../../components/Video/vid.mp4';

function WatchHistory() {
    const history = [{
        _id:1,
        video_src: vid,
        Chanel:"62bafe6752cea3a6c3068f",
        title:"Video 1",
        Uploder: "abc",
        description: "description of video 1"
      }, 
      {
        _id:2,
        video_src: vid,
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
    <WHL page = {"History"} videoList = {history}/>
  )
}

export default WatchHistory