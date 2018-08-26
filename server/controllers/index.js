var models = require('../models');

module.exports = {
  messages: {
    get: function(req, res) {
      models.messages.get(function(results) {
        res.end(JSON.stringify(results));
      });
      // res.end(JSON.stringify(body))
    }, // a function which handles a get request for all messages
    post: function(req, res) {
      var message = req.body;
      models.messages.post(message, () => {
        console.log('success to post');
        res.end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function(req, res) {
      models.users.get(results => {
        res.end(JSON.stringify(results));
      });
    },
    post: function(req, res) {
      let username = req.body;
      models.users.post(username.username, () => {
        res.end();
      });
    }
  }
};
