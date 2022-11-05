

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const userlist = { "User": {
    "userlist":[{"username":"kmithunraj@gmail.com", "password":"hello"},{"username":"jeevanantham", "password":"hellosir"},{"username":"usr3", "password":"a123"}],
                           }
 };

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

for(let i =0; i < userlist.User.userlist.length; i++){
    if(username == userlist.User.userlist[i].username && password == userlist.User.userlist[i].password){
        location.href="https://mithunraj.com/devport/dashboard.html";
        return true;
    }
    else{
      alert('Wrong username or password');
      return false;
  }
}})