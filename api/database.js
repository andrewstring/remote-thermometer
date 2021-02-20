pool_config = {
    user: 'andrew',
    password: 'password',
    host: 'localhost',
    database: 'postgres',
    port: 5432
}
table_name = 'temperatures'

const Pool = require('pg').Pool
const pool = new Pool(pool_config) 

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

function createTable() {
    pool
        .query(`CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            temp INTEGER,
            date_created DATE DEFAULT CURRENT_DATE
            );`)
        .then(res => console.log('temp:', res.rows[0]))
        .catch(err => console.error(err))
}

function deleteTable() {
    pool
        .query('DROP TABLE IF EXISTS users;').then(res => console.log('dropped table users'))
        .catch(err => console.error(err))
}

function createUser(id) {
    pool
        .query(`INSERT INTO users (id) VALUES (${id});`)
        .then(res => console.log(`user with id: ${id} created`))
        .catch(err => console.error(err))
}

function deleteUser(id) {
    pool
        .query(`DELETE FROM users WHERE id = ${id};`)
        .then(res => console.log(`user with id: ${id} deleted`))
        .catch(err => console.error(err))
}


function getUser(id) {
    pool
        .query(`SELECT * FROM users WHERE id = ${id};`)
        .then(res => console.log('temp:', res.rows[0]))
        .catch(err => console.error(err))
}

getUser(50)