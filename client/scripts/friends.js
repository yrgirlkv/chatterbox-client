// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: new Set,

  items: function (name) {
    return _.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: function (name, callback = () => {}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }

};