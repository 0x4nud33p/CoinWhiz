import  { Router } from "express";
import { registerUser, login } from "../controllers/user.controller.js";

const router = Router();

router.post('/auth/signup',registerUser);
router.post('/auth/login',login);

export default router;