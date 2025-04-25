import { Router } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { swaggerOptions } from './swagger.config.js'

const router = Router()
const specs = swaggerJSDoc(swaggerOptions)

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

export default router
