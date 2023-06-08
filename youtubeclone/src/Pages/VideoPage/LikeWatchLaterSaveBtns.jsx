import React from 'react'
import { useState } from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {MdPlaylistAddCheck} from 'react-icons/md'
import {RiPlayListAddFill, RiHeartAddFill, RiShareForwardLine} from 'react-icons/ri'
import {AiFillDislike, AiOutlineDislike,AiFillLike, AiOutlineLike} from 'react-icons/ai'
import './LikeWatchLaterSaveBtns.css'
import { useDispatch, useSelector } from 'react-redux'
import { likeVideo } from '../../actions/video'
import { addToLikedVideo } from '../../actions/likedVideo'

function LikeWatchLaterSaveBtns({vv, vid}) {
    const CurrentUser = useSelector(state=>state?.currentUserReducer)
    const dispatch = useDispatch();
    const [SAveVideo, setSAveVideo] = useState(true)
    const [Dislikebtn, setDislikebtn] = useState(false)
    const [LikeBtn, setLikeBtn] = useState(false)
    const toggleSavedVideos = ()=>{
        if (SAveVideo){
            setSAveVideo(false);
        }else{
            setSAveVideo(true);
        }
    }
    const toggleLikeBtn=(e, lk)=>{
        if(CurrentUser){
        if(LikeBtn){
            setLikeBtn(false);
            dispatch(
                likeVideo({
                    id: vid, Like: lk-1,
                }));
                
        }else{
            setLikeBtn(true);
            dispatch(
                likeVideo({
                    id: vid, 
                    Like: lk+1,
                })
            );
            dispatch(addToLikedVideo({
                videoId: vid,
                Viewer: CurrentUser?.result._id,
            }))

            setDislikebtn(false);}
        }else{
            alert("Plz login to give a like")
        }
    }
    const toggleDislikeBtn=(e, lk)=>{
        if (CurrentUser){
        if (Dislikebtn){
            setDislikebtn(false);
        }else{
            setDislikebtn(true);
            if(LikeBtn){
                dispatch(
                    likeVideo({
                        id: vid, Like: lk - 1,
                    }))
            }
            setLikeBtn(false);
        }}else{
            alert("Plz login to give a like")
        }
    }
  return (
    <div className='btns_cont_videopage'>
        <div className="btn_VideoPage">
            <BsThreeDots/>
        </div>
        <div className="btn_VideoPage">
            <div className="like_videoPage" onClick={(e) => toggleLikeBtn(e, vv.Like)}>
                {LikeBtn?(
                    <>
                <AiFillLike size ={22} className = 'btns_videoPage'/>
                </>):(
                    <>
                <AiOutlineLike size ={22} className = 'btns_videoPage'/>
                </>
                )}
                <b>{vv?.Like}</b>
            </div>
            <div className="like_videoPage" onClick={(e) => toggleDislikeBtn(e, vv.Like)}>
                {Dislikebtn?(
                    <>
                <AiFillDislike size ={22} className = 'btns_videoPage'/>
                </>):(
                    <>
                <AiOutlineDislike size ={22} className = 'btns_videoPage'/>
                </>
                )}
                <b>DISLIKE</b>
            </div>
            <div className="like_videoPage">
                <>
                <RiHeartAddFill size ={22} className = 'btns_videoPage'/>
                <b>Thanks</b>
                </>           </div>
            <div className="like_videoPage">
                <>
                <RiShareForwardLine size ={22} className = 'btns_videoPage'/>
                <b>Share</b>
                </>           </div>
                <div className="like_videoPage" onClick={toggleSavedVideos}>
                {SAveVideo?(
                    <>
                <RiPlayListAddFill size ={22} className = 'btns_videoPage'/>
                <b>save</b>
                </>):(
                    <>
                <MdPlaylistAddCheck size ={22} className = 'btns_videoPage'/>
                <b>saved</b>
                </>
                )}
            </div>
        </div>
        </div>
  )
}

export default LikeWatchLaterSaveBtns