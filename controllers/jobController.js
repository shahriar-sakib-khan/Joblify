import { StatusCodes } from "http-status-codes";

import Job from "../models/JobModel.js";

// <============================>  <============================>

export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res.status(200).json({ msg: "all jobs!", jobs });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.status(StatusCodes.OK).json({ msg: "job you searched for!", job });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "job created!", job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: "job modified!", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await Job.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: "job deleted!", job: deletedJob });
};
