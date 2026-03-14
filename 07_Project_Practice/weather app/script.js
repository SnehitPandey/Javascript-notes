const input = document.getElementById("location");
const search = document.getElementById("search");

search.addEventListener("click", function () {
  if (input.value == "") return;
  const place = input.value.trim();
  callApi(place);
  input.value = "";
});

async function callApi(place) {
  const display = document.getElementById("weather_data");
  display.innerHTML = "Loading...";

  const url = new URL("https://api.openweathermap.org/data/2.5/weather");

  url.searchParams.append("q", place);
  url.searchParams.append("appid", "api___key");
  url.searchParams.append("units", "metric");

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.cod != 200) {
      display.innerHTML = `<div>City not found!<!div>`;
      return;
    }
    const icon = data.weather[0].icon;
    display.innerHTML = `
       <div> City:- ${data.name} </div>
       <div> Temp:- ${data.main.temp}*C </div>
       <div> 
       Weather:- ${data.weather[0].main} 
       <img src= "https://openweathermap.org/img/wn/${icon}@2x.png" 
       id="weather-icon" 
       alt="weather icon"
       style="height:10px; width:10px" >
       </div>
       `;

    console.log(data);
  } catch (error) {
    console.log("call failed", error);
  }
}
