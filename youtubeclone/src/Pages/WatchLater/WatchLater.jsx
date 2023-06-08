import React from 'react'
import vid from '../../components/Video/vid.mp4';
import WHL from '../../components/WHL/WHL';

function WatchLater() {
  const likedvideo = [{
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
<WHL page = {"Watch Later"} videoList = {likedvideo}/>
)
}

export default WatchLater