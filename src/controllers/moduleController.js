const { get_modulesByCourse } = require('../repositories/moduleRepository');

async function get_modulesByCourseId(request, response)
{
    const modules = await get_modulesByCourse(request.params.id);

    response.status(200).json(modules);
}

module.exports = {
    get_modulesByCourseId
};