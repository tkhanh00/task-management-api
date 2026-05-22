import { registerUser, loginUser } from "../services/auth.service.js";
import { generateAccessToken, generateRefreshToken } from "../../utils/jwt.js";

export const registerController = async (req, res) => {
    
    try {

        const user = await registerUser(req.body);
        res.status(201).json({ 
            success: true,
            message: 'User registered successfully',
            data: user 
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            success: false,
            message: 'Server error' 
        });
        
    }
};

export const loginController = async (req, res) => {

    try {
        const user = await loginUser(req.body);

        const accessToken = generateAccessToken(user);
        const refreshToken = generateRefreshToken(user);

        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: {
                name: user.name,
                email: user.email,
                accessToken,
                refreshToken
            }
        });

    } catch (error) {
        res.status(401).json({
            success: false,
            message: error.message
        })
    }
}