document.querySelector(".car-form").addEventListener("submit", async (event) => {
	event.preventDefault();

	const brand = document.getElementById("brand").value.trim();
	const model = document.getElementById("model").value.trim();
	const color = document.getElementById("color").value.trim();
	const message = document.getElementById("car-message");
	const body = { brand, model, color };

	if ( brand && model && color ) {
		const response = await fetch("/addCar", {
			method: "POST",
			body: body,
			headers: { "Content-Type": "application/json" },
		});
		if (response.ok) {
			document.location.replace('/');
		} else {
			message.innerText = "Invalid Inputs! Try again";
			message.style.color = "red";
			setTimeout(function(){
				message.style.color = "black";
    		message.innerText = '';
			}, 3000);
		}
	} else {
		message.innerText = "Invalid Inputs! Try again";
		message.style.color = "red";
		setTimeout(function(){
			message.style.color = "black";
			message.innerText = '';
		}, 3000);
	}
})