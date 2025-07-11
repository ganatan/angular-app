import express from 'express';
import { handleLlmRequest } from '../controllers/llm/llm.controller.js';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/:type/:llm', handleLlmRequest);

export default router;
