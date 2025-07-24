function checkPassword() {
  const password = document.getElementById("password_input").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "5757") {
    window.location.href = "gift.html";
  } else {
    errorMessage.style.display = "block";
  }
}