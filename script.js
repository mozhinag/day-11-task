var res = fetch("https://restcountries.com/v3.1/all");
res.then((data) => data.json()).then((data1) => {
  var ele = document.createElement("div");
  ele.className = "container"; // Move the container div outside the loop

  for (let i = 0; i < data1.length; i++) {
    console.log(data1[i].name.common);
    console.log(data1[i].region);
    console.log(data1[i].latlng); // Corrected typo

    var cardDiv = document.createElement("div");
    cardDiv.className = "col-md-4"; // Each card should be in a column

    cardDiv.innerHTML = `
      <div class="boxpart">
        <div class="card" style="width: 18rem;">
          <h5 class="card-title" style="text-align: center">${data1[i].name.common}</h5>
          <img src="${data1[i].flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Capital: ${data1[i].capital}</h5>
            <h5 class="card-title">Region: ${data1[i].region}</h5>
            <h5 class="card-title">Lat: ${data1[i].latlng[0]}</h5>
            <h5 class="card-title">Lng: ${data1[i].latlng[1]}</h5>
            <button class="btn btn-primary" onclick="getWeather('${data1[i].name.common}')">Click for weather</button>
          </div>
        </div>
      </div>
    `;

    ele.appendChild(cardDiv);
  }

  document.body.append(ele);

 
});

function getWeather(countryname) {
  
  const apiKey = '0289d7254280192db5134512b5af81d4';
  const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${countryname}&appid=${apiKey}`;

  fetch(weatherApiUrl)
    .then((response) => response.json())
    .then((weatherData) => {
      console.log(`Weather in ${countryname}:`, weatherData);
      // Handle the weather data as needed (update the UI, display in a modal, etc.)
      alert(`Weather in ${countryname}: ${weatherData.weather[0].description}`);
    })
    .catch((error) => console.error('Error fetching weather data:', error));
}