$(function (){
   if($('body').is("#Client_Show")){
   listenToProjectPage();
  }
 })


 function listenToProjectPage(){
   $("#Create_Project").on('click', function(event) {
     event.preventDefault();
  //   console.log("hello!")
     getForm();
  })
}

function getForm(){
  document.getElementById("Project_Area").innerHTML = '<textarea></textarea>';

}
