const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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

const userModel = mongoose.model("users",userSchema)

module.exports = userModel