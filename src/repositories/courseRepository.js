
// const connect_db = require('../config/db.js')

const  model_courses = require("../models/Course");
const Level = require('../models/Level');

async function get_allCourses(category, level)
{
    let filter = {};

    if (category)
    {
        filter.category = category;
    }

    if (level)
    {
        const levelDoc = await Level.findOne({ name: level });

        if (!levelDoc)
            return [];

        filter.level = levelDoc._id;
    }
    if (keyword)
    {
    const search = new RegExp(keyword, 'i');

    filter.$or = [
        { title: search },
        { description: search }
    ];
}

    return await model_courses.find(filter).populate('level', 'name -_id');;
}
async function get_couseById(id)
{
    return await model_courses.findById(id);
}


module.exports = {get_allCourses , get_couseById};