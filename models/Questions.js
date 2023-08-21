import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto"

const schema = new mongoose.Schema({
    title: String,
    bodyq: String,
  });
  schema.methods.getJWTToken = function(){
    return jwt.sign({_id:this._id},process.env.JWT_SECRET,{
        expiresIn:"15d",
    }); 
    
};
schema.methods.getResetToken = function(){
    const resetToken = crypto.randomBytes(20).toString("hex");
    this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex")  
    this.resetPasswordExpire = Date.now() + 15*60*1000;
    return resetToken;
};
export const Questions = mongoose.model("Questions", schema)