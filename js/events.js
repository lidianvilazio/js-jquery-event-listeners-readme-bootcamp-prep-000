//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
});

function getIt() {
  $(document).on('click', function(key) {
    if(key) {
      alert("Hey!")
    }
  })
}


function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $(document).on('keydown', function(key) {
    window.alert('G')
  })
}
