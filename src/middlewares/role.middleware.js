
export const checkRole = (...roles) => {
    return (req, res, next) => {
        
        const userRole = req.user.role;

        console.log(userRole);
        

        if (!roles.includes(userRole)) {
            return res.status(403).json({
                success: false,
                message: 'Access denied'
            });
        }

        next();
    }
}