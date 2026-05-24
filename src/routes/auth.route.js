import express from "express";
import { registerController, loginController, refreshTokenController } from "../controllers/auth.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../validations/auth.validation.js";
import { authRateLimiter } from "../middlewares/rateLimit.middleware.js";

const router = express.Router();

router.post('/register', validate({body: registerSchema}), registerController);
router.post('/login', validate({body: loginSchema}), authRateLimiter, loginController);
router.post('/refresh-token', refreshTokenController);

export default router;
