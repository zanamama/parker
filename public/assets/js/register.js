document.querySelector(".register-form").addEventListener('submit', async (event) => {
	event.preventDefault();

	const firstname = document.querySelector("#firstname-register").value.trim();
	const lastname = document.querySelector("#lastname-register").value.trim();
	const email = document.querySelector("#email-register").value.trim();
	const password = document.querySelector("#password-register").value.trim();
	const message = document.getElementById("register-message");
  const body = { firstname, lastname, email, password };

	if (firstname && lastname && email && password) {
			const response = await fetch('/register', {
			method: 'POST',
			body: JSON.stringify(body),
			headers: { "Content-Type": "application/json" },
		});

		if (response.ok) {
			document.location.replace('/addCar');
		} else {
			message.innerText = "Invalid Inputs! Try again";
			message.style.color = "red";
			setTimeout(function(){
				message.style.color = "black";
    		message.innerText = 'Must be 8+ Characters in Length';
			}, 3000);
		}
	} else {
    message.innerText = "Invalid Inputs! Try again";
    message.style.color = "red";
    setTimeout(function(){
      message.style.color = "black";
      message.innerText = 'Must be 8+ Characters in Length';
    }, 3000);
  }
})

