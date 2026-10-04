const  express = require('express');
const course_Routes = require('./routes/courseRoutes');
const module_Routes = require('./routes/moduleRoutes');
const resource_Routes = require('./routes/resourceRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swager');
const notFound = require('./middlewares/notFound');
const errorHandler = require('./middlewares/errorHandler');


const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/courses', course_Routes);
app.use('/', module_Routes);
app.use('/', resource_Routes);

app.use(errorHandler);
app.use(notFound);

module.exports = app;