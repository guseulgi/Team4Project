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
  duration: 2000,
}
);

$(document).ready(function(){
  $('.box1').click(function(){
    var offset = $('#korea').offset(); //선택한 태그의 위치를 반환
              //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
        $('html').animate({scrollTop : offset.top}, 400);
  });

});
$(document).ready(function(){
  $('.box2').click(function(){
    var offset = $('#japan').offset(); //선택한 태그의 위치를 반환
              //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
        $('html').animate({scrollTop : offset.top}, 400);
  });

});
$(document).ready(function(){
  $('.box3').click(function(){
    var offset = $('#western').offset(); //선택한 태그의 위치를 반환
              //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.4초 동안 부드럽게 해당 위치로 이동함 
        $('html').animate({scrollTop : offset.top}, 400);
  });

});
/*review */
var mySwiper = new Swiper('.swiper-contaier', {
  direction: 'vertical',
  slidesPerView: 1,
  autoplay: true,
  loop: true,  //계속 반복 되게
});

/*menu*/
const korea_fl1 = document.querySelector('.food_list1 ');
const korea_km1 = document.querySelector('.menu1 ');
const korea_fl2 = document.querySelector('.food_list2');
const korea_km2 = document.querySelector('.menu2');

const korea_button1 = document.querySelector('.korea_text1 .korea_map');
const korea_map1 = document.querySelector('.third_page .korea_content .korea_text1 .frame');
const korea_button2 = document.querySelector('.korea_text2 .korea_map');
const korea_map2 = document.querySelector('.third_page .korea_content .korea_text2 .frame');


// console.log(kt1, fl1);

korea_fl1.addEventListener('click', changediv1);
korea_km1.addEventListener('click', changediv1);
function changediv1() {
  if (korea_km1.classList.contains('off') === true) {
    korea_km1.classList.remove('off');
    korea_fl1.classList.add('off');
    korea_button1.classList.add('off')
  } else {
    korea_km1.classList.add('off');
    korea_fl1.classList.remove('off');
    korea_button1.classList.remove('off')
  }
}
korea_fl2.addEventListener('click', changediv2);
korea_km2.addEventListener('click', changediv2);
function changediv2() {
  if (korea_km2.classList.contains('off') === true) {
    korea_km2.classList.remove('off');
    korea_fl2.classList.add('off');
    korea_button2.classList.add('off')
  } else {
    korea_km2.classList.add('off');
    korea_fl2.classList.remove('off');
    korea_button2.classList.remove('off')
  }
}
/*korea map */

function btn1() {
  if(korea_map1.classList.contains('off')===true){
  korea_map1.classList.remove('off');
} else {
  korea_map1.classList.add('off');
  }
}

function btn2() {
  if(korea_map2.classList.contains('off')===true){
  korea_map2.classList.remove('off');
} else {
  korea_map2.classList.add('off');
  }
}

/*japan */
const japan_fl1 = document.querySelector('.japan_content .japan_text1 .food_list1');
const japan_km1 = document.querySelector('.japan_content .japan_text1 .menu');
const japan_fl2 = document.querySelector('.japan_content .japan_text2 .food_list2');
const japan_km2 = document.querySelector('.japan_content .japan_text2 .menu');

const japan_button1 = document.querySelector('.japan_text1 .japan_btn');
const japan_map1 = document.querySelector('.japan_text1 .japan_btn .frame');
const japan_button2 = document.querySelector('.japan_text2 .japan_map');
const japan_map2 = document.querySelector('.japan_text2 .japan_map .frame');



japan_fl1.addEventListener('click', changediv3);
japan_km1.addEventListener('click', changediv3);

japan_fl2.addEventListener('click', changediv4);
japan_km2.addEventListener('click', changediv4);

function changediv3() {
  if (japan_km1.classList.contains('off') === true) {
    japan_km1.classList.remove('off');
    japan_fl1.classList.add('off');
    japan_button1.classList.add('off');
  } else {
    japan_km1.classList.add('off');
    japan_fl1.classList.remove('off');
    japan_button1.classList.remove('off');
  }
}

function changediv4(){
  if(japan_km2.classList.contains('off') === true) {
    japan_km2.classList.remove('off');
    japan_fl2.classList.add('off');
    japan_button2.classList.add('off');
  } else {
    japan_km2.classList.add('off');
    japan_fl2.classList.remove('off');
    japan_button2.classList.remove('off');
  }
}

function btn3(){
  if(japan_map1.classList.contains('off') === true){
    japan_map1.classList.remove('off');
  } else {
    japan_map1.classList.add('off');
  }
}
function btn4(){
  if(japan_map2.classList.contains('off') === true){
    japan_map2.classList.remove('off');
  } else {
    japan_map2.classList.add('off');
  }
}

/*westren*/
const westren_fl1 = document.querySelector('.fifth_page .westren_content .westren_text1 .food_list1');
const westren_km1 = document.querySelector('.fifth_page .westren_content .westren_text1 .menu');
const westren_fl2 = document.querySelector('.westren_content1 .westren_text2 .food_list2');
const westren_km2 = document.querySelector('.westren_content1 .westren_text2 .menu');

const westren_button1 = document.querySelector('.westren_text1 .westren_map');
const westren_map1 = document.querySelector('.westren_text1 .westren_map .frame');
const westren_button2 = document.querySelector('.westren_text2 .westren_map');
const westren_map2 = document.querySelector('.westren_text2 .westren_map .frame1');

westren_fl1.addEventListener('click', changediv5);
westren_km1.addEventListener('click',changediv5);

function changediv5(){
  if(westren_km1.classList.contains('off') === true) {
    westren_km1.classList.remove('off');
    westren_fl1.classList.add('off');
    westren_button1.classList.add('off');
  } else {
    westren_km1.classList.add('off');
    westren_fl1.classList.remove('off');
    westren_button1.classList.remove('off');
  }
}

westren_fl2.addEventListener('click', changediv6);
westren_km2.addEventListener('click', changediv6);

function changediv6() {
  if (westren_km2.classList.contains('off') === true) {
    westren_km2.classList.remove('off');
    westren_fl2.classList.add('off');
    westren_button2.classList.add('off');
  } else {
    westren_km2.classList.add('off');
    westren_fl2.classList.remove('off');
    westren_button2.classList.remove('off');
  }
}

function btn5(){
  console.log('d');
  if(westren_map1.classList.contains('off') === true){
    westren_map1.classList.remove('off');
  } else {
    westren_map1.classList.add('off');
  }
}
function btn6(){
  console.log('d');
  if(westren_map2.classList.contains('off') === true){
    westren_map2.classList.remove('off');
  } else {
    westren_map2.classList.add('off');
  }
}