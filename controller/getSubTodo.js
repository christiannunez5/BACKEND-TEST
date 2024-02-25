import { todos } from '../data/data.js'

export const getSubTodo = (req, res) => {

    const todoID = req.params.id;
    const todo = todos.find((todo) => {
        return todoID === todo.id;
    })

    if (!todo)
        return res.send("Error: Todo not found.")
    res.send(todo)
}