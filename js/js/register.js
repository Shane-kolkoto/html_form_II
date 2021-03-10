// ----------------- REGISTER DATA --------------------//
function createUsers(){
    const inputs = document.getElementsByTagName("input");
  
    fetch("http://127.0.0.1:5000/add-user/",{
        method: 'POST',
        body: JSON.stringify({
            name: inputs[1].value,
            surname: inputs[2].value,
            email: inputs[3].value,
            password: inputs[4].value,
            confirm: inputs[5].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
        // id_no, name and Password from the register-form into localstorage
let userin = document.getElementById('exampleInputName1').value
localStorage.setItem('currentlyloggedin', JSON.stringify(userin))
      alert("User has been created");
      document.getElementById("reg-form").reset();
      window.location.href="./index.html";
    });
}


