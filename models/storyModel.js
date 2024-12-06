const mongoose = require("mongoose");


const storySchema = new mongoose.Schema({
    title:{type:String},
    genre:{type:String},
    description:{type:String},
    createdAt:{type:Date,default:Date.now},
    userDetails:{}
})

const storyModel = mongoose.model('stories',storySchema)

module.exports = storyModel

