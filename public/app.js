// @ Month 5

const pxr = new pillzTTP;

pxr.get('/api/todos', function(err, response) {
    console.log(response);
    var data = JSON.parse(response);
            addTodos(data);

            document.getElementById("todoInput").addEventListener('keydown', function(e) {
                if(e.key === "Enter") {
                    e.preventDefault();
                    createToDo();
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


