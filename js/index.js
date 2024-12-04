let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let successMessage = document.getElementById("successMessage");
let errorMessage = document.getElementById("errorMessage");
let explainMessage = document.getElementById("explainMessage");
let signupAnchor = document.getElementById("signupAnchor");

let users = [];

if (localStorage.getItem("loginContainer") != null) {
  users = JSON.parse(localStorage.getItem("loginContainer"));
}

function signIn() {
  if (loginEmail.value == 0 || loginPassword.value == 0) {
    errorMessage.classList.remove("d-none");
    explainMessage.classList.add("d-none");
    return;
  }
  else {
    isCorrectEmailAndPassword();
  }

  function isCorrectEmailAndPassword() {
    let userFound = false;
 
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === loginEmail.value && users[i].password === loginPassword.value) {
        let userName = users[i].name;
        localStorage.setItem("userName", userName);
        successMessage.classList.remove("d-none");
        window.location.href = "./home.html";
        userFound = true;
         
      }
    }

    if (!userFound) {
      explainMessage.classList.remove("d-none");
      errorMessage.classList.add("d-none");
    }
  }
}
loginBtn.addEventListener("click", function () {
  signIn();
});

function clearData() {
  loginEmail.value = "";
  loginPassword.value = "";
}

signupAnchor.addEventListener("click", function () {
  window.location.href = "./signup.html";
});
