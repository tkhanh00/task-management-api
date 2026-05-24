import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import projectRoutes from './routes/project.route.js';
import { authenticateToken } from './middlewares/auth.middleware.js';


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/projects', authenticateToken, projectRoutes);


app.listen(3000, () => {
    console.log('Server is running on port 3000');
})