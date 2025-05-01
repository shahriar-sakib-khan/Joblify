import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  // const userWithoutPassword = user.toJSON();
  // res.status(StatusCodes.OK).json({user: userWithoutPassword});
  res.status(StatusCodes.OK).json(user);
};

export const getApplicationStats = async (req, res) => {
  const userCount = await User.countDocuments();
  const jobCount = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ userCount, jobCount });
};

export const updateUser = async (req, res) => {
  const userObj = { ...req.body };
  delete userObj.password;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, userObj);
  res.status(StatusCodes.OK).json({ msg: "user updated", updatedUser });
};
