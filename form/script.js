const scriptURL =
  "https://script.google.com/macros/s/AKfycbxjzGwW3Hkv7WPf3jksum3jInAZZo_P1gCNrGjB2E1_mK6R8Ql5BebkIQKq7br79vDu/exec";

const form = document.forms["manual-input"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
