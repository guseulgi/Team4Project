// Weather API
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


// SWIPER
const swiper = new Swiper('.swiper', {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 1500,
    disabledinInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    prevEl: ".swiper .swiper-button-prev",
    nextEl: ".swiper .swiper-button-next",
  },
});

// AutoPlay 컨트롤
function controlAutoPlay() {
  if (swiper.autoplay.running === false) {
    swiper.autoplay.start();
  } else {
    swiper.autoplay.stop();
  }
}

const park981 = document.querySelector('.park981');
const runfarm = document.querySelector('.letsrunfarm');
const kitesurfing = document.querySelector('.kitesurfing');
const blueone = document.querySelector('.blueone');
const bouncesuper = document.querySelector('.bouncesuper');

const park981Height = 1066;
const runfarmHeight = 2958;
const kitesurfHeight = 5172;
const blueHeight = 7418;
const bounceHeight = 9739;

const firstarrow = document.querySelector('.firstarrow')
const secondarrow = document.querySelector('.secondarrow')
const thirdarrow = document.querySelector('.thirdarrow')
const fourtharrow = document.querySelector('.fourtharrow')
const fiftharrow = document.querySelector('.fiftharrow')


// 제목 클릭해서 스크롤 이동

const firstmainbtn = document.querySelector('.firstmainbtn')
const secondmainbtn = document.querySelector('.secondmainbtn')
const thirdmainbtn = document.querySelector('.thirdmainbtn')
const fourthmainbtn = document.querySelector('.fourthmainbtn')
const fifthmainbtn = document.querySelector('.fifthmainbtn')


let firstmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: park981Height,
    left: 0
  })
}

let secondmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: runfarmHeight,
    left: 0
  })
}

let thirdmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: kitesurfHeight,
    left: 0
  })
}

let fourthmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: blueHeight,
    left: 0
  })
}

let fifthmainClick = function () {
  window.scroll({
    behavior: "smooth",
    top: bounceHeight,
    left: 0
  })
}

firstmainbtn.addEventListener("click", firstmainClick)
secondmainbtn.addEventListener("click", secondmainClick)
thirdmainbtn.addEventListener("click", thirdmainClick)
fourthmainbtn.addEventListener("click", fourthmainClick)
fifthmainbtn.addEventListener("click", fifthmainClick)


// ARROW 클릭해서 스크롤 페이지 이동

let firstarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: park981Height,
    left: 0
  })
}

let secondarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: runfarmHeight,
    left: 0
  })
}

let thirdarrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: kitesurfHeight,
    left: 0
  })
}

let fourtharrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: blueHeight,
    left: 0
  })
}

let fiftharrowClick = function () {
  window.scroll({
    behavior: "smooth",
    top: bounceHeight,
    left: 0
  })
}

firstarrow.addEventListener("click", firstarrowClick)
secondarrow.addEventListener("click", secondarrowClick)
thirdarrow.addEventListener("click", thirdarrowClick)
fourtharrow.addEventListener("click", fourtharrowClick)
fiftharrow.addEventListener("click", fiftharrowClick)





