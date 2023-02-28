// Main JS
// Weather API
const weatherIconRef = {
  '01' : 'fas fa-sun',
  '02' : 'fas fa-cloud-sun',
  '03' : 'fas fa-cloud',
  '04' : 'fas fa-cloud-meatball',
  '09' : 'fas fa-cloud-sun-rain',
  '10' : 'fas fa-cloud-showers-heavy',
  '11' : 'fas fa-poo-storm',
  '13' : 'far fa-snowflake',
  '50' : 'fas fa-smog'
}

const weatherEngToKR = {
  'Thunderstorm' : '낙뢰',
  'Drizzle' : '이슬비',
  'Rain' : '비',
  'Snow' : '눈',
  'Mist' : '옅은 안개',
  'Smoke' : '짙은 안개',
  'Haze' : '실안개',
  'Dust' : '황사',
  'Fog' : '안개',
  'Sand' : '짙은 황사',
  'Ash' : '재',
  'Squall' : '돌풍',
  'Tornado' : '회오리',
  'Clear' : '맑음',
  'Clouds' : '구름 많음',
}

const weather = document.querySelector('.weather');
const weatherIcon = weather.querySelector('.icon__weather');
const weatherUl = weather.querySelector('.weather > ul');

const API_KEY = 'bd8db1f879b1c4ae727fd2582620614c';
//제주도 경도/위도
const lat = 33.431441;
const lon = 126.874237;

const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
fetch(weatherUrl).then(response => response.json())
.then(data => {
  const newIcon = document.createElement('i');
  const newLi = document.createElement('li');

  const iconInfo = (data.weather[0].icon).substr(0,2);
  newIcon.classList.add(weatherIconRef[iconInfo].substr(0,2));
  newIcon.classList.add(weatherIconRef[iconInfo].substr(4));
  newLi.textContent = `${Math.round(data.main.temp)}℃  ${weatherEngToKR[data.weather[0].main]}`;

  weather.prepend(newIcon);
  weatherUl.appendChild(newLi);
}).catch(error => {
  console.log('Weather API Error : ',error);
});