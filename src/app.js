const  express = require('express');
const course_Routes = require('./routes/courseRoutes');
const module_Routes = require('./routes/moduleRoutes');
const resource_Routes = require('./routes/resourceRoutes');
const app = express();
app.use(express.json());


app.use('/courses', course_Routes);
app.use('/', module_Routes);
app.use('/', resource_Routes);

module.exports = app;