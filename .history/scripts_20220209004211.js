
window.onload = function () {
    //const collection = document.getElementsByClassName("statusofserver");
    //collection[0].innerHTML = "Server is online";
    getstatus();

};

async function getstatus() {

    const response = await fetch('http://127.0.0.1:5000/api/statuscheck/');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
    const collection = document.getElementsByClassName("statusofserver");
    if (myJson == "online") {
        collection[0].innerHTML = "Server is online";
        collection[0].style.color = "green";
    }
    else {
        collection[0].innerHTML = "Server is offline";
        collection[0].style.color = "red";
    }
}