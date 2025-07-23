function checkPassword() {
  const password = document.getElementById('passwordInput').value;
  const errorMsg = document.getElementById('errorMsg');
  if (password === '1234') {
    window.location.href = 'gift.html';
  } else {
    errorMsg.textContent = '❌ الرمز غير صحيح، حاول مرة أخرى.';
  }
}
