const weatherIconRef = {
  '01': 'fas fa-sun',
  '02': 'fas fa-cloud-sun',
  '03': 'fas fa-cloud',
  '04': 'fas fa-cloud-meatball',
  '09': 'fas fa-cloud-sun-rain',
  '10': 'fas fa-cloud-showers-heavy',
  '11': 'fas fa-poo-storm',
  '13': 'far fa-snowflake',
  '50': 'fas fa-smog'
}

const weatherEngToKR = {
  'Thunderstorm': '낙뢰',
  'Drizzle': '이슬비',
  'Rain': '비',
  'Snow': '눈',
  'Mist': '옅은 안개',
  'Smoke': '짙은 안개',
  'Haze': '실안개',
  'Dust': '황사',
  'Fog': '안개',
  'Sand': '짙은 황사',
  'Ash': '재',
  'Squall': '돌풍',
  'Tornado': '회오리',
  'Clear': '맑음',
  'Clouds': '구름 많음',
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

    const iconInfo = (data.weather[0].icon).substr(0, 2);
    newIcon.classList.add(weatherIconRef[iconInfo].substr(0, 2));
    newIcon.classList.add(weatherIconRef[iconInfo].substr(4));
    newLi.textContent = `${Math.round(data.main.temp)}℃  ${weatherEngToKR[data.weather[0].main]}`;

    weather.prepend(newIcon);
    weatherUl.appendChild(newLi);
  }).catch(error => {
    console.log('Weather API Error : ', error);
  });


AOS.init({
  duration: 1500,
}
);

/*review */
var mySwiper = new Swiper('.swiper-contaier', {
  direction: 'vertical',
  slidesPerView: 1,
  autoplay: true,
  loop: true,  //계속 반복 되게
});

/*menu*/
const korea_fl1 = document.querySelector('.food_list1');
const korea_km1 = document.querySelector('.korea_menu1');
const korea_fl2 = document.querySelector('.food_list2');
const korea_km2 = document.querySelector('.korea_menu2');

// console.log(kt1, fl1);

korea_fl1.addEventListener('click', changediv1);
korea_km1.addEventListener('click', changediv1);
function changediv1() {
  if (korea_km1.classList.contains('off') === true) {
    korea_km1.classList.remove('off');
    korea_fl1.classList.add('off');
  } else {
    korea_km1.classList.add('off');
    korea_fl1.classList.remove('off');
  }
}
korea_fl2.addEventListener('click', changediv2);
korea_km2.addEventListener('click', changediv2);
function changediv2() {
  if (korea_km2.classList.contains('off') === true) {
    korea_km2.classList.remove('off');
    korea_fl2.classList.add('off');
  } else {
    korea_km2.classList.add('off');
    korea_fl2.classList.remove('off');
  }
}
/*japan */
const japan_fl1 = document.querySelector('.japan_content .japan_text1 .food_list1');
const japan_km1 = document.querySelector('.japan_content .japan_text1 .menu');

japan_fl1.addEventListener('click', changediv3);
japan_km1.addEventListener('click', changediv3);

function changediv3() {
  if (japan_km1.classList.contains('off') === true) {
    japan_km1.classList.remove('off');
    japan_fl1.classList.add('off');
  } else {
    japan_km1.classList.add('off');
    japan_fl1.classList.remove('off');
  }
}