const mongoose = require("mongoose");

const AudioUserSchema = new mongoose.Schema({
    userName:{type:String},
    email:{type:String},
    password: {
        type: String,
      },
      address: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
})

const audiouserModel = mongoose.model("AudioUser",AudioUserSchema)

module.exports = audiouserModel