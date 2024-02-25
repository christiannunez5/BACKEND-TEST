
import { todos } from '../data/data.js'

export const getAllTodos = (req, res) => {
    res.send(todos)
}