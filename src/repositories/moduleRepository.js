const Module = require('../models/Module');

async function get_modulesByCourse(courseId) {
    return await Module.find({ course: courseId });
}

module.exports = {
    get_modulesByCourse
}; 
