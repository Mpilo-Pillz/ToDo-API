document.addEventListener("DOMContentLoaded", function(event) {
    var request = new XMLHttpRequest();
    request.open('GET', '/api/todos', true);

    request.onload = function() {
        if (this.status == 200 && this.status < 400) {
            //success
            var data = JSON.parse(this.response);
            console.log("sucessul call");
            console.log(data);
            addTodos(data);
        } else {

        }
    };
    request.onerror = function() {
        console.log('could not connect to database');
    };
    request.send();
});

function addTodos(todos) {
    //add todos to page here by looping through each and taking the name and appending it
    todos.forEach(function(todo){
        console.log(todo.name);
        // var newTodo = '<li class="task">'+todo.name + todo.completed +'</li>';
        var newTodo = `<li class="task"><em>${todo.name}</em> completed status is <strong>${todo.completed}</strong></li>`;
        
        if(todo.completed === true) {
            document.querySelector('.task').classList.add("done");     
        } 
        document.querySelector('.list').insertAdjacentHTML('beforeend', newTodo);
        
    })
}

// document.addEventListener("click", function(event) {
//     var request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//         if(request.readyState == 4) {
//             if(request.status == 200) {
//                 console.log(request.responseText);
//             } else {
//                 console.log("suffering");
//             }
//         }
//     }

//     request.open("GET", "http://localhost:3000/api/todos");
//     request.send();

// });