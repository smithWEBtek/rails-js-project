// $(function (){
//   listenToPage()
// })
//
//
// function listenToPage (){
//   $("#Next").on('click', function(event) {
//     event.preventDefault();
//   //  debugger
//     getProjects();
//   })
// }
//
// function getProjects(){
//   $.ajax({
//     url: this.url.split('/projects')[0], //data .json if you dont use dataType
//     method: 'get',
//     dataType: 'JSON',
//     success: function(response) {
//       debugger
//       let myObj = response.projects;
//       for (x in myObj) {
//         document.getElementById("").innerHTML += '<li>Name: ' + myObj[x].name + '<br>' +
//         `<button id="clientid-${myObj[x].id}">Display Projects</button><br>` +
//           `<ul id="show_projects-${myObj[x].id}"></ul>`;
//       }
//       listenToButton(this);
//       //console.log("the response:",response);
//     }
//   })
// }
