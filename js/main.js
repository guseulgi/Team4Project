// Main JS
// TypeIt API
window.onload = function() {
  new TypeIt('.title h3', {
    strings : ['HALO'],
    speed : 200,
    lifeLike: true,
    cursor: false,
  }).pause(100).move(-2).delete(1).type('EL').move(2).type(', JEJU').flush().go();


  new TypeIt('.title p', {
    startDelay : 4700,
    speed : 100,
    lifeLike: true,
    cursor: false,
    waitUntilVisible : true,
  }).type('Jeju Local & Seasonal Theme traval').delete(2).type('el Archive').go();
}


// Mouse Cursor
document.body.requestPointerLock();
const cursor = document.querySelector('.cursor');
// 커서를 지정한 아이콘으로 변경하는 함수
let cursorMove = function(e) {
  const cursorX = e.pageX;
  const cursorY = e.pageY;
  cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
}
window.addEventListener('mousemove', cursorMove);

// 마우스가 a태그에 올라가면 지정해준 커서를 안보이게 하고 싶음(아직 작동 안함)
// window.addEventListener('mouseenter', function(e) {
//   console.log(e.target.tagName);
//   if( e.target.getElementTagName('A') !== '')
//   {
//     cursor.style.display = none;
//   } else {
//     cursor.style.display = block;
//     }
// });

// Scroll Event
// Menu 가 일정 크기 이상 이동하면 메뉴바의 아이콘의 색이 변하는 함수
const changeColorYpx = 574;
const otherMenu = document.querySelectorAll('.other-menu ul li a');
const topBtnChangeYpx = 298;
const returnToTopA = document.querySelector('.returnToTop a');

let scrollPage = function() {
  let curScrollY = window.scrollY;

  if(curScrollY < topBtnChangeYpx) {
    if(returnToTopA.classList.contains('changeColor') === true) {
      returnToTopA.classList.remove('changeColor');
    }
  }
  if(curScrollY > topBtnChangeYpx) {
    if(returnToTopA.classList.contains('changeColor') === false) {
      returnToTopA.classList.add('changeColor');
    }
  }

  if(curScrollY < changeColorYpx) {
    otherMenu.forEach(value => {
      if(value.classList.contains('changeColor') === true) {
        value.classList.remove('changeColor');
      }
    });
  }

  if(curScrollY > changeColorYpx) {
    for(let i = 0; i < otherMenu.length; i++) {
      if(otherMenu[i].classList.contains('changeColor') === false) {
        otherMenu[i].classList.add('changeColor');
      }
    }
  }
}
window.addEventListener('scroll', scrollPage);

const navSection = document.querySelector('.nav');
const arrowButton = document.querySelector('.bottomButton a');
// 버튼 클릭 시 다음 섹션으로 스크롤을 이동하는 함수
let moveToNextSection = function() {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: navSection.offsetTop,
});
}
// arrowButton.addEventListener('click', moveToNextSection); a태그에 직접 넣어줌


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

// Return to Top
const returnToTop = document.querySelector('.returnToTop');
returnToTop.addEventListener('click', function() {
  window.scroll({
    behavior : 'smooth',
    left : 0,
    top : document.body.offsetTop,
  });
});