function getIt() {
  $("p").on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $("img").on("load", function () {
    element.classList.add("tasty");
    element.style.border = "#FF0000"
  })
}

$(document).ready(function(){
  getIt();

});
