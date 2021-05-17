const modalBody = document.getElementById("modalBody")

const modalElement = document.getElementById("modalContainer").style.display = "flex";


function closeModal() {  
    document.getElementById("modalBody").style.display = "none" 
    document.getElementById("pageBody").classList.remove("overlay")
}

document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal by calling closeModal()
      if (
        event.target.matches("#closeButton") ||
        !event.target.closest("#modalBody")
      ) {
        closeModal()
      }
    },
    false
  )



