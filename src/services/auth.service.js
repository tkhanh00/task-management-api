import bcrypt from 'bcrypt';
import {prisma} from '../config/prisma.js';

export const registerUser = async (data) => {

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: hashedPassword
        }
    });

    return user;
}

export const loginUser = async (data) => {

    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(data.password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    return user;
}