const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// routers
const data_router = require('./routes/data')

// config vars
port = 3000

app.use('/data', data_router)



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})