
const Course = require('../models/Course');
const {get_allCourses ,get_couseById} = require('../repositories/courseRepository')
// const {} = require('../repositories/courseRepository')

// const get_courses = (request, response) => 
// {
//     response.status(200).json({success: true, message: "success"});
// }


async  function  get_courses(request,response)
{
    const courses = await get_allCourses();
    response.status(200).json(courses);

}
async  function  get_coursE(request,response)
{
    
    const course = await get_couseById(request.params.id);
     if (!course)
        return response.status(404).json({ message: "Course not found"});
    
    response.status(200).json(course);

}



module.exports = {get_courses ,get_coursE};