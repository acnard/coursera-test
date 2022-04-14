(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
  // the elses are just to manage obsolete cases
  else if (global.ActiveXObject) {
    // For very old IE browsers (optional)
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}


// Makes an Ajax GET request to 'requestUrl'
// note that getRequestObject() and handleResponse() are NOT exposed globally
// since they are only used here, within this sendGetRequest function,
// which is the only one we call from scripts.js
// the responseHandler is provided by the caller (in scripts.js)
ajaxUtils.sendGetRequest = 
  function(requestUrl, responseHandler, isJsonResponse) {
    //create a request object and set its parameters
    var request = getRequestObject();
    request.onreadystatechange = 
      function() { 
        handleResponse(request, responseHandler, isJsonResponse); 
      };
    //true makes the request async so browser doesn't freeze
    request.open("GET", requestUrl, true);
    request.send(null); // for POST only
  };


// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,
                        responseHandler,
                        isJsonResponse) {
  if ((request.readyState == 4) &&
     (request.status == 200)) {

      //default to json response = true
      if (isJsonResponse == undefined) {
        isJsonResponse = true; 
      }

      if (isJsonResponse) {
        responseHandler(JSON.parse(request.responseText))
      }
      else {
        responseHandler(request.responseText);
      }
  }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);

