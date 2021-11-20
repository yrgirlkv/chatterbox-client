// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
    for (let room of Rooms._data) {
      this.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.

    //let roomHTML = _.template('<option value= "room"><%= roomname %></option>');
    let roomHTML = `<option value="${roomname}">${roomname}</option>`;
    console.log(roomHTML);
    this.$select.append(roomHTML);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
