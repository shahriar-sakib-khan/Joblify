import { Router } from "express";
const router = Router();

// <============================> Controllers <============================>

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

// <============================> Middle-Wares <============================>

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

// router.get("/", getAllJobs);
// router.post("/", createJob);

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateJobInput, validateIdParam, updateJob)
  .delete(validateIdParam, deleteJob);

export default router;
