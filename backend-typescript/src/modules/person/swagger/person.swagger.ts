/**
 * @openapi
 * /persons:
 *   get:
 *     summary: Retrieves the list of persons
 *     tags:
 *       - Persons
 *     responses:
 *       200:
 *         description: Success - Returns the list of persons
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       firstName:
 *                         type: string
 *                         example: John
 *                       lastName:
 *                         type: string
 *                         example: Doe
 */
