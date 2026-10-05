
// const connect_db = require('../config/db.js')

const  model_courses = require("../models/Course");

async function get_allCourses()
{
    return await model_courses.find();
}
async function get_couseById(id)
{
    return await model_courses.findById(id);
}


module.exports = {get_allCourses , get_couseById};