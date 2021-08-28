document
  .querySelector("#login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault;

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    if (email && password) {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });
    }
  });
