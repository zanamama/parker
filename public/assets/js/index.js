// DEPENDENCIES =====================
const status = document.querySelector("#status");
const mapLink = document.querySelector("#map-link");
const locationApiUrl = `http://localhost:4000/api/locations`;

// FUNCTIONS =====================
function geoFindMe() {
	mapLink.href = "";
	mapLink.textContent = "";

	function success(position) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;

		// TODO: make api call containing the lat & lng using fetch to POST: /api/locations
		const positionObj = {
			latitude,
			longitude,
		};
		locationApiCall(positionObj);

		status.textContent = "";
		mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
		mapLink.textContent = `Lat: ${latitude} °, Lon: ${longitude} °`;
	}

	function error() {
		status.textContent = "Unable to retrieve your location";
	}

	if (!navigator.geolocation) {
		status.textContent = "Geolocation is not supported by your browser";
	} else {
		status.textContent = "Obtaining location, please wait...";
		navigator.geolocation.getCurrentPosition(success, error);
	}

	// Credits to https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API#examples
}

function locationApiCall(locationObj) {
	fetch(locationApiUrl, {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(locationObj),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data && !data.error) {
				// reload the page to fetch the added parking spot
				location.reload();
			}
		});
}

// INTERACTIONS =====================
document.querySelector("#find-me").addEventListener("click", geoFindMe);
