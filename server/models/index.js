var db = require("../db");

let retrieveUser = function(id) {
  return new Promise((resolve, reject) => {
    db.query(`select name from users where id = ${id}`, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

let retrieveMessages = function() {
  return new Promise((resolve, reject) => {
    db.query("select * from messages", (err, results) => {
      if (err) {
        return reject(err);
      } else {
        let thisVar = 0;
        resolve(results);
      }
    });
  });
};

module.exports = {
  messages: {
    get: function(callback) {
      let messages;
      retrieveMessages().then(resultsMessages => {
        messages = resultsMessages.map(message => {
          let newMessage = {};
          newMessage[message] = results.message;
          newMessage[room] = results.room;
          retrieveUser(results.user_id).then(user => {
            newMessage[username] = user;
          });
          return newMessage;
        });
      });
      callback(messages);
    }, // a function which produces all the messages
    post: function(message, callback) {
      return db.query(
        `Insert into messages (user_id, message, room) values(${
          messages.user
        }, ${messages.message}, ${messages.room})`,
        function(err, results) {
          if (err) {
            return callback(err);
          } else {
            console.log("success!");
            callback(null, results);
          }
        }
      );
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      return db.query("Select * from users", function(err, results) {
        if (err) {
          return callback(err);
        } else {
          callback(null, results);
        }
      });
    },

    post: function(user, callback) {
      return db.query(`Insert into users (name) values(${user.name})`, function(
        err,
        results
      ) {
        if (err) {
          return callback(err);
        } else {
          callback(null, results);
        }
      });
    }
  }
};
