function fetchData(){
  console.log("Start fetch");
  fetch("http://localhost:8081/index").then(response =>{
    return response.json();
  }).then(data => {
    console.log(data);
  }).catch(error => {
    console.log(error);
  });

}

fetchData();
