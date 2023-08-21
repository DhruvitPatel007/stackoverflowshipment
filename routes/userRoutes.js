import express from "express";
const router = express.Router();

router.route("/register").post(singleUpload, register);
router.route("/login").post(login);

export default router;