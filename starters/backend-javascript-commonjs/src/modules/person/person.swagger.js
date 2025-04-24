/**
 * @openapi
 * /persons:
 *   get:
 *     summary: Récupère la liste des personnes
 *     tags:
 *       - Persons
 *     responses:
 *       200:
 *         description: Succès - Retourne la liste des personnes
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
