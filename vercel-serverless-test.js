const express = require('express')
const app = express()
const port = 3000

const vercel_func = require('./api/serverless')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
}); 

app.get('/app.js', function(req, res){
  res.sendFile(__dirname + '/app.js');
}); 

app.post('/serverless', vercel_func)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))