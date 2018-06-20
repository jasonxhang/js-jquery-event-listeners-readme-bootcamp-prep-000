function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIT() {
  $("img").on("load", function () {
    
  })
}

$(document).ready(function(){
  getIt();

});
