import { Router } from "express";
const router = Router();

// <============================> Controllers <============================>

import { register, login, logout } from "../controllers/authController.js";

// <============================> Middle-wares <============================>

import {
  validateRegistrationInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

// <============================> Routes <============================>

router.post("/register", validateRegistrationInput, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
