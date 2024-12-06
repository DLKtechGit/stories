const storyModel = require("../models/storyModel");
const userModel = require("../models/userModel");

const createStory = async (req, res) => {
    const { userId, title, genre, description } = req.body;
  
    if (!userId || !title || !genre || !description) {
      return res.status(400).send({
        message: "All fields are required",
      });
    }
  
    try {
      const user = await userModel.findById(userId);
  
      if (!user) {
        return res.status(404).send({
          message: "User not found",
        });
      }
  
      const storyDetails = await storyModel.create({
        title,
        genre,
        description,
        userDetails: user, 
      });
  
      res.status(201).send({
        message: "Story created successfully",
        storyDetails,
      });
  
    } catch (error) {
      console.error(error);
      return res.status(500).send({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  };

  const getAllStories = async(req,res)=>{
    try {
        const story = await storyModel.find()
    
        res.status(200).send({
            message:"Stories retrived successfully",
            story
        })
    } catch (error) {
        console.error(error);
      return res.status(500).send({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }

  const getAllStoriesbyGenre = async(req,res)=>{
    const {genre} = req.body
    try {
        const story = await storyModel.find({ genre })
    
        res.status(200).send({
            message:"Stories retrived successfully",
            story
        })
    } catch (error) {
        console.error(error);
      return res.status(500).send({
        message: "Internal Server Error",
        error: error.message,
      });
    }
  }
  

module.exports = {
    createStory,
    getAllStories,
    getAllStoriesbyGenre
}