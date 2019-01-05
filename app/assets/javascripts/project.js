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
      let myObj = response.clients;
      for (x in myObj) {
        document.getElementById("Show_Clients").innerHTML += '<li>Name: ' + myObj[x].name + '<br>' +

        `<button id="clientid-${myObj[x].id}">Display Projects</button><br>` +
          `<div id="show_projects"></div>`;

      $(`#clientid-${myObj[x].id}`).on('click', () => listenToButton());
      }
      console.log("the response:",response);
    }
  })
}

function listenToButton (){
    $("#DisplayClients").on('click', function(event) {
      event.preventDefault();
    //  debugger
      getProjects();
    })
  }



function getProjects(clientID){
//  console.log("data");
debugger
  $(`#show_projects`).empty();

}
