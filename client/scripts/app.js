$(document).ready(function() {});

class App {
  constructor() {
    this.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';
  }

  // init function
  init() {
  }

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

  fetch() {
    $.ajax({
      url: this.server,
      type: 'GET',
      data: 'order=-createAt&limit=1000', // limit at 1000 messages
      success: function(data) {
        console.log('FETCH successful', data);
        // var div = document.getElementById('chats');
        // div.innerHTML = JSON.stringify(data);s

        var $chat = $('#chats');

        for (var i = 0; i < data.results.length; i++) { 
          
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

  clearMessages() {
    $('button').click(function() {
      $('#chats').empty();
    });  
  }

  renderMessages(message) {

  }

  renderRoom() {

  }


}

const app = new App();




