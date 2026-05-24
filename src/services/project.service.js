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