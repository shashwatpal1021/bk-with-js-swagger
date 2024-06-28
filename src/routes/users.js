import { Router } from "express";
import { hello } from "../controllers/user.controller.js";

const router = Router();

router.route("/").get(hello);

export default router;