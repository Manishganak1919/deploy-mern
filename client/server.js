import express from "express";
import dotenv from 'dotenv';
import Connection from "./database/db.js";
import router from "./routers/userRoutes.js";
import cors from 'cors';
import path from "path";

const __dirname = path.resolve();

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();
app.use(express.static(path.join(__dirname,"./client/build")));
app.get('*',function(_,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"),function(err){
        res.status(500).send(err);

    })
})

const PORT = process.env.PORT || 8000;


app.listen(PORT,()=>{
    console.log(`server is running at port no ${PORT}`);
})

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username,password);
app.use(router);


