$(document).ready(function () {
    const APIKEY = "63ea2122478852088da68193";
    getContacts();
  
    $("#submit").on("click", function (e) {
      e.preventDefault();
      
      
      let username = $("#username").val();
      let password = $("#password").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "username": username,
        "password": password
      };
  
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://login-24b5.restdb.io/rest/registration",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
      }
      $.ajax(settings).done(function (response) {
        console.log(response);

        $("#submit").prop( "disabled", false);
        getContacts();
        window.location.assign('account.html');
        
    }); 

});

function getContacts(limit = 10, all = true) {

  }
})