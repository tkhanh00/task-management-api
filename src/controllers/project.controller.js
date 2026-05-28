import { createProject, getProjects, getProjectsById, updateProjectById, deleteProjectById } from "../services/project.service.js";

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
            message: error.message
        });
        
    }
}

export const getProjectsController = async (req, res) => {
    try {
        const projects = await getProjects();
        res.status(200).json({
            success: true,
            message: 'Projects retrieved successfully',
            data: projects
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
        
    }
}

export const getProjectByIdController = async (req, res) => {
    const {id} = req.params;

    try {
        const project = await getProjectsById(id);
        res.status(200).json({
            success: true,
            message: 'Project retrieved successfully',
            data: project
        });
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            success: false,
            message: error.message
        });
        
    }
}

export const updateProjectByIdController = async (req, res) => {

    const {id} = req.params;
    const data = {
        title: req.body.title,
        description: req.body.description,
        ownerId: req.body.id
    }

    try {
        const project = await updateProjectById(id, data);
        res.status(200).json({
            success: true,
            message: 'Project updated successfully',
            data: project
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
        
    }
}

export const deleteProjectByIdController = async (req, res) => {
    const {id} = req.params;

    try {
        await deleteProjectById(id);
        res.status(200).json({
            success: true,
            message: 'Project deleted successfully'
        });
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message
        });
        
    }
}