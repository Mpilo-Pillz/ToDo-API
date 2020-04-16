 function pillzTTP() {
    this.pxr = new XMLHttpRequest();
}

//Make a GET
pillzTTP.prototype.get = function(url, callback) {
    this.pxr.open('GET', url, true);

    // let self = this;
    this.pxr.onload = () => {
        if(this.pxr.status === 200) {
            console.log(this.pxr.responseText);
            // return self.pxr.responseText;
            callback(null, this.pxr.responseText);
        } else {
            callback('Error: ' + this.pxr.status);
        }
    }
    this.pxr.send();
}

//Make a POST
pillzTTP.prototype.post = function(url, data, callback) {
    this.pxr.open('POST', url, true);
    this.pxr.setRequestHeader('Content-type', 'application/json');

    this.pxr.onload = () => {
        callback(null, this.pxr.responseText);
    }

    this.pxr.send(JSON.stringify(data));
}

// @ Month 5
// const pxr = new pillzTTP;

// pxr.get('/api/todos', function(err, response) {
//     console.log(response);
// });

// pxr.post('/api/todos', data, function(err, response) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(response);
//     }
// });