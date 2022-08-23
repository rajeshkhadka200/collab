import express from "express";
import {
  getMycode,
  postCode,
  deleteCode,
} from "../controller/code.controller.js";
const router = express.Router();

router.route("/:user_id").get(getMycode); // get all the code of a single person by id
router.route("/").post(postCode); // post the code
router.route("/:code_id").delete(deleteCode); // delete the code
export default router;
