const swagger_Jsdoc = require('swagger-jsdoc');

const options = 
{
    definition: 
    {
        openapi: '3.0.0',
        info: {
            title: 'LMS API',
            version: '1.0.0',
            description: 'API for Learning Management System'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;