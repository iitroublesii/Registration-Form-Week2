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

    outputDiv.innerHTML = `
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Birthdate:</strong> ${formData.birthdate}</p>
        <p><strong>Special Interests:</strong> ${formData.interests.join(", ") || "None selected"}</p>
      `;