/**
 * @swagger
 * tags:
 *   - name: continents
 *     description: API for managing continents in angular-starter-backend
 */

/**
 * @swagger
 * /continents:
 *   get:
 *     summary: Retrieve all continents
 *     description: Retrieve a list of all continents from the database.
 *     tags: [continents]
 *     responses:
 *       200:
 *         description: List of continents retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: The continent ID
 *                     example: 1
 *                   name:
 *                     type: string
 *                     description: The name of the continent
 *                     example: Africa
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /continents/{id}:
 *   get:
 *     summary: Retrieve a specific continent by ID
 *     description: Retrieve details of a specific continent based on the provided ID.
 *     tags: [continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the continent to retrieve
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Continent details retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The continent ID
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the continent
 *                   example: Africa
 *       404:
 *         description: Continent not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Continent not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /continents:
 *   post:
 *     summary: Create a new continent
 *     description: Add a new continent to the database.
 *     tags: [continents]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the continent
 *                 example: Antarctica
 *     responses:
 *       201:
 *         description: Continent created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The continent ID
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the continent
 *                   example: Antarctica
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid input
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /continents/{id}:
 *   delete:
 *     summary: Delete a specific continent by ID
 *     description: Remove a continent from the database based on the provided ID.
 *     tags: [continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the continent to delete
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       204:
 *         description: Continent deleted successfully
 *       404:
 *         description: Continent not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Continent not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /continents/{id}:
 *   put:
 *     summary: Update a specific continent by ID
 *     description: Update the details of a continent based on the provided ID.
 *     tags: [continents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the continent to update
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The new name of the continent
 *                 example: South America
 *     responses:
 *       200:
 *         description: Continent updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: The continent ID
 *                   example: 1
 *                 name:
 *                   type: string
 *                   description: The name of the continent
 *                   example: South America
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid input
 *       404:
 *         description: Continent not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Continent not found
 *       500:
 *         description: Internal server error
 */
