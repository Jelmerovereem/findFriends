const mymap = L.map("mymap").setView([52.228947, 5.230462], 1);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiamVsbWVyb3ZlcmVlbSIsImEiOiJja2c3MDVoaTkwMm1sMnVwbThzMXhudTZxIn0.dSnLS_yVbd3-BkeOiEpvYw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(mymap);

const getLocationBtn = document.querySelector(".getLocation");

function getGeo() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createMarker);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

getLocationBtn.addEventListener("click", getGeo);

function createMarker(position) {
	let coordLat = position.coords.latitude;
	let coordLong = position.coords.longitude;
	console.log(coordLat)
	var marker = L.marker([coordLat, coordLong]).addTo(mymap);
	marker.bindPopup("This is your location!").openPopup();
	mymap.setView([coordLat, coordLong], 12);
};