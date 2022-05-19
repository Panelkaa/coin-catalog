const {request} = require('express');
const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const fs = require('fs');
const cors = require("cors")
app.use(
  cors({
    origin: "http://localhost:3000"
  })
)



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


app.listen(3001, () => {
    console.log('Server is started on port 3001');
});

app.get('/Homepage', (req, res) => {
  connection.query('SELECT * FROM coins.coin;', (err, data) => {
      if (err) {
          console.error("Err: ", err);
          return res.status(500)
      } else {
          // console.log(data)
          res.json(data);

      } 

  });
});



app.get('/List/Bullion-coins', (req, res) => {
  connection.query('SELECT * FROM coins.coin;', (err, data) => {
      if (err) {
          console.error("Err: ", err);
          return res.status(500)
      } else {
          const result = data.filter((item) => item.id > 9 && item.id < 21)
          console.log(result)
          // coins.push(result)
          res.json(result);
          // console.log(coins)
          // const coins = res.json(data);
      } 

  });
});

app.get('/List/Commemorative-coins', (req, res) => {
  connection.query('SELECT * FROM coins.coin;', (err, data) => {
      if (err) {
          console.error("Err: ", err);
          return res.status(500)
      } else {
          const result = data.filter((item) => item.id < 9)
          console.log(result)
          // coins.push(result)
          res.json(result);

      } 

  });
});

app.get('/List/Exclusive-coins', (req, res) => {
  connection.query('SELECT * FROM coins.coin;', (err, data) => {
      if (err) {
          console.error("Err: ", err);
          return res.status(500)
      } else {
          const result = data.filter((item) => item.id > 21 )
          console.log(result)
          // coins.push(result)
          res.json(result);

      } 

  });
});

app.get('/Coin/:id', (req, res) => {
  connection.query('SELECT * FROM coins.coin;', (err, data) => {
      if (err) {
          console.error("Err: ", err);
          return res.status(500)
      } else {
          const coinID = +req.params.id;
          console.log(coinID)
          const result = data.filter((item) => item.id === +req.params.id)
          console.log(result)
          res.json(result);
      } 

  });
});


