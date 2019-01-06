$(function (){
  listenToForm();
})

const base_url = 'http://localhost:3000/'

function listenToForm (){
  $("#DisplayClients").on('click', function(event) {
    event.preventDefault();
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
          `<ul id="show_projects-${myObj[x].id}"></ul>`;
      }
      listenToButton(this);
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
  let client = Number(data.id.split("-")[1]);
  let project_ul = `show_projects-${client}`;
  let project_show_url = base_url + 'clients/' + client + '/projects/'
  $(`#project_ul`).empty();

  $.ajax({
    url: this.href, //data .json if you dont use dataType
    method: 'get',
    dataType: 'JSON',
    success: function(response) {
      let myObj = response.projects;
      for (x in myObj) {
        if (myObj[x].client_id === client) {
          document.getElementById(`show_projects-${client}`).innerHTML += `<li>Project Name: <a href=`+ project_show_url + myObj[x].id +`>` + myObj[x].name + '</a></li>';
        }
      }
    }
  })
}
