document.addEventListener("DOMCotentLoaded", function(event) {
    let request = new XMLHttpRequest();
    request.open('GET', '/api/todos', true);

    request.onload = function() {
        if (this.status == 200 && this.status < 400) {
            //success
            var data = JSON.parse(this.response);
            console.log("sucessul call");
        } else {

        }
    };
    request.onerror = function() {
        console.log('could not connect to database');
    };
    request.send();
});