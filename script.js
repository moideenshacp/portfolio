function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function validate() {
  var fname = document.forms["submit-form"]["firstname"].value;
  var lname = document.forms["submit-form"]["lastname"].value;
  var email = document.forms["submit-form"]["email"].value;
  var subject = document.forms["submit-form"]["subject"].value;

  if (fname === "" || lname === "" || subject === "") {
    alert("First Name, Last Name, and Subject are required fields");
    return false;
  }

  // Email validation using regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address");
    return false;
  }

}


  