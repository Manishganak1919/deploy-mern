import User from '../models/usermodel.js';
import dotenv from 'dotenv';

dotenv.config();
export const CreatePost = async(req,res)=>{
    const {name,email,phone,age} = req.body;
  
    try {
      const userAdded = await User.create({
          name:name,
          email:email,
          phone:phone,
          age:age
      })
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({error:error.message});
    }
}
export const GetPost = async(req,res)=>{
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.message});
  }
}
/***this is getting single */
export const GetSingle = async(req,res)=>{
  const {id} = req.params;
  try {
    const singleUser = await User.findById({_id:id});
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.message});
  }
}
/***this is delete operation */
export const deleteOp = async(req,res)=>{
  const {id} = req.params;
  try {
    const deleteUser = await User.findByIdAndDelete({_id:id});
    res.status(200).json(deleteUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.message});
  }
}
/*** user edit kar payega isko  */
export const Updateop = async(req,res)=>{
  const {id} = req.params;
  const {name,email,phone,age} = req.body;
  try {
    const UpdateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).json(UpdateUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({error:error.message});
  }
}