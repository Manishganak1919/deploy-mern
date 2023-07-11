//import mongoose from "mongoose";
import express from "express";
import {CreatePost,GetPost,GetSingle,deleteOp,Updateop} from '../usercontroller/datacontroller.js';

/***create*/

const router = express.Router();

router.post('/',CreatePost);
router.get('/',GetPost);
router.get('/:id',GetSingle);
router.delete('/:id',deleteOp);
router.patch('/:id',Updateop);
export default router;