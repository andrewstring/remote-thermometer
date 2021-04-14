const express = require('express')
const router = express.Router()

const user = require('../model/user')
const pool = user.pool


router.get('/:id', (req, res) => {
    let { id } = req.params
    console.log(id)
    user.runReadUser(pool, id)
})

router.post('/', (req, res) => {
    let { id } = req.body
    user.runCreateUser(pool, id)
})

router.put('/', (req, res) => {
    let { id, temp } = req.body
    user.runUpdateUser(pool, id, temp)
})

router.delete('/:id', (res, req) => {
    let { id } = req.params
    console.log(id)
    user.runDeleteUser(pool, id)
})

module.exports = router