import React from 'react'
import LeftSidebar from '../../components/LeftSideBar/LeftSidebar'
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../components/Video/vid.mp4'
import DescribeChanel from './DescribeChanel';
import { useParams } from 'react-router-dom';

function Chanel({setEditCreateChanelBtn, setVidUploadPage}) {
  const{Cid} = useParams();
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
            <LeftSidebar/>
            <div className="Continer2_Pages_App">
                <DescribeChanel 
                Cid = {Cid}
                setVidUploadPage = {setVidUploadPage}
                setEditCreateChanelBtn = {setEditCreateChanelBtn}/>
            <ShowVideoGrid vids = {vids}/>
            </div></div>
  )
}

export default Chanel