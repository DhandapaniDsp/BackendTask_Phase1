const express = require('express')
const router = express.Router()

const getAll = require('../controllers/getAll')
const getById = require('../controllers/getById')
const create = require('../controllers/create')
const update = require('../controllers/update')
const deleteById = require('../controllers/delete')

// Define routes for customers
router.get('/customers', getAll)
router.get('/customers/:id', getById)
router.post('/customers', create)
router.put('/customers/:id', update)
router.delete('/customers/:id', deleteById)

module.exports = router
