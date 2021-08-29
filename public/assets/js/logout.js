document.getElementById("logout-btn").addEventListener('click', async (event) => {
	event.preventDefault();
	console.log("1");

	const response = await fetch('/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
	});

	if(response.ok) {
		document.location.replace('/');
	} else {
		alert(response.statusText);
	}
})
