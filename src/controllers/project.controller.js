import { createProject } from "../services/project.service.js";

export const createProjectController = async (req, res) => {
    const data = {
        title: req.body.title,
        description: req.body.description,
        ownerId: req.user.id
    };

    try {
        const project = await createProject(data);
        res.status(201).json({
            success: true,
            message: 'Project created successfully',
            data: project
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error'
        });
        
    }
}