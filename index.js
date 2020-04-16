let express = require('express'),
app = express();
const axios = require('axios');
port = process.env.PORT || 3000,
bodyParser = require('body-parser');

var todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
    // res.send("Eita");
    // res.json({thejson: "this is the json"})
    res.sendFile('index.html');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log("APP IS RUNNING ON PORT " + port );
});

app.get('/', (req, res) => {
    // res.send("Eita");
    res.json({thejson: "this is the json"})
});

app.get('/mpi', (req, res) => {
    res.send({ message: "this is from the server" })
});