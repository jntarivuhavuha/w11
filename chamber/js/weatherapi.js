// select HTML elements in the document
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('.weath');
const windSpeed = document.querySelector('#wspeed');

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Port-Vila&units=imperial&appid=2aae4e33100f691521d10a59b4d392f0';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `${weatherData.main.temp.toFixed(1)}`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
    windSpeed.innerHTML = `${weatherData.wind.speed.toFixed(1)}`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    let newDesc = desc.split(' ').map(capitalize).join(' ');
    captionDesc.textContent = newDesc;
    windChill(currentTemp.innerHTML, windSpeed.innerHTML)
  }

  function capitalize(s) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  }