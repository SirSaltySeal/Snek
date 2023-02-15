$(document).ready(function () {
    //what kind of interface we want at the start 
    const APIKEY = "63ea2122478852088da68193";
    getContacts();
  
    //[STEP 1]: Create our submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //[STEP 2]: let's retrieve form data
      //for now we assume all information is valid
      //you are to do your own data validation
      let userName = $("#username").val();
      let email = $("#email").val();
      let password = $("#password").val();
  
      //[STEP 3]: get form values when user clicks on send
      //Adapted from restdb api
      let jsondata = {
        "username": userName,
        "email": email,
        "password": password
      };
  
      //[STEP 4]: Create our AJAX settings. Take note of API key
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
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
  
        //update our table 
        getContacts();
      });
    });//end click 
  
  
    //[STEP] 6
    //let's create a function to allow you to retrieve all the information in your contacts
    //by default we only retrieve 10 results
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://login-24b5.restdb.io/rest/registration",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }
});
