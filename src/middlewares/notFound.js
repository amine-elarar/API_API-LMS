function notFound(request, response)
{
    response.status(404).json({
        message: "Route not found"
    });
}

module.exports = notFound;