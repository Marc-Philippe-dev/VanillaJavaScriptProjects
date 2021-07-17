// Element targeting 
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalOverlay = document.querySelector(".modal-overlay");


// EventListener adding

modalBtn.addEventListener("click", function(){
    modalOverlay.classList.remove("hide-modal");
})

closeBtn.addEventListener("click", function(){
  modalOverlay.classList.add("hide-modal"); 
})