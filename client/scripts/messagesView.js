// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    this.$chats.html('');
  },

  render: function() {
    // TODO: Render _all_ the messages.
    for (let message of messages._data) {
      this.renderMessage(message);

    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    console.log(MessageView.render(message));
    this.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};