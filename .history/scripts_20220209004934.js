
window.onload = function () {
    const collection = document.getElementsByClassName("statusofserver");
    //collection[0].innerHTML = "Server is online";
    getstatus();

};

async function getstatus() {
    try {
        var uri = 'http://127.0.0.1:5000/api/statuscheck/'
        var xhr = new XMLHttpRequest();
        xhr.open("GET", uri, false);
        xhr.send(null);
    }
    catch {
        //is offline
        collection[0].innerHTML = "Server is offline";
        collection[0].style.color = "red";
    }

    if (xhr.status == 200) {
        //is online
        collection[0].innerHTML = "Server is online";
        collection[0].style.color = "green";
    }
    else {
        //is offline
        collection[0].innerHTML = "Server is offline";
        collection[0].style.color = "red";
    }

}