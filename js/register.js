// ----------------- REGISTER DATA --------------------//
function createUsers(){
    const inputs = document.getElementsByTagName("input");
  
    fetch("http://127.0.0.1:5000/add-new-user/",{
        method: 'POST',
        body: JSON.stringify({
            name: inputs[1].value,
            surname: inputs[2].value,
            email: inputs[3].value,
            password: inputs[4].value,
        }),
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
    })
    .then((response) => response.json())
    .then((json) => {
      alert("User has been created");
      document.getElementById("reg-form").reset();
      window.location.href="index.html";
    });
}