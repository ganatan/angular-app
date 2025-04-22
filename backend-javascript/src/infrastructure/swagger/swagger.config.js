const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Backend Node.js API',
    version: '1.0.0',
    description: 'Documentation Swagger du backend fullstack JavaScript',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Serveur local',
    },
  ],
};

export const swaggerOptions = {
  swaggerDefinition: swaggerDefinition,
  apis: ['src/modules/**/*.swagger.js'],
};
