$(function (){
   console.log("only runs on the contact page!");
   listenToProjectPage();
 })


 function listenToProjectPage(){
   $("#Next").on('click', function(event) {
     event.preventDefault();
     console.log("hello!")
     getDetails();
  })


function getDetails(){
  $.ajax({
    url: this.location.href.split('/projects')[0], //data .json if you dont use dataType
    method: 'get',
    dataType: 'JSON',
    success: function(response) {
      debugger
      let myObj = response.projects;
      for (x in myObj) {
        document.getElementById("#project_name").innerHTML += myObj[x].name
      //  document.getElementById("#manager_name").innerHTML += myObj[x].manager_id;
        //document.getElementById("#client_name").innerHTML += myObj[x].client_id;
      //  document.getElementById("#completed").innerHTML += myObj[x].completed;
      }
    }
  })
}
