$(document).ready(function () {

  //Initializes the number of clicks variable to 0
  var clicks = 0;

  //Generate button is appended to DOM upon page load
  $('.generateButton').append('<button id="button">Generate</button>');

  //Appends a container with two buttons to the DOM
  $('.generateButton').on('click', function () {
    clicks++;
    $('body').append('<div class="buttonContainer"><button class="delete">Delete</button><button class="color">Change Color</button>Container #:' + clicks + '</div>');
  });

  //Allows individual containers to be removed
  $('body').on('click', '.delete', function () {
    $(this).parent().remove();
  });

  //Changes the background color from yellow to red and back
  $('body').on('click', '.color', function () {
    $(this).parent().toggleClass("red");
  });

});
