document.addEventListener("click", function(event) {
    var request = new XMLHttpRequest();
    request.open('GET', '/api/todos', true);

    request.onload = function() {
        if (this.status == 200 && this.status < 400) {
            //success
            var data = JSON.parse(this.response);
            console.log("sucessul call");
            console.log(data);
        } else {

        }
    };
    request.onerror = function() {
        console.log('could not connect to database');
    };
    request.send();
});

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