const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateName ()= true){
    alert("Form submitted successfully")
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required ";
    // nameError.previousElementSibling.classList.add("fa-xmark");

    return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write Your Full Name";
        // nameError.previousElementSibling.classList.add("fa-xmark");
        return false
        
    }

    nameError.innerHTML=""
    // nameError.previousElementSibling.classList.add("fa-check");

   return true;  
}
