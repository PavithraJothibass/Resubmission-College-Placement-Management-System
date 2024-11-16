import { catchAsyncErrors } from "../middlewares/catchAsyncError.js";
import { User } from "../models/userSchema.js";
import ErrorHandler from "../middlewares/error.js";
import { sendToken } from "../utils/jwtToken.js";

// Register a new user
export const register = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, password, role } = req.body;

  if (!name || !email || !phone || !password || !role) {
    return next(new ErrorHandler("Please fill out the full form!", 400));
  }

  const isEmail = await User.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email is already registered!", 400));
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
    role,
  });

  // Send token in response
  sendToken(user, 201, res, "User registered successfully!");
});

// Login user
export const login = catchAsyncErrors(async (req, res, next) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return next(new ErrorHandler("Please provide email, password, and role.", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password.", 400));
  }

  if (user.role !== role) {
    return next(
      new ErrorHandler(`No user found with the provided email and role (${role}).`, 404)
    );
  }

  // Send token in response
  sendToken(user, 200, res, "User logged in successfully!");
});

// Logout user
export const logout = catchAsyncErrors(async (req, res, next) => {
  res
    .status(200)
    .cookie("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      expires: new Date(Date.now()), // Expire cookie immediately
    })
    .json({
      success: true,
      message: "Logged out successfully.",
    });
});

// Get logged-in user details
export const getUser = catchAsyncErrors((req, res, next) => {
  const user = req.user;

  if (!user) {
    return next(new ErrorHandler("No user is logged in.", 401));
  }

  res.status(200).json({
    success: true,
    user,
  });
});
