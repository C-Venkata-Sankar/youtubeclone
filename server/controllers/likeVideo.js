import likedVideo from "../models/likedVideo.js"
import mongoose from "mongoose"

export const likeVideoController = async(req, res)=>{
    const likeVideoData  =req.body;
    // console.log(likeVideoData)

    const addToLikedVideo = new likedVideo(likeVideoData);
    try {
        await addToLikedVideo.save();
        res.status(200).json("added to liked videos")
        // console.log("Done")
    } catch (error) {
        res.status(400).json(error)
        
    }
}

export const getAlllikeVideoController= async (req, res)=>{
    try {
      const files= await likedVideo.find();
      // console.log(files)
      res.status(200).send(files)
    } catch (error) {
      res.status(404).send(error.message)
    }
  }

