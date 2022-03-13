//text change practise
function getProducts(){
  var myClasses = document.getElementsByClassName("divp");

  for (var i = 0; i < myClasses.length; i++) {
    myClasses[i].innerHTML = "new content";
    }
}

//cell duplication
function showContent() {
  var temp = document.getElementsByTagName("template")[0];
  var clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}

//run cell duplication certain amount of times
function driverProduct(){
  for(var i = 0; i < 4; i++ ){
      showContent();
  }
}
