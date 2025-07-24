function checkPassword() {
  const password = document.getElementById("password_input").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "5757") {
    // إذا كانت كلمة السر صحيحة، انتقل إلى صفحة الهدية
    window.location.href = "gift.html";
  } else {
    // إذا كانت الكلمة خاطئة، أظهر رسالة الخطأ
    errorMessage.style.display = "block";
  }
}

function closeOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function event_stopPropagation(event) {
  event.stopPropagation();
}
