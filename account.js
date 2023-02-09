if (username.length === 0 || password.length === 0) {
    alert("Username and password must be filled!");
    return;
  }
  
  
  function auth(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // check if the username of password are empty
    if (username.length === 0 || password.length === 0) {
      alert("Username and password must be filled!");
      return false;
    }
  
    if (username === "123" && password === "123") {
      window.location.replace("home.html");
    } else {
      alert("Please enter valid information");
      return;
    }
  }
  
  

  