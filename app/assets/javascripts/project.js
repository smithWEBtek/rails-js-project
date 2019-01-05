

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
          `<button data_id =`+ myObj[x].id +`>Display Projects</button></li><br>
          <div id="show_projeccts"></div>`;};
      console.log("the response:",response);

     // var names = response.clients.name.map(
     //   c =>
     //    '<li>' + c.name + '</li>'
     //  );
     //
     //  $('#Show_Clients').append(names)


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
