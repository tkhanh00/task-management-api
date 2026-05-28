import { prisma } from "../config/prisma.js";

export const createProject = async (data) => {

    const newProject = await prisma.project.create({
        data: {
            title: data.title,
            description: data.description,
            ownerId: data.ownerId
        }, select: {
            id: true,
            title: true,
            description: true,
            ownerId: true,
            createdAt: true
        }
    });
    return newProject;
}

export const getProjects = async () => {
    const projects = await prisma.project.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            ownerId: true,
            createdAt: true
        }
    });

    if (!projects) {
        throw new Error('No projects found');
    }

    return projects;
}

export const getProjectsById = async (id) => {
    const projects = await prisma.project.findUnique({
        where: {
            id: id
        }, select: {
            id: true,
            title: true,
            description: true,
            ownerId: true,
            createdAt: true
        }
    })

    if (!projects) {
        throw new Error('Project not found');
    }

    return projects;
}

export const updateProjectById = async (id, data) => {
    const project = await prisma.project.findFirst({
        where: {
            id: id
        }
    })

    if (!project) {
        throw new Error('Project not found');
    }

    const updateProject = await prisma.project.update({
        where: {
            id: id
        }, data: {
            title: data.title,
            description: data.description,
            ownerId: data.ownerId
        }, select: {
            id: true,
            title: true,
            description: true,
            ownerId: true,
            createdAt: true
        }
    })

    return updateProject;
}

export const deleteProjectById = async (id) => {
    const project = await prisma.project.findFirst({
        where: {
            id: id
        }
    })

    if (!project) {
        throw new Error('Project not found');
    }

    await prisma.project.delete({
        where: {
            id: id
        }
    });

    return;
}