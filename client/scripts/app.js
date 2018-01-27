// YOUR CODE HERE:
// var message = {
//   username: username,
//   text: text,
//   roomname: roomname
// };

var app = {
};

//app.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';

app.init = function() {

};

app.send = function(message) {
  $.ajax({
    url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: message,
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent', data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    url: 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages',
    type: 'GET',
    //data: message,
    //contentType: 'application/json'
    success: function() {
      console.log('FETCH successful', data);
    },
    error: function (data) {
      console.error('FETCH failed', data);
    }
  });
};

app.clearMessages = function() {

};

app.renderMessages = function(message) {

};

app.renderRoom = function() {

};









