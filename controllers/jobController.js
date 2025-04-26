import JobModel from "../models/JobModel.js";
import { NotFoundError } from "../errors/customError.js";
import { StatusCodes } from "http-status-codes";

// <============================>  <============================>

export const getAllJobs = async (req, res) => {
  const jobs = await JobModel.find({});
  res.status(200).json({ msg: "all jobs!", jobs });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await JobModel.findById(id);
  if (!job) throw new NotFoundError(`no job with id ${id}`);
  res.status(StatusCodes.OK).json({ msg: "job you searched for!", job });
};

export const createJob = async (req, res) => {
  const job = await JobModel.create(req.body);

  res.status(StatusCodes.CREATED).json({ msg: "job created!", job });
};

export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await JobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob) throw new NotFoundError(`no job with id ${id}`);

  res.status(StatusCodes.OK).json({ msg: "job modified!", job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const deletedJob = await JobModel.findByIdAndDelete(id);
  if (!deletedJob) throw new NotFoundError(`no job with id ${id}`);

  res.status(StatusCodes.OK).json({ msg: "job deleted!", job: deletedJob });
};
