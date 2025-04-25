export const swaggerOptions = {
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'API Documentation',
        version: '1.0.0',
        description: 'Documentation de l’API générée automatiquement par Swagger'
      },
      servers: [
        {
          url: 'http://localhost:3000',
          description: 'Serveur local'
        }
      ]
    },
    apis: ['src/modules/**/*.js', 'src/routers/**/*.js']
  }
  