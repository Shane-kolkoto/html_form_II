let users = [];


fetch("http://127.0.0.1:5000/list-users/")
    .then((response) =>response.json())
    .then((data) => {
    console.log(data);
    users = data;
});

function login(){
    let inputs = document.getElementsByTagName("input");
    
    let mail = inputs[1].value;
    let password = inputs[2].value;

    let log = users.filter(user => {
        return user.email == mail && user.pin == password ?true : false;
    })

    console.log(log);

    if (log.length > 0) {
        alert("You have successfully logged in");
        window.location.href = "index.html";
    }else{
        alert("Please enter a valid username and password");
    }
}