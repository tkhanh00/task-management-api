import {ZodError} from 'zod';

export const validate = ({body, params, query}) => (req, res, next) => {
    try {
        if(body) body.parse(req.body);
        if(params) params.parse(req.params);
        if(query) query.parse(req.query);
        next();
    } catch (error) {        
        if (error instanceof ZodError) {
            return res.status(400).json({
                success: false,
                errors: error.issues.map((err) => ({    //zod v.4 changed the structure of error.issues
                    field: err.path.join('.'),
                    message: err.message
                }))
            });
        }
        next(error);
    }
}