//define functions here

$(document).ready(function(){

// call functions here
getIt()
});

function getIt() {
  S(document).on('click', function(key) {
    if(key) {
      alert("Hey!")
    }
  })
}
