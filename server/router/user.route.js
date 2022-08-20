import express from "express";
import { auth } from "../controller/user.controller.js";
const router = express.Router();

router.route("/auth").post(auth);
export default router;
