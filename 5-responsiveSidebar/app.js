// Elements targeting
const toggleBtn = document.querySelector(".toggle-btn");
const sideBar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

// EventListiner adding

toggleBtn.addEventListener("click", function(){
    sideBar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function(){ 
    sideBar.classList.toggle("show-sidebar");
})
