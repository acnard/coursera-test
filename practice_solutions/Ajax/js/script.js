// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    // here the functions are defined inline

    document.querySelector("button")  //only one button in document
      .addEventListener("click", function () {
        //inline definition of function called when button clicked
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data/names.json", 
            function (res) {
              var message = res.firstName + " " + res.lastName;
              var message2 = "you use " + res.numberOfDisplays + " displays for coding";

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + message + "!</h2>" +
                               "<p>" + message2 + "</p>";
            });

        
      });
  }
);





