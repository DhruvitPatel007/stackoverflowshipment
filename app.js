import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js"
import cookieParser from "cookie-parser"

config({
    path:"./config/config.env",
});
 
const app = express(); 

//Using Middlewares
app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
)

app.use(cookieParser());


import user from "./routes/userRoutes.js"
import  questions  from "./routes/questionsRoutes.js";


app.use("/api/v1",user)
app.use("/api/v1",questions)


export default app;

app.get("/",(req,res)=>{
    res.send('Site is working.')
})

app.use(ErrorMiddleware);