const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    date:{
        type:Date,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    subtitle:{
        type:String,
        required: true
    },
    content:{
        type:String,
    },
    image:{
        type:String,
    },
    video:{
        type:String,
    },
    category:{
        type:Array,
    }
})

module.exports = mongoose.model('Post', PostSchema);