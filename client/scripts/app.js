

class App {
  constructor() {
    this.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';
  }

  // init call the fetch method
  init() {
    this.fetch();
  }

  // submit a POST request via $.ajax
  send(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: this.message,
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  // submit a GET request via $.ajax
  fetch() {
    $.ajax({
      url: this.server,
      type: 'GET',
      data: 'order=-createdAt&limit=10', // limit at x messages
      success: function(data) {
        console.log('FETCH successful', data);
        // var div = document.getElementById('chats');
        // div.innerHTML = JSON.stringify(data);s

        var $chat = $('#chats');

        for (var i = 0; i < data.results.length; i++) { // iterate from the end of the array, aka the most recent posts
          
          var $username = $('<button id="username">' + data.results[i].username + '</button>');
          var $text = $('<li id="username">' + data.results[i].text + '</li>');
          var $createdAt = $('<p id="createAt">' + data.results[i].createdAt + '</p>');
          
          $username.appendTo($chat);
          $text.appendTo($chat);
          $createdAt.appendTo($chat);
          
        }
      },
      error: function (data) {
        console.error('FETCH failed', data);
      }
    });

  }
  
  // clearMessages() {
  // }

  // renderMessages(message) {
  // }

  // renderRoom() {
  // }


}


// create new object
const app = new App();

//call the init method every 30seconds
setInterval(function() {
  app.init();
}, 30000);




$(document).ready(function() {

$('button').click(function() {
  $('#chats').empty();
});  


});







