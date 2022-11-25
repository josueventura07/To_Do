//? En este archivo vamos a tener las rutas y sus respectivos verbos

const router = require('express').Router()

//! const express = require('express')
//! const router = express.Router()

const taskSevices = require('./tasks.services')

router.get('/todo', taskSevices.getAllTodos)
router.post('/todo', taskSevices.postTodo)
router.get('/todo/:id', taskSevices.getTodoById)
router.patch('/todo/:id', taskSevices.patchTask)

module.exports = router