import mongoose from "mongoose";
export const connectDB = async()=>{
   const {connection}= await mongoose.connect(process.env.DBURL);
   console.log(`MongoDB connected with ${connection.host}`)
}  