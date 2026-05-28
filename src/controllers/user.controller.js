import { getUsers } from "../services/user.service.js";

export const getUsersController = async (req, res) => {

    try {
        const users = await getUsers();
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}