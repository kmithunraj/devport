function navBtn() {
    var x = document.getElementById("navbar");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



  function validate(e)
    {
      e.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var loginlist = { "User": {
           "userlist":[{"username":"kmithunraj@gmail.com", "password":"hello"},{"username":"jeevanantham", "password":"hellosir"},{"username":"usr3", "password":"a123"}],
                                  }
        };
        
            for(var i =0; i < loginlist.User.userlist.length; i++){
                if(username == loginlist.User.userlist[i].username && password == loginlist.User.userlist[i].password){
                    alert("User login");
                    window.location.href("https://mithunraj.com/devport/dashboard.html");
                }
                else{
                  alert('Wrong username or password');
                  return false;
              }
            }
          }
  
          document.getElementById('formLogin').addEventListener('button', validate);