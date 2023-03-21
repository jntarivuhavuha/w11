document.querySelector('#©').textContent = new Date(Date.now()).getFullYear();

const opciones = 
{ weekday: 'long', 
year: 'numeric', 
month: 'numeric', 
day: 'numeric' };

document.querySelector('#dateMod').textContent = 
new Date(Date.now()).toLocaleString();

const opciones2 = 
{ weekday: 'long', 
year: 'numeric', 
month: 'long', 
day: 'numeric' };


document.querySelector('#datetime').textContent = 
new Date(Date.now()).toLocaleString('en-US',opciones2);



function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle('open');
    document.getElementById('hamburguerBtn').classList.toggle('open');
}

const x = document.getElementById('hamburguerBtn');

x.onclick = toggleMenu;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '12f6046a72msh59ae55138319343p19cf09jsn97e6bcbec7ef',
		'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
	}
};

fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=sunnyvale&format=json&u=f', options)
	.then(response => response.json())
	.then(response => set_weather_data(response))
	.catch(err => console.error(err));

    function set_weather_data(response){
        const el_temperature = document.querySelector('#temperature');
        const el_description_temperature = document.querySelector('#description-temperature');
        const el_wind_speed = document.querySelector('#wind-speed');
    
        el_temperature.textContent = response.current_observation.condition.temperature + "°C";
        el_description_temperature.textContent = response.current_observation.condition.text;
        el_wind_speed.textContent = "Wind speed: " + response.current_observation.wind.speed + " km/h";
    
    }















