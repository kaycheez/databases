var mysql = require("mysql");
var Promise = require("bluebird");

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var db = mysql.createConnection({
  user: "student",
  password: "student",
  database: "chat"
});

// let retrieveUsers = function(id) {
//   return new Promise((resolve, reject) => {
//     db.query(`select name from users where id = ${id}`, (err, results) => {
//       if (err) {
//         return reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };

// let retrieveMessages = function() {
//   return new Promise((resolve, reject) => {
//     db.query("select * from messages", (err, results) => {
//       if (err) {
//         return reject(err);
//       } else {
//         resolve(results);
//       }
//     });
//   });
// };
// let message = {};

// retrieveMessages()
//   .then(results => {
//     message.message = results[0].message;
//     message.room = results[0].room;
//     let userId = results[0].user_id;
//     return retrieveUsers(userId);
//   })
//   .then(userName => {
//     message.username = userName[0].name;
//     console.log(message);
//   });

module.exports = db;
