$(function (){
  listenToForm()
})

const base_url = 'http://localhost:3000/'

function listenToForm (){
  $("#DisplayClients").on('click', function(event) {
    event.preventDefault();
  //  debugger
    getClients();
  })
}

function getClients(){
  $(`#Show_Clients`).empty();
  $.ajax({
    url: this.href, //data .json if you dont use dataType
    method: 'get',
    dataType: 'JSON',
    success: function(response) {
    //  debugger
      let myObj = response.clients;
      for (x in myObj) {
        document.getElementById("Show_Clients").innerHTML += '<li>Name: ' + myObj[x].name + '<br>' +
        '<a href="#" data-id="' + myObj[x].id +`" onclick="getProjects(data-id)">Display Projects</a>` +
          `<div id="show_projects"></div>`;};
      console.log("the response:",response);
    }
  })
}

// function listenToClients (){
//   $().on('click', function(event) {
//     event.preventDefault();
//   //  debugger
//     getClients();
//   })
// }

function getProjects(){
  debugger
  $(`#show_projects`).empty();

}
