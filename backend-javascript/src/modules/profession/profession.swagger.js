/**
 * @swagger
 * tags:
 *   name: Professions
 *   description: API for managing professions
 */

/**
 * @swagger
 * /professions:
 *   get:
 *     summary: Retrieve all professions
 *     tags: [Professions]
 *     responses:
 *       200:
 *         description: A list of professions
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
 *                     $ref: '#/components/schemas/Profession'

 *   post:
 *     summary: Create a new profession
 *     tags: [Professions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfessionInput'
 *     responses:
 *       201:
 *         description: Profession created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profession'
 *       400:
 *         description: Validation error
 *       409:
 *         description: Profession already exists
 */

/**
 * @swagger
 * /professions/{id}:
 *   get:
 *     summary: Get a profession by ID
 *     tags: [Professions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Profession ID
 *     responses:
 *       200:
 *         description: Profession found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Profession'
 *       404:
 *         description: Profession not found

 *   put:
 *     summary: Update a profession by ID
 *     tags: [Professions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Profession ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ProfessionInput'
 *     responses:
 *       200:
 *         description: Profession updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Profession not found

 *   delete:
 *     summary: Delete a profession by ID
 *     tags: [Professions]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Profession ID
 *     responses:
 *       200:
 *         description: Profession deleted
 *       404:
 *         description: Profession not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Profession:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1001
 *         name:
 *           type: string
 *           example: Director

 *     ProfessionInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Producer
 */
