import express from "express";
import { createProjectController, getProjectByIdController, getProjectsController, updateProjectByIdController, deleteProjectByIdController } from "../controllers/project.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { createProjectSchema, getProjectByIdSchema, updateProjectSchema, deleteProjectByIdSchema } from "../validations/project.validation.js";
const router = express.Router();

router.post('/', validate({body: createProjectSchema}), createProjectController);
router.get('/', getProjectsController);
router.get('/:id', validate({params: getProjectByIdSchema}), getProjectByIdController);
router.put('/:id', updateProjectByIdController);
router.delete('/:id', deleteProjectByIdController);

export default router;