// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

// What will be click
const pressMe = document.getElementById('section-header');
console.dir(pressMe)

// What will be removed
const section =document.getElementById('section');
console.log(section)

pressMe.addEventListener('click', function(){
    if(section.style.display !== "none") section.style.display = "none";
    else section.style.display = "block";
    
})





