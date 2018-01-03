//define functions here

$(document).ready(function(){

// call functions here
getIt()
});

function getIt() {
  $(document).on('click', function(key) {
    if(key) {
      alert("Hey!")
    }
  })
}


function frameIt() {
  $('imag').on('load', function() {

  })
}

// Define a function frameIt that does not accept
// a parameter. The function should bind the load
// event that adds the class tasty to the image
// to add a red frame to the image.
