import { getUsersController } from "../controllers/user.controller.js";
import { checkRole } from "../middlewares/role.middleware.js";
import express from "express";

const router = express.Router();

router.get('/', checkRole('USER'), getUsersController);

export default router;
