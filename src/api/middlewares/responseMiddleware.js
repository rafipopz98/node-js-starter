export const responseHandler = (req, res, next) => {
    res.sendSuccess = (data, message = 'Success!', statusCode = 200) => {
        return res.status(statusCode).json({
            statusCode,
            data,
            message,
        });
    };

    res.created = (data, message = 'Added!', statusCode = 201) => {
        return res.status(statusCode).json({
            statusCode,
            data,
            message,
        });
    };

    res.validationError = (error) => {
        const statusCode = 400;
        const message = "Validation Error"
        return res.status(statusCode).json({
            statusCode,
            error,
            message,
        });
    };

    res.notFound = (error, message = 'Not Found') => {
        const statusCode = 404;
        return res.status(statusCode).json({
            statusCode,
            error,
            message,
        });
    };

    res.badRequest = (error, message = 'Bad Request', statusCode = 400,) => {
        return res.status(statusCode).json({
            statusCode,
            error,
            message,
        });
    };

    res.sendError = (error, message = 'Internal Server Error', statusCode = 500) => {
        return res.status(statusCode).json({
            statusCode,
            error,
            message,
        });
    };
    res.duplicate = (error, message = 'Duplicate Key found', statusCode = 409) => {
        return res.status(statusCode).json({
            statusCode,
            error,
            message,
        });
    }

    next();
};
