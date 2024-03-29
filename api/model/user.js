const { Pool, Client } = require('pg')


const createUserTable = '\
  CREATE TABLE IF NOT EXISTS thermo(\
    id serial PRIMARY KEY,\
    user_id INT UNIQUE NOT NULL,\
    temp INT,\
    date_time TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP\
  );'
const dropUserTable = `DROP TABLE IF EXISTS thermo;`
const createUser = `INSERT INTO thermo(user_id) VALUES (%user_id%);`
const readUser = `SELECT * FROM thermo WHERE user_id = %user_id%;`
const readAllUsers = `SELECT * FROM thermo;`
const updateUser = `UPDATE thermo SET temp = %temp% WHERE user_id = %user_id%;`
const deleteUser = `DELETE FROM thermo WHERE user_id = %user_id%;`

// pools will use environment variables
// for connection information
const pool = new Pool({
  user: 'rnlpcgwqqgeqjh',
  host: 'ec2-50-16-108-41.compute-1.amazonaws.com',
  database: 'dccmt37icdster',
  password: '40f2bb0c2acfaf019bf486f35b53e7cf3b4b36bf77e2426eb80b6a4a50d33fec',
  port: 5432,
  ssl: { rejectUnauthorized: false }
})


const runQuery = (pool, query) => {
  pool.query(query, (err, res) => {
    console.log(err, res)
  })
}

const runCreateUserTable = (pool) => {
  runQuery(pool, createUserTable)
}

const runDropUserTable = (pool) => {
  runQuery(pool, dropUserTable)
}

const runCreateUser = (pool, user_id) => {
  runQuery(pool, createUser.replace('%user_id%', user_id))
}

const runReadUser = (pool, user_id) => {
  console.log(readUser.replace('%user_id%', user_id))
  runQuery(pool, readUser.replace('%user_id%', user_id))
}

const runReadAllUsers = (pool) => {
  runQuery(pool, getAllUsers)
}

const runUpdateUser = (pool, user_id, temp) => {
  runQuery(pool, updateUser
    .replace('%user_id%', user_id)
    .replace('%temp%', temp))
}

const runDeleteUser = (pool, user_id) => {
  runQuery(pool, deleteUser.replace('%user_id%', user_id))
}

const runAllUser = (pool) => {
  runQuery(pool, getAllUsers)
}

//exports
module.exports = {
  pool: pool,
  runCreateUserTable: runCreateUserTable,
  runDropUserTable: runDropUserTable,
  runCreateUser: runCreateUser,
  runReadUser: runReadUser,
  runReadAllUsers: runReadAllUsers,
  runUpdateUser: runUpdateUser,
  runDeleteUser: runDeleteUser
}