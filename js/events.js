function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $("img").on("load", function () {
    element.classList.add("tasty");
  });
}

function pressIt() {
  $("form").on("keydown", function(key) {
    if (key.which == 71) {
      alert("g was pressed");
    }
  });
}

function submitIt(){
  $("form")
}

$(document).ready(function(){
  getIt();

});
