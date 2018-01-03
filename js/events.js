//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
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
  $('#typing').on('keydown', function(key) {
    if(key.which === 71) {
        alert('G')
    }
  })
}
