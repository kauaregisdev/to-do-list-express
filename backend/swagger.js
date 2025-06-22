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
            schemas: {
                TaskInput: {
                    type: 'object',
                    required: ['title', 'done'],
                    properties: {
                        title: {
                            type: 'string',
                            example: 'Study Express',
                        },
                        done: {
                            type: 'boolean',
                            example: false,
                        },
                    },
                },
                AuthInput: {
                    type: 'object',
                    required: ['username', 'password'],
                    properties: {
                        username: {
                            type: 'string',
                            example: 'kaua_regis',
                        },
                        password: {
                            type: 'string',
                            example: '123456'
                        },
                    },
                },
            },
        },
    },
    apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = {
    swaggerUi,
    swaggerSpec
};