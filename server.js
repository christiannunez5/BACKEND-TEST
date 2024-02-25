import express from 'express'
import { TodoRouter } from './routes/todo.js';
import cors from 'cors'

const app = express();
const port = 8000;

app.use(cors())
app.use('/api/todos', TodoRouter)

app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
})