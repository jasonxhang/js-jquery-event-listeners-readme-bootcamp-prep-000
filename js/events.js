function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIT() {
  $("img").on("load", function () {
    element.classList.add("tasty");
  })
}

$(document).ready(function(){
  getIt();

});
