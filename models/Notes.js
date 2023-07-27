const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    date:{
        type:Date,
        required: true
    },
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
    }
})

module.exports = mongoose.model('Note', NoteSchema);