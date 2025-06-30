document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const confirmInput = document.getElementById("confirmPassword");
  const form = document.getElementById("recruiterForm");

  const rules = {
    length: document.getElementById("length"),
    uppercase: document.getElementById("uppercase"),
    number: document.getElementById("number"),
    special: document.getElementById("special"),
  };

  const passwordErrorList = document.getElementById("passwordError");

  passwordInput.addEventListener("input", () => {
    const val = passwordInput.value;

    const isLength = val.length >= 8;
    const hasUppercase = /[A-Z]/.test(val);
    const hasNumber = /\d/.test(val);
    const hasSpecial = /[!@#$%^&*]/.test(val);

    rules.length.style.color = isLength ? "green" : "red";
    rules.uppercase.style.color = hasUppercase ? "green" : "red";
    rules.number.style.color = hasNumber ? "green" : "red";
    rules.special.style.color = hasSpecial ? "green" : "red";

    const allValid = isLength && hasUppercase && hasNumber && hasSpecial;

    passwordErrorList.style.display = allValid ? "none" : "block";
  });

  form.addEventListener("submit", function (e) {
    const password = passwordInput.value;
    const confirm = confirmInput.value;

    const isValid =
      password.length >= 8 &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[!@#$%^&*]/.test(password);

    document.getElementById("confirmPasswordError").textContent = "";

    if (!isValid) {
      passwordErrorList.style.display = "block";
      e.preventDefault();
    }

    if (password !== confirm) {
      document.getElementById("confirmPasswordError").textContent =
        "Passwords do not match.";
      e.preventDefault();
    }
  });
});
