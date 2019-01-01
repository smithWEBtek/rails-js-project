
function showClients(){
  $(document).ready(function() {
      $(`#ShowClients`).on(`click`, function {
        $.get(`/clients`).done (function(state){
          $('#clients').appendeach(function(i, element){
             element.innerHTML = state.data.attributes.state[i]
}
