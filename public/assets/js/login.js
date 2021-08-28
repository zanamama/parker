document
  .querySelector("#login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault;

    const email = document.getElementById("email").value.trim();

    const password = document.getElementById("password").value.trim();

    const message = document.getElementById("login-message");

    if (email && password) {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        message.innerText = "Incorrect Email or Password";
        message.style.color = "red";
        setTimeout(() => {
          message.innerText = "Must be 8+ Characters in Length";
          message.style.color = "black";
        }, 2000);
      }
    }
  });
