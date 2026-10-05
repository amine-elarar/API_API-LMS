const Resource = require('../models/Resource');

async function get_resourcesByModule(moduleId)
{
    return await Resource.find({ module: moduleId });
}

module.exports = {
    get_resourcesByModule
};