import * as api from "../api"

export const addToLikedVideo = (likedVideoData)=>async(dispatch)=>{
    try{
        // console.log(authData)
        const {data} = await api.addToLikedVideo(likedVideoData);
        dispatch({type: "POST_LIKEDVIDEO",data})
        dispatch(getAlllikedVideo())

    }catch(error){
        console.log(error)
    }
}
export const getAlllikedVideo=()=> async (dispatch)=>{
    try {
      const {data}= await api.getAlllikedVideo();
      console.log(data);
      dispatch({type:'FETCH_ALL_LIKED_VIDEOS',payload:data})
    } catch (error) {
        console.log(error)
    }
  }

  