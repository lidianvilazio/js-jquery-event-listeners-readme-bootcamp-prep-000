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
