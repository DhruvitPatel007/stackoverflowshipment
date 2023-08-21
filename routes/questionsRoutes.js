import express from "express";
import { createquestion } from "../controllers/QuestionsController.js";

const router = express.Router();

router.route("/createquestion").post(createquestion);

export default router;