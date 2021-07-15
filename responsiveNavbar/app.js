// Targetting elements
const toggleIcon = document.querySelector(".toggle-icon")
const links =  document.querySelector(".links");
 
//Adding eventListener

toggleIcon.addEventListener('click' , function(){
    links.classList.toggle('show-links')
})