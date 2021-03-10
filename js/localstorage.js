// -------------- END ------------------- //
// id_no, name and Password from the register-form into localstorage
let idNo = document.getElementById('idno1');
let nm = document.getElementById('name1');
let psw = document.getElementById('psw1');

function store() {
    localStorage.setItem(JSON.stringify('idno1', idNO.value));
    localStorage.setItem(JSON.stringify('name1', nm.value));
    localStorage.setItem(JSON.stringify('psw1', psw.value));
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    let storedID = localStorage.getItem('id_no1');
    let storedName = localStorage.getItem('name1');
    let storedPw = localStorage.getItem('psw1');

    // entered data from the login-form
    let userID = document.getElementById('id_no');
    let userName = document.getElementById('name');
    var userPw = document.getElementById('psw');

    // check if stored data from register-form is equal to data from login form
    if(userID.value == storedID && userName == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}

let useridNum = document.getElementById('name').value
localStorage.setItem("currentloggedin", JSON.stringify(userID));

let storedID = localStorage.getItem('id_no1');
let userID = document.getElementById('id_no');
if(userID.value == storedID && userName == storedName && userPw.value == storedPw) {
    alert('You are loged in.');
}else {
    alert('ERROR.');
}
