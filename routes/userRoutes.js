import express from "express";
import { login } from "../controllers/UserController.js";
import { register } from "../controllers/UserController.js";


const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);

export default router;