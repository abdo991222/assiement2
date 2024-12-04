let welcomeUser = document.getElementById("userName");
let logoutBtn = document.getElementById("logoutBtn");
let userName = localStorage.getItem("userName");

welcomeUser.textContent = `Welcome  ${userName}`;

logoutBtn.addEventListener("click", function () {

  localStorage.removeItem("userName");
  
  window.location.href = "./index.html";
});
