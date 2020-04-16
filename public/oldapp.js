// @ Month 5

const pxr = new pillzTTP;

pxr.get('/api/todos', function(err, response) {
    console.log(response);
    var data = JSON.parse(response);
            addTodos(data);

            document.getElementById("todoInput").addEventListener('keydown', function(e) {
                // console.log(e);
                if(e.key === "Enter") {
                    e.preventDefault();
                    createToDo();
                    // console.log(e);
                }
            })
            
});

function createToDo() {
    let userInput = document.getElementById('todoInput').value;
    console.log(userInput);
    
    var bodySent =  { name: userInput };

    pxr.post('/api/todos', bodySent, function(err, newTodo) {
        if(err) {
            console.log(err);
        } else {
            console.log(newTodo);
            document.getElementById('todoInput').value = ''
            addTodoToUI(newTodo);
        }
    });
}

function addTodoToUI(todo) {
    var newTodo = `<li class="task"><em>${todo.name}</em> completed status is <strong>${todo.completed}</strong></li>`;
        console.log(todo.completed);
        if(todo.completed) {
            document.querySelector('.task').classList.add("done");     
        } 
        document.querySelector('.list').insertAdjacentHTML('beforeend', newTodo);
}

function addTodos(todos) {
    //add todos to page here by looping through each and taking the name and appending it
    todos.forEach(function(todo){
        console.log(todo.name);
        // var newTodo = '<li class="task">'+todo.name + todo.completed +'</li>';
        addTodoToUI(todo)
        
    })
}

// var userInput = document.getElementById('todoInput').value;
//     var bodySent =  { name: userInput };



// var request = new XMLHttpRequest();

// document.addEventListener("DOMContentLoaded", function(event) {
    
//     request.open('GET', '/api/todos', true);

//     request.onload = function() {
//         if (this.status == 200 && this.status < 400) {
//             //success
//             var data = JSON.parse(this.response);
//             addTodos(data);


//             document.getElementById("todoInput").addEventListener('keydown', function(e) {
//                 // console.log(e);
//                 if(e.key === "Enter") {
//                     e.preventDefault();
//                     createToDo();
//                     // console.log(e);
//                 }
//             })
//         } 
//     };
//     request.onerror = function() {
//         console.log('could not connect to database');
//     };
//     request.send();
// });



// function createToDo() {

//     var userInput = document.getElementById('todoInput').value;
//     var bodySent =  { name: userInput }

//     console.log("user input-->",bodySent);


//     console.log('fika')
//     request.open("POST", '/api/todos', true)
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//     console.log('form data -->', bodySent);
//     request.send(JSON.stringify(bodySent));
     
// }
