let loginName = document.getElementById("loginName");
let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let signupBtn = document.getElementById("signupBtn");
let loginAnchor = document.getElementById("loginAnchor");
let errorMessage = document.getElementById("errorMessage");
let successMessage = document.getElementById("successMessage");
let explainMessage = document.getElementById("explainMessage");
let loginList = [];

if (localStorage.getItem("loginContainer") !== null) {
  loginList = JSON.parse(localStorage.getItem("loginContainer"));
}

signupBtn.addEventListener("click", function () {
  
  let login = {
    name: loginName.value.trim(),
    email: loginEmail.value.trim(),
    password: loginPassword.value.trim(),
  };

  if (!login.name || !login.email || !login.password) {
    hideAllMessages();
    errorMessage.classList.remove("d-none");
    return;
  }

  let emailExists = loginList.some((user) => user.email === login.email);

  if (emailExists) {
    hideAllMessages();
    explainMessage.classList.remove("d-none");
  } else {
  
    loginList.push(login);
    localStorage.setItem("loginContainer", JSON.stringify(loginList));
    hideAllMessages();
    successMessage.classList.remove("d-none");
    
  }
});

function clearData() {
  loginName.value = "";
  loginEmail.value = "";
  loginPassword.value = "";
}
function hideAllMessages() {
  errorMessage.classList.add("d-none");
  successMessage.classList.add("d-none");
  explainMessage.classList.add("d-none");
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "./index.html";
});
