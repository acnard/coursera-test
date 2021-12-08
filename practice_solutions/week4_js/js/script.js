var x = "Hello World!";
var message = "in global scope";
console.log("global: message="+ message);

function a() {
    var message = "inside function";
    console.log("message in a="+ message)
    
}

a();

var y=5;

if (y==3) {
    console.log("y equals 3");
}
else {
    console.log("y equals some other value");
}