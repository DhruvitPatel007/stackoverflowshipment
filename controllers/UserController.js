
import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../utils/errorHandler.js";
import { User } from "../models/User.js";
import { sendToken } from "../utils/sendToken.js";


export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;
  
    if (!name || !email || !password)
      return next(new ErrorHandler("Please enter all fields", 400));
  
    let user = await User.findOne({ email });
  
    if (user) return next(new ErrorHandler("User already exist", 409));
  
  
    user = await User.create({
      name,
      email,
      password,
    });
  
    sendToken(res, user, "Registered Successfully", 201);
  });

  export const login = catchAsyncError(async (req, res, next) => {
    const { email, password } = req.body;
  
  
    if (!email || !password)
      return next(new ErrorHandler("Please enter all fields", 400));
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));
  
    const isMatch = await user.comparePassword(password);
  
    if (!isMatch)
      return next(new ErrorHandler("Incorrect Email or Password", 401));
  
    sendToken(res, user, `Welcome back, ${user.name}`, 200);
  });