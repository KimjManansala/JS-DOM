// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp
 
const button = document.getElementById("myButton");
const boxContainer = document.getElementById("boxContainer")


button.addEventListener("click",function(){
    let box = document.createElement("div");    //Creates box element
    box.setAttribute('class', "box");
    boxContainer.appendChild(box);
})
