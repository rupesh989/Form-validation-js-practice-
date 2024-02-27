const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validateName ()= true){
    alert("Form submitted successfully")
  }
});
function validateName(){
  let name = document.getElementById('name').value;

  if(name.length == 0){
      nameError.innerHTML = "Name Is Required";
      nameError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }

  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = "Write Full Name";
      nameError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }
  nameError.innerHTML = "";
  nameError.previousElementSibling.classList.add('fa-check');
  return true;
}
function validateEmail(){
  let email = document.getElementById('email').value;

  if(email.length == 0){
      emailError.innerHTML = "Email is required";
      emailError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }

  if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
      emailError.innerHTML = "Enter Valid Email";
      emailError.previousElementSibling.classList.add('fa-xmark');
      return false;
  }
  emailError.innerHTML = "";
  emailError.previousElementSibling.classList.add('fa-check');
  return true;
}