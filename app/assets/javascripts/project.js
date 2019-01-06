$(function (){
   if($('body').is("#Project_Show")){
   listenToProjectPage();
  }
 })


 function listenToProjectPage(){
   $("#Next").on('click', function(event) {
     event.preventDefault();
  //   console.log("hello!")
     getDetails();
  })
}


function getDetails(){
//  debugger
  client = Number(this.location.href.split('/')[4])
  $.ajax({
    url: base_url +'clients/' + client + '/projects', //data .json if you dont use dataType
    method: 'get',
    dataType: 'JSON',
    success: function(response) {
      console.log(response);
      debugger
      let myObj = response.projects;
      for (x in myObj) {
        document.getElementById("#project_name").innerHTML += myObj[x].name;
      //  document.getElementById("#manager_name").innerHTML += myObj[x].manager_id;
        //document.getElementById("#client_name").innerHTML += myObj[x].client_id;
      //  document.getElementById("#completed").innerHTML += myObj[x].completed;
      }
    }
  })
}
