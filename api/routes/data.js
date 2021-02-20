var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
    console.log('get')
})

router.post('/', (req, res) => {
    console.log('post')
})

router.put('/', (req, res) => {
    console.log('put')
})

router.delete('/', (res, req) => {
    console.log('delete')
})

module.exports = router