// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  // _retrieve:

  items: function() {
    return _.chain(Object.values(Messages._data).sortBy('createdAt'));
  },


  add: function(message, callback) {
    Messages._data[message.message_id] = message;
    callback(Messages.items());
  },

  update: function(messages, callback) {
    var length = Object.keys(Messages._data).length;

    for (const message of messages) {
      Messages._data[message.message_id] = Messages._conform(message);
    }

    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
};