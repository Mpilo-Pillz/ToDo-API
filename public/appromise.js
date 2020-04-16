const http = new fikaTTP;

http.get('/api/todos')
.then(data => console.log(data))
.catch(err => console.log(err));

let userInput = document.getElementById('todoInput').value;
const data = { name: userInput };

http.post('/api/todos', data)
.then(data => console.log(data))
.catch(data => console.log(err));

http.put('/api/todos/5', data)
.then(data => console.log(data))
.catch(data => console.log(err));

http.delete('/api/todos/5')
.then(data => console.log(data))
.catch(data => console.log(err));