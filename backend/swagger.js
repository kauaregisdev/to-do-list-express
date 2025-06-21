const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'To-Do List API',
            version: '1.0.0',
            description: 'API de gerenciamento de tarefas com MongoDB, JWT e interface React'
        },
        servers: [
            {
                url: 'http://localhost:3000'
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                },
            },
        },
        security: [{bearerAuth: []}],
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};