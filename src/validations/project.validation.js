import z from "zod";

export const createProjectSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long')
    .max(100, 'Title must be at most 100 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long')
    .max(100, 'Description must be at most 500 characters long'),

})

export const getProjectByIdSchema = z.object({
    id: z.uuid('Invalid project ID')
})

export const updateProjectSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters long')
    .max(100, 'Title must be at most 100 characters long'),
    description: z.string().min(10, 'Description must be at least 10 characters long')
    .max(100, 'Description must be at most 500 characters long'),
    ownerid: z.uuid('Invalid owner ID'),
})

export const deleteProjectByIdSchema = z.object({
    id: z.uuid('Invalid project ID')
})