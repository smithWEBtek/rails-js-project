



function showClients() {
  $(document).ready(function(){
      $(`#DisplayClients`).on(`click`,() => function(){
        debugger
        $.get(`/managers`).done (function(state){
          $('#clients').appendeach(function(i, element){
             element.innerHTML = state.data.attributes.state[i]
           })
         })
       })
  });
 }
  // @manager.clients.
