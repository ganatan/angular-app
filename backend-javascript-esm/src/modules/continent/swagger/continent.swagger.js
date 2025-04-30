/**
 * @swagger
 * tags:
 *   name: Continents
 *   description: API for managing continents
 */

/**
 * @swagger
 * /continents:
 *   get:
 *     summary: Retrieve all continents
 *     tags: [Continents]
 *     responses:
 *       200:
 *         description: A list of continents
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
 *                     $ref: '#/components/schemas/Continent'

 *   post:
 *     summary: Create a new continent
 *     tags: [Continents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContinentInput'
 *     responses:
 *       201:
 *         description: Continent created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Continent'
 *       400:
 *         description: Validation error
 *       409:
 *         description: Continent already exists
 */

/**
 * @swagger
 * /continents/{id}:
 *   get:
 *     summary: Get a continent by ID
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Continent ID
 *     responses:
 *       200:
 *         description: Continent found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Continent'
 *       404:
 *         description: Continent not found

 *   put:
 *     summary: Update a continent by ID
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Continent ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ContinentInput'
 *     responses:
 *       200:
 *         description: Continent updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Continent not found

 *   delete:
 *     summary: Delete a continent by ID
 *     tags: [Continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Continent ID
 *     responses:
 *       200:
 *         description: Continent deleted
 *       404:
 *         description: Continent not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Continent:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1001
 *         code:
 *           type: string
 *           example: EU
 *         name:
 *           type: string
 *           example: Europe
 *         wikipedia_link:
 *           type: string
 *           example: https://en.wikipedia.org/wiki/Europe
 *         area:
 *           type: integer
 *           example: 10500000
 *         population:
 *           type: integer
 *           example: 747000000
 *         countries_count:
 *           type: integer
 *           example: 44

 *     ContinentInput:
 *       type: object
 *       required:
 *         - code
 *         - name
 *       properties:
 *         code:
 *           type: string
 *           example: EU
 *         name:
 *           type: string
 *           example: Europe
 *         wikipedia_link:
 *           type: string
 *           example: https://en.wikipedia.org/wiki/Europe
 *         area:
 *           type: integer
 *           example: 10500000
 *         population:
 *           type: integer
 *           example: 747000000
 *         countries_count:
 *           type: integer
 *           example: 44
 */
