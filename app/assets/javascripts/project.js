

//

//function showClients() {
//
  //    $("button").on("click", function(){
//        alert("The paragraph was clicked.");
  //    });
  //      $.get(`/managers`).done (function(state){
    //      $('#clients').appendeach(function(i, element){
      //       element.innerHTML = state.data.attributes.state[i];
        //   })
      //   })
  //  });
 //}
//   // @manager.clients.

// function showClients() {
//   $(document).ready(function(){
//     $(`#DisplayClients`).on("click",function(){
//       $.get(`/managers`).done (function(clients){
//         debugger
//          clients.data.forEach(function(client){
//            $('#clients').append(`<button id= "client_id-${client.id}">${client.id}</button>`)
//          })
//        })
//      })
//    })
//  }

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
        '<a href="#" data-id="' + myObj[x].id +`" onclick="getProjects(this)">Display Commits</a>` +
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
// $(document).ready(function(){
//   $("#DisplayClients").on("click", function(){
//
//
//     $.get(current_path +`/clients`).done (function(clients) {
//     debugger
//     alert("The paragraph was clicked.");
//     });
//   });
// });
