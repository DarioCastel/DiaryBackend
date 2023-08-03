const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const loginShema = new Schema(
    {
        username:{
            type:String,
            required: true
        },
        password:{
            type:String,
        }
    }
)