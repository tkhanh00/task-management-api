import {z} from "zod";

export const registerSchema = z.object({
    name: z.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must be at most 50 characters long'),

    email: z.email('Invalid email address'),

    password: z.string()
    .min(6, 'Password must be at least 6 characters long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
})

export const loginSchema = z.object({
    email: z.email('Invalid email address'),

    password: z.string().min(1, 'Password is required')
})