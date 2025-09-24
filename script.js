const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Responses
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const birthdate = document.getElementById("birthdate").value;

  // checked interests
  const specialInterests = [];
  if (document.getElementById("books").checked) specialInterests.push("Books");
  if (document.getElementById("music").checked) specialInterests.push("Music");
  if (document.getElementById("movies").checked) specialInterests.push("Movies");

  // saving data
  const formData = { firstName, lastName, email, birthdate, specialInterests };
  localStorage.setItem("formData", JSON.stringify(formData));

  window.location.href = "success.html";
});
