var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var db = mysql.createConnection({
 
  user: 'student',
  password: 'student',
  database: 'chat'


});

// db.connect();

db.query('Select * from messages', function(err, results) {
  console.log(arguments);
});
  
// db.end();
module.exports = db;