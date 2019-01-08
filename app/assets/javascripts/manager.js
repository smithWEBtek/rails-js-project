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
        document.getElementById("Show_Clients").innerHTML += `<li>Manager Name: <a href=`+ base_url + 'clients/' + myObj[x].id +`>` + myObj[x].name + '</a></li>' +
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
  $(`#show_projects-${client}`).empty();

  $.ajax({
    url: this.href, //data .json if you dont use dataType
    method: 'get',
    dataType: 'JSON',
    success: function(response) {
      let myObj = response.projects;
      for (x in myObj) {
        if (myObj[x].client_id === client) {
          document.getElementById(`show_projects-${client}`).innerHTML += `<li>Project Name: <a href=`+ project_show_url + myObj[x].id +`>` + myObj[x].name + '</a></li>' +
          `<button id="create-clientid-${client}">Create Projects</button><br><div id="create_project_form"></div>`;
        }
      }
      listenToCreateButton ()
    }
  })
}

function listenToCreateButton (){
    $("#button").on('click', function(event) {
      event.preventDefault();
      createProjectForm(this);
  })
}

function createProjectForm(){
  document.getElementById("create_project_form").innerHTML = '<textarea id="text_field"></textarea><button id="Submit_project">Submit</button>';
  $("#Submit_project").on('click', function(event) {
    event.preventDefault();
    createProject();
}

function createProject(){
  client_data = {name: document.getElementById("text_field").value};
  $.ajax({
      type: 'Post',
      url: base_url + `clients/${client}`,
      data: JSON.stringify(client_data),
      dataType: 'json'
    });
}


  class Project {
    constructor(name, completed, client_id, manager_id){
      this.name = obj.name
    }
  }

  Client.prototype.create = function() {

  }

    User.prototype.welcome = function() {
      document.getElementById(`welcome`).innerHTML = `Welcome ${this.name}`!;
  }
}
