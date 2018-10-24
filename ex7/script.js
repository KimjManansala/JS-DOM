// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

// What will be click
let button = document.getElementById("section-header");
// What will be removed
let section = document.getElementsByTagName("p");
let containerSection = section.parentNode;  //The coitaining element


button.onclick= function(){
    containerSection.removeChild(section);
    document.body.style.backgroundColor = "blue";
    

}
