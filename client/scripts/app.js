class App {
  constructor() {
    this.server = 'http://parse.sfs.hackreactor.com/chatterbox/classes/messages';
  }

  // *** init *** 
  init() {
  }

  // *** submit a POST request via $.ajax ***
  send(message) {
    $.ajax({
      url: this.server,
      type: 'POST',
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent', data);
      },
      error: function (data) {
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

  // *** submit a GET request via $.ajax ***
  fetch() {
    $.ajax({
      url: this.server,
      type: 'GET',
      data: 'order=-createdAt&limit=100', // limit at x messages
      success: function(data) {
        console.log('FETCH successful', data);
        // var div = document.getElementById('chats');
        // div.innerHTML = JSON.stringify(data);s

        var $chat = $('#chats');
        
        for (var i = 0; i < data.results.length; i++) { // iterate from the end of the array, aka the most recent posts

          var $fetchData = $('<li id="fetchData"></li>');
          var $username = $('<button id="username">' + _.escape(data.results[i].username) + '</button>');
          var $text = $('<p id="username">' + _.escape(data.results[i].text) + '</p>');
          var $createdAt = $('<p id="createAt">' + data.results[i].createdAt + '</p>');
          
          
          $username.appendTo($fetchData);
          $text.appendTo($fetchData);
          $createdAt.appendTo($fetchData);
          $fetchData.appendTo($chat);
          
        }
      },
      error: function (data) {
        console.error('FETCH failed', data);
      }
    });

  }
  
  // clearMessages() {
  // }

  // *** submit a message *** 
  renderMessages() {
    var username = window.location.search.slice(10);
    var $messageInput = $('#inputMessage').val();
    
    var message = new Message(username, $messageInput, 'lobby');
    app.send(message);
  }

  // renderRoom() {
  // render room
  // show the lobby or desired channel
  // hide all the other channels when you enter your channel
  // update new channels into the drop menu
  // }


}


// *** new obj message ***
class Message {
  constructor(username, text, roomname) {
    this.username = username;
    this.text = text;
    this.roomname = roomname;
  }
}

// create new object
const app = new App();

//call the init method every 30seconds
setInterval(function() {
  app.fetch();
}, 2500);



  
// *** JQuery ***
$(document).ready(function() {


  // *** clear and refresh chat button ***
  $('button').click(function() {
    $('#chats').empty();
  });  

  // *** send message ***
  $('form').submit(function(event) {
    event.preventDefault();
    app.renderMessages();  
  });



});









