// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.

  },

  render: function() {
    // TODO: Render _all_ the messages.
    this.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    this.$chats.prepend(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    let username = $(event.target).data('username');
    if (username === undefined) {
      return;
    }
    Friends.toggleStatus(username, MessagesView.render);

  }

};