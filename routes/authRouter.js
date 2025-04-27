import { Router } from "express";
const router = Router();

// <============================> Controllers <============================>

import { register, login } from "../controllers/authControllers.js";

// <============================> Middle-wares <============================>

import {
  validateRegistrationInput,
  validateLoginInput,
} from "../middleware/validationMiddleware.js";

// <============================> Routes <============================>

router.post("/register", validateRegistrationInput, register);
router.post("/login", validateLoginInput, login);

export default router;
