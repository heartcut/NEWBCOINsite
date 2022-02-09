
window.onload = function () {
    userAction();
};

const userAction = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/statuscheck/');
    const myJson = await response.json(); //extract JSON from the http response
    // do something with myJson
}