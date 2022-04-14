// $ is actually a jquery function

$(function () {  // function executed when the DOMContentLoaded

    //same as document.querySelector("#navbarToggle").addEventListener("blur")
    $("#navbarToggle").blur(function (event) {
       var screenwidth = window.innerWidth;
       if (screenwidth < 768) {
           $("#collapsable-nav").collapse('hide');
       }  
    });


});