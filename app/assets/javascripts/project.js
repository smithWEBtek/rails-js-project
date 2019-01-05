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
          `<div id="show_projects-${myObj[x].id}"></div>`;
      }
      listenToButton(this);
      //console.log("the response:",response);
    }
  })
}

function listenToButton (){
    $("button").on('click', function(event) {
      event.preventDefault();
      getProjects(this);
  })
}


function getProjects(data){
//  console.log("data");
  let client_id = data.id.split("-")[1]
  $(`#Show_Clients`).empty();
debugger
  $(`#"show_projects-${client_id}"`).empty();

}
