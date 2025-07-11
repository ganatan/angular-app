/**
 * @swagger
 * tags:
 *   name: Persons
 *   description: API for managing persons
 */

/**
 * @swagger
 * /persons:
 *   get:
 *     summary: Retrieve all persons
 *     tags: [Persons]
 *     responses:
 *       200:
 *         description: A list of persons
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
 *                     $ref: '#/components/schemas/Person'

 *   post:
 *     summary: Create a new person
 *     tags: [Persons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonInput'
 *     responses:
 *       201:
 *         description: Person created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       400:
 *         description: Validation error
 *       409:
 *         description: Person already exists
 */

/**
 * @swagger
 * /persons/{id}:
 *   get:
 *     summary: Get a person by ID
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Person ID
 *     responses:
 *       200:
 *         description: Person found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Person'
 *       404:
 *         description: Person not found

 *   put:
 *     summary: Update a person by ID
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Person ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PersonInput'
 *     responses:
 *       200:
 *         description: Person updated
 *       400:
 *         description: Validation error
 *       404:
 *         description: Person not found

 *   delete:
 *     summary: Delete a person by ID
 *     tags: [Persons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Person ID
 *     responses:
 *       200:
 *         description: Person deleted
 *       404:
 *         description: Person not found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Person:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1001
 *         name:
 *           type: string
 *           example: James Cameron
 *         wikipedia_link:
 *           type: string
 *           example: https://en.wikipedia.org/wiki/James_Cameron
 *         birth_date:
 *           type: string
 *           format: date
 *           example: 1954-08-16
 *         birth_city_id:
 *           type: integer
 *           example: 2001
 *         death_date:
 *           type: string
 *           format: date
 *           example: null
 *         death_city_id:
 *           type: integer
 *           example: null
 *         image:
 *           type: string
 *           example: james-cameron.jpg

 *     PersonInput:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Steven Spielberg
 *         wikipedia_link:
 *           type: string
 *           example: https://en.wikipedia.org/wiki/Steven_Spielberg
 *         birth_date:
 *           type: string
 *           format: date
 *           example: 1946-12-18
 *         birth_city_id:
 *           type: integer
 *           example: 2002
 *         death_date:
 *           type: string
 *           format: date
 *           example: null
 *         death_city_id:
 *           type: integer
 *           example: null
 *         image:
 *           type: string
 *           example: steven-spielberg.jpg
 */
