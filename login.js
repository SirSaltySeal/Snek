$(document).ready(function () {
  const APIKEY = "63ea2122478852088da68193";
  $("#submit").on("click", function (e) { 
    e.preventDefault();
    getContacts();
  });
  
  function getContacts(limit = 10, all = true) {

      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://login-24b5.restdb.io/rest/registration",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
      },
    }
    
    $.ajax(settings).done(function (response) {

      for (var i = 0; i < response.length && i < limit; i++) {

        let username = response[i].username
        let password = response[i].password
        let log_user = $("#user").val();
        let log_pass = $("#pass").val();

        if((username === log_user) && (password === log_pass)){
          window.location.assign('index.html');
        } else {
          document.getElementById("user_info").style.visibility = "hidden";
          document.getElementById("error").style.visibility = "visible";
          document.getElementById("error").style.zIndex = "1";
        }
      }
    });
  }
})