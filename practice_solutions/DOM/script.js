// DOM MANIPULATION
// document.getElementById("title")
// console.log(document.getElementById("title"))

document.addEventListener("DOMContentLoaded", 
    function (event){
        // this function is called when the button is clicked
        function sayHello (event) {
            console.log(event);
            // name is the string entered into the input field (whose id is name)
            var name = 
                document.getElementById("name").value;
            var message = "<h2>Hello " + name + "!</h2>";
            //console.log(message);

            // "content" is the id of a div where we display the message
            // .textContent will not render the html tags
            //document.getElementById("content").textContent = message;
            document.getElementById("content").innerHTML = message;

            if (name === "student") {
                // retrieve the text of the h1 heading (whose id is #title)
                var title = 
                    document.querySelector("#title")
                    .textContent;

                title += " & Lovin' it!";  // append something else to it

                // and write that value back to iit
                document.querySelector("h1")
                .textContent = title;

            }
        }

        //unobtrusive event binding
        // in this case the function to call is external
        document.querySelector("button")
            .addEventListener("click", sayHello);

        document.querySelector("body")
            .addEventListener("mousemove",
                function (event) {
                    if (event.shiftKey == true) {
                        console.log("x: " + event.clientX);
                        console.log("y: " + event.clientY);
                    }
                }
             
            );

    }
);




// document.querySelector("button")
//     .onclick = sayHello;