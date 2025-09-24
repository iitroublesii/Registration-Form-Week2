document.getElementById("registerForm").onsubmit = function(event) {
event.preventDefault();
}

const firstName = document.getElementById("firstname").value;
const lastName = document.getElementById("lastname").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const birthdate = document.getElementById("birthdate").value;
const interests = [];

  document.querySelectorAll('input[name="interests"]:checked').forEach((checkbox) => {
        interests.push(checkbox.value);
});