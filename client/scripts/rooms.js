// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set,

  selected: 'lobby',

  items: function () {
    return _.chain([...Roms._data]);
  },

  isSelected: function (roomname) {
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
  },



  add: function(room, callback = () => {}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  update: function(messages, callback = () => {}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      Rooms.selected = 'lobby';
    }

    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  }
};