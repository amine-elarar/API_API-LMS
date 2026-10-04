function errorHandler(error, request, response, next)
{
    console.error(error);

    response.status(error.status || 500).json({
        message: error.message || "Internal Server Error"
    });
}

module.exports = errorHandler;