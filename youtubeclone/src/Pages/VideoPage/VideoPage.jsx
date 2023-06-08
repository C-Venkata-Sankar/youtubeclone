import React from 'react'
// import vid from '../../components/Video/vid.mp4'
import {useSelector} from "react-redux"
import './VideoPage.css'
import moment from 'moment'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../components/ShowVideo/Coments/Comments'
import { Link, useParams } from 'react-router-dom'
function VideoPage() {
    const {vid} = useParams();
    // const chanels = useSelector(state =>state.chanelReducer)
  
    // const currentChanel = chanels.filter(c=>c._id===vid)[0];
    // console.log(vid)
    const vids = useSelector(state=>state.videoReducer);
    const vv= vids?.data.filter((q)=> q._id === vid)[0];
    
  return (
    <>
    <div className="container_videoPage">
    <div className="container2_videoPage">
        <div className="video_display_screen_videoPage">
            <video src={`http://localhost:5500/${vv?.filePath}`}
            className={"video_ShowVideo_videoPage"} 
            controls 
            //autoPlay >
            ></video>
            <div className="video_details_videoPage">
                <div className="video_btns_title_VideoPage_content">
                    <p className='video_title_videopage'>{vv?.videoTitle}</p>
                    <div className="views_date_btns_videopage">
                        <div className="views_videopage">
                         {vv?.Views} views <div className="dot"></div>{moment(vid?.createdAt).fromNow()}
                        </div>            
                    </div>
                    </div>
                    <LikeWatchLaterSaveBtns vv = {vv} vid = {vid}/>
                    <Link to ={`/chanel/${vv?.videoChanel}`} className="chanel_details_videopage">
                        <b className='chanel_logo_videopage'>
                            <p>{vv?.Uploder.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className='chanel_name_videopage'>{vv?.Uploder}</p>
                    </Link>
                    <div className="comments_videopage">
                        <h2><u>Coments</u></h2>
                        <Comments />

                    </div>
                </div>
        </div>
        <div className="moreVideoBar">
            More Video
        </div>
        </div>
        </div>
    </>
  )
}

export default VideoPage