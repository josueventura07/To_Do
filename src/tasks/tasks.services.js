//? En este archivo vamos a utilizar todo lo relacionado el REQ y el RES

const Tasks = require('../models/task.model')
const taskControllers = require('./tasks.controllers')

//* taskController.createTodo()
//* taskController.findTodoById()
//* taskController.findAllTodos()

const getAllTodos = (req, res) => {
    taskControllers.findAllTodos()
        .then((data) => {
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(400).json({message: err.message})
        })
}

// const getAllTodosWithTryCatch = (req, res) => {
//         try {
//             const data = taskControllers.findAllTodos()
//             res.status(200).json(data)
//             return data
//         } catch (error) {
//             res.status(400).json({message: err.message})
//             return error
//         }
// }

const getTodoById = (req, res) => {
    const id = req.params.id
    taskControllers.findTodoById(id)
    .then((data) => {
        if(data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({message: 'Invalid ID'})
        }
    })
    .catch((err) => {
            res.status(400).json({message: err.message})
    }) 
    }

   
const postTodo = (req, res) => {
    const {title, description} = req.body
    
    taskControllers.createTodo({title, description})
    .then((data) => {
        res.status(201).json(data)
    }) 
    .catch((err) => {
        res.status(400).json({message: 'Invalid Data', fields: {title: 'String', description: 'String'}})
    })
   
}

const patchTask = (req, res) => {
    const id = req.params.id
    const { title, description, is_completed } = req.body

    taskControllers.updateTodo(id, {title, description, is_completed})
    .then((data) => {
        if(data) {
            res.status(200).json({message: 'Task Modified Successfully'})
        } else {
            res.status(404).json({message: 'Invalid ID'})
        }
    })
    .catch((err) => {
        res.status(400).json({message: 'Invalid Data', fields: {title: 'String', description: 'String'}})
    })
}

module.exports = {
    getAllTodos,
    getTodoById,
    postTodo,
    patchTask
}