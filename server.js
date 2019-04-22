const express = require('express')
const app = express()
const port = 3000
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "fabbi@2018",
  database: "Kintone"
});

con.connect(function(err) {
  if (err) throw err;
  app.get('/',function(req,res) {
  	res.setHeader('Access-Control-Allow-Origin', '*');
  	con.query('SELECT sheet_time.date,sheet_time.start_date, sheet_time.end_date, employees.name FROM sheet_time LEFT JOIN employees ON sheet_time.employee_id = employees.id',function(error,results,fields){
  		if (error) throw error;
        res.json(results);
  	});
  })
});

app.listen(port, () => console.log(`${port}!`))
