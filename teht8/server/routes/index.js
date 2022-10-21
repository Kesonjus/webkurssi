var express = require('express');
var router = express.Router();
const cors = require('cors');
const mysql = require('mysql2/promise')
const config = require('../config')

const app =express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const port = 3001

app.get("/",async function (req,res) {
  try {
    const connection = await mysql.createConnection(config.db)
    const [result,] =await connection.execute('select * from task')

    if (!result) result=[] 
    res.status(200).json(result)

  } catch(err) {
    res.status(500).send(err.message)
  }
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



app.listen(port)

module.exports = router;
