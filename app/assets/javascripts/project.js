

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

function listenToForm (){
  $("#DisplayClients").on('click', function(event) {
    event.preventDefault();
    getClients();
  })
}

function getClients(){
  var current_path = window.location.pathname;
  $.ajax({
    url: current_path +'/clients',
    method: 'get',
    success: function(response) {
      debugger
      console.log("the resonse:",response);
      //  var clients = response.innerHTML;
      $('#clients').append(response);
    }
  })
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
