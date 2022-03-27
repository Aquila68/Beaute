function showContent(idNum) {
  var temp = document.getElementsByTagName("template")[0];

  var clon = temp.content.cloneNode(true);
  // var clon = temp.cloneNode(true);
  var idee = "item"+idNum;
  clon.querySelector('.item').id = idee;
  // clon.setAttribute('id', idee);
  // console.log(clon.querySelector('.pic-1')); //works
  document.body.appendChild(clon);
}

function driverProduct(){
  for(var i = 0; i < 6; i++ ){
      showContent(i);
      console.log(document.getElementById("item"+i));
  }
}


function totalCartCost(){
  var total = 0;
  var temp = document.getElementsByClassName("item-subtotal");
  for( var i=0; i<temp.length; i++){
    total+= parseInt(temp[i].innerHTML);
    console.log(i+" "+temp[i].innerHTML);
  }
  document.getElementById("total-cost").innerHTML = total;
}
