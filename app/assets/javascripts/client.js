$(function (){
   if($('body').is("#Client_Show")){
   listenToClientPage();
  }
 })


 function listenToClientPage(){
   $("#Edit_Client").on('click', function(event) {
     event.preventDefault();
  //   console.log("hello!")
     getForm();
  })
}

function getForm(){
  document.getElementById("client_name").innerHTML = '<textarea></textarea>';
}
