import mongoose from "mongoose";
/***this is schema of data **/
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    phone:{
        type:Number,
        unique:true,
        require:true
    },
    age:{
        type:Number
    }
},{timestamps:true});

/****create a model */
const User = mongoose.model("User",userSchema);
export default User;