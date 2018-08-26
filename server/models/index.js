var db = require("../db");

let retrieveUser = function(id, newMessage) {
  return new Promise((resolve, reject) => {
    db.query(`select name from users where id = ${id}`, (err, results) => {
      if (err) {
        return reject(err);
      } else {
        resolve({ username: results, newMessage: newMessage });
      }
    });
  });
};

let retrieveAllFromTable = function(table) {
  return new Promise((resolve, reject) => {
    db.query(`select * from ${table}`, (err, results) => {
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
      let promiseMessages;
      let table = "messages";
      retrieveAllFromTable(table).then(resultsMessages => {
        promiseMessages = resultsMessages.map(message => {
          let newMessage = {};
          newMessage[message] = results.message;
          newMessage[room] = results.room;
          retrieveUser(results.user_id, newMessage).then(
            ({ username, newMessage }) => {
              newMessage[username] = username;
              return newMessage;
            }
          );
        });
      });
      Promise.all(promiseMessages).then(messages => {
        console.log(message);
        callback(messages);
      });
    }, // a function which produces all the messages
    post: function(message, callback) {
      return new Promise((resolve, reject) => {
        db.query(
          `select id from users where name = ${message.username}`,
          (err, results) => {
            if (err) {
              console.log("ERORRRRRRR" + err);
              return reject(err);
            } else {
              console.log("SUCCESSSSS" + results);
              resolve(results);
            }
          }
        );
      }).then(data => {
        console.log("this is data" + data);
        if (data.length === 0) {
          // var user_id = message.username;
          db.query(
            `Insert into users (name) values(${message.username})`,
            (err, results) => {
              if (err) {
                reject(err);
              } else {
                console.log("post username success!");
              }
            }
          );
        }
        return db.query(
          `Insert into messages (user_id, message, room) values(
            ${messages.user}, ${messages.message}, ${messages.room}
          )`,
          function(err, results) {
            if (err) {
              return callback(err);
            } else {
              console.log("success!");
              callback(null, results);
            }
          }
        );
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function(callback) {
      let table = "users";
      return retrieveAllFromTable(table).then(data => {
        callback(data);
      });

      // return db.query("Select * from users", function(err, results) {
      //   if (err) {
      //     return callback(err);
      //   } else {
      //     callback(null, results);
      //   }
      // });
    },

    post: function(user, callback) {
      return db.query(`Insert into users (name) values(${user})`, function(
        err,
        results
      ) {
        if (err) {
          console.log("errorrrr" + err);
          return callback(err);
        } else {
          console.log("succccesss");
          callback(null, results);
        }
      });
    }
  }
};
