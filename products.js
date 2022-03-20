//text change practise
function getProducts(){
  var myClasses = document.getElementsByClassName("divp");

  for (var i = 0; i < myClasses.length; i++) {
    myClasses[i].innerHTML = "new content";
    }
}


//cell duplication
function showContent(idNum) {
  var temp = document.getElementsByTagName("template")[0];

  var clon = temp.content.cloneNode(true);
  // var clon = temp.cloneNode(true);
  var idee = "product"+idNum;
  clon.querySelector('.product-cell').id = idee;
  // clon.setAttribute('id', idee);
  // console.log(clon.querySelector('.pic-1')); //works
  document.body.appendChild(clon);
}

//run cell duplication certain amount of times
function driverProduct(){
  for(var i = 0; i < 6; i++ ){
      showContent(i);
      console.log(document.getElementById("product"+i));

  }
}
