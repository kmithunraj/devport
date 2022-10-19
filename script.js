

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginlist = { "User": {
    "userlist":[{"username":"kmithunraj@gmail.com", "password":"hello"},{"username":"jeevanantham", "password":"hellosir"},{"username":"usr3", "password":"a123"}],
                           }
 };

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

for(const i =0; i < loginlist.User.userlist.length; i++){
    if(username == loginlist.User.userlist[i].username && password == loginlist.User.userlist[i].password){
        window.location.href="https://mithunraj.com/devport/dashboard.html";
    }
    else{
      alert('Wrong username or password');
      return false;
  }
}})