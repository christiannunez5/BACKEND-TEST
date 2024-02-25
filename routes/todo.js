import express from 'express'

import { getAllTodos } from '../controller/getAllTodos.js';
import { getSubTodo } from '../controller/getSubTodo.js';

export const TodoRouter = express.Router();

TodoRouter.get('/', getAllTodos)
TodoRouter.get('/:id', getSubTodo)