const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//middleware
app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())

// routers
const user_router = require('./routes/user')

// config vars
port = 3000

app.use('/user', user_router)



app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})