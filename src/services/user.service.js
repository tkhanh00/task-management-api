import { prisma } from "../config/prisma.js";

export const getUsers = async () => {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true,
            updatedAt: true
        }
    });

    if (!users) {
        throw new Error('No users found');
    }

    return users;
}