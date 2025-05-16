import { Router } from "express";
const router = Router();

// <============================> Controllers <============================>

import {
  getApplicationStats,
  getCurrentUser,
  updateUser,
} from "../controllers/userController.js";

// <============================> Middle-wares <============================>
import {
  authorizePermissions,
  validateUpdateUserInput,
} from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";

// <============================> Routes <============================>

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
router.patch(
  "/update-user",
  upload.single("avatar"),
  validateUpdateUserInput,
  updateUser
);

export default router;
