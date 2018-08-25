var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      return db.query('Select * from messages', function(err, results) {
        if (err) {
          return callback(err);
        } else {
          callback(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (message, callback) {
      return db.query(`Insert into messages (user_id, message, room_id) values(${messages.user}, ${messages.message}, ${messages.room})`, function(err, results) {
        if (err) {
          return callback(err);
        } else {
          callback(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      return db.query('Select * from users', function(err, results) {
        if (err) {
          return callback(err);
        } else {
          callback(null, results);
        }
      });
    },

    post: function (user, callback) {
      return db.query(`Insert into users (name) values(${user.name})`, function(err, results) {
        if (err) {
          return callback(err);
        } else {
          callback(null, results);
        }
      });
    }
  }
};

