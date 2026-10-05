const { get_resourcesByModule } = require('../repositories/resourceRepository');

async function get_resourcesByModuleId(request, response)
{
    const resources = await get_resourcesByModule(request.params.id);

    response.status(200).json(resources);
}

module.exports = {
    get_resourcesByModuleId
};