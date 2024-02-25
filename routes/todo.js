import express from 'express'

import { getAllTodos } from '../controller/getAllTodos.js';

export const TodoRouter = express.Router();

TodoRouter.get('/', getAllTodos)
