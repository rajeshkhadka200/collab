import express from "express";
import { auth,getUser } from "../controller/user.controller.js";
const router = express.Router();

router.route("/").post(auth); // auth for user
router.route("/:id").get(getUser); // get the user by g_auth id 
export default router;
