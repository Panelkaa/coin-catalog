const {request} = require('express');
const express = require('express');
const app = express();
const fs = require('fs')


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Ganster01',
    database: 'coins'
  });
  connection.connect((err) => {
    if(!err) {
        console.log('Success')
    }else {
        console.log(err)
    }
  });


  app.listen(3000, () => {
    console.log('Server is started on port 3000');
});
app.get('/coin', (req, res) => {
  connection.query('SELECT * FROM coins.coin;', (err, data) => {
      if (err) {
          console.error("Err: ", err);
          return res.status(500)
      } else {
          console.log(data[0])
            
          res.json(data[0]);
          // console.log(coins)
            } 

  });
});


// response.json(data);


