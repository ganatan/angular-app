/**
 * @openapi
 * /cities:
 *   get:
 *     summary: Retrieves the list of cities
 *     tags:
 *       - Cities
 *     responses:
 *       200:
 *         description: Success - Returns the list of cities
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
 *                       name:
 *                         type: string
 *                         example: Paris
 */
