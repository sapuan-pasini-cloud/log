var password = "mypassword"; // Ganti dengan password yang diinginkan

function checkPassword() {
  var storedPassword = sessionStorage.getItem("password");
  if (storedPassword === password) {
    redirectToDrive();
  } else {
    showPasswordForm();
  }
}

function submitPassword() {
  var passwordInput = document.getElementById("passwordInput");
  var passwordValue = passwordInput.value;
  
  if (passwordValue === password) {
    sessionStorage.setItem("password", password);
    redirectToDrive();
  } else {
    var errorElement = document.getElementById("error");
    errorElement.textContent = "Password salah. Silakan coba lagi.";
  }
}

function showPasswordForm() {
  var formHtml = `
    <h2>Masukkan Password</h2>
    <input type="password" id="passwordInput" />
    <button onclick="submitPassword()">Submit</button>
    <p id="error" style="color: red;"></p>
  `;
  document.body.innerHTML = formHtml;
}

function redirectToDrive() {
  window.location.href = "https://drive.google.com/drive/folders/13otB1Q2RrslkdD9uumvP_-hnk71BTJAw"; // Ganti ID_FOLDER dengan ID folder Google Drive yang ingin Anda bagikan
}
