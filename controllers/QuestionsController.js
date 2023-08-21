
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { Questions } from "../models/Questions.js";
import { sendToken } from "../utils/sendToken.js";


export const createquestion = catchAsyncError(async (req, res, next) => {
    const { title, bodyq} = req.body;
  
    if (!title|| !bodyq){
      return next(new ErrorHandler("Please enter all the fields", 400));  
    }
    
    let question = await Questions.create({
        title,
        bodyq
      });
  
    sendToken(res, question, "Post created Successfully", 201);
  });

  



