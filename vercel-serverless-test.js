const express = require('express')
const app = express()
const port = 3000

const vercel_func = require('./api/serverless')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', vercel_func)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))