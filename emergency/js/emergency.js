// AOS API
AOS.init();

// Emergency Situation Swiper
const emgSithationSwiper = new Swiper('.emgSituation .swiper-container', {
  direction : 'horizontal',
  slidesPerView : 2,
  spaceBetween : 30,
  centeredSlides : true,
  loop : true,
  autoplay : {
    delay: 9000,
    disableOnInteraction : false,
  },
  pagination : {
    el : '.emgSituation .swiper-pagination',
    clickable : true,
  },
  navigation : {
    prevEl : '.emgSituation .swiper-button-prev',
    nextEl : '.emgSituation .swiper-button-next',
  },
  observer: true,
  observeParents: true,
  parallax:true,
});

// 병원 정보를 담은 클래스
class hospitalObj {
  constructor(call, addr, link, lat, lng) {
    this.call = call;
    this.addr = addr;
    this.link = link;
    //경도 위도
    this.lat = lat;
    this.lng = lng;
  }
}

let jejuHospital = {
  '제주대학병원' : new hospitalObj('064-717-1900', '제주 제주시 아란13길 15', 'https://er.jejunuh.co.kr/index.do', 33.4672038, 126.545580),
  '제주한라병원' : new hospitalObj('064-740-5158', '제주 제주시 도령로 65', 'https://www.hallahosp.co.kr/main/', 33.4902082, 126.484783),
  '제주한국병원' : new hospitalObj('064-750-0119', '제주 제주시 서광로 193', 'http://www.hankookhospital.co.kr', 33.5003996, 126.516878),
  '한마음병원' : new hospitalObj('064-750-9119', '제주 제주시 연신로 52', '', 33.4966617, 126.546394),
  '서귀포 의료원' : new hospitalObj('064-730-3001', '제주 서귀포시 동홍동 1530', 'http://www.smed.or.kr', 33.2552223, 126.564423),
}
// 지도 핀
const mapPin = document.querySelector('.map__pin');

const pinJeju = mapPin.querySelector('.pin__jeju');
const pinHanla = mapPin.querySelector('.pin__hanla');
const pinHanguk = mapPin.querySelector('.pin__hanguk');
const pinHanmaeum = mapPin.querySelector('.pin__hanmaeum');
const pinSeoguipo = mapPin.querySelector('.pin__seoguipo');

// 창
const detailBrower = document.querySelector('.hospital-details');
const navBar = detailBrower.querySelector('.nav-bar');
const deleteBtn = navBar.querySelector('.nav-bar > li:first-child');

const detailTitle = detailBrower.querySelector('.detail-bar > .title');
const detailMap = detailBrower.querySelector('.datail-map');
const detailCall = detailBrower.querySelector('.detail-bar .callNumber');
const detailAddr = detailBrower.querySelector('.detail-bar .address');
const detailLink = detailBrower.querySelector('.detail-bar .link');

// 구글지도 API
const mapBox = document.getElementById('map');

// 맵에서 클릭한 내용을 클래스 객체에서 가져와서 동적으로 내용 변경
let mapPinClick = function(e) {
  const mapTarget = e.target;
  let targetObj;
  let targetName;

  const tmp = mapTarget.classList[0];
  switch(tmp) {
    case 'pin__jeju' :
      targetName = '제주대학병원';
      break;
    case 'pin__hanla' : 
      targetName = '제주한라병원';
      break;
    case 'pin__hanguk' :
      targetName = '제주한국병원';
      break;
    case 'pin__hanmaeum' :
      targetName = '한마음병원';
      break;
    case 'pin__seoguipo' :
      targetName = '서귀포 의료원';
      break;
  }
  targetObj = jejuHospital[targetName];

  detailTitle.textContent = `${targetName} 응급센터`;
  detailCall.textContent = targetObj['call'];
  detailCall.setAttribute('href', `tel:${targetObj['call']}`);
  detailAddr.textContent = targetObj['addr'];
  detailLink.setAttribute('href', `${targetObj['link']}`);

  // 구글지도 API
  new google.maps.Map(mapBox, {
    center: {
      lat: targetObj['lat'],
      lng: targetObj['lng'],
    },
    zoom: 16
  });
}

let closeClick = function() {
  if(detailBrower.classList.contains('d-On') === true) {
    detailBrower.classList.remove('d-On');
    detailBrower.classList.add('d-Off');
  } else {
    detailBrower.classList.add('d-On');
    detailBrower.classList.remove('d-Off');
  }
}

// 핀을 클릭하면 창을 띄우는 함수
let pinClick = function(e) {
  mapPinClick(e);
  closeClick();
}

pinJeju.addEventListener('click', pinClick);
pinHanla.addEventListener('click', pinClick);
pinHanguk.addEventListener('click', pinClick);
pinHanmaeum.addEventListener('click', pinClick);
pinSeoguipo.addEventListener('click', pinClick);

deleteBtn.addEventListener('click', closeClick);


// modalBtn
const modalBtn = navBar.querySelector('.modalBtn');
const detail = detailBrower.querySelector('.detail-bar');

const detailLi = detail.querySelectorAll('li');

// 창 모달 효과
let modalClick = function(e) {
  if(detail.classList.contains('height-100') === true) {
    detail.classList.remove('height-100');
    detail.classList.add('height-0');

    modalBtn.querySelector('i').style.transform = 'rotate(180deg)';

    console.log(detailLi);
    detailLi.forEach(value => {
      console.log(value);
      if(value.classList.contains('opacity-Off') === false) {
        value.classList.add('opacity-Off');
      }
      value.classList.remove('opacity-On');
    });
  } else {
    detail.classList.add('height-100');
    detail.classList.remove('height-0');

    //없으면 로테이트
    modalBtn.querySelector('i').style.transform = 'rotate(0deg)';

    detailLi.forEach(value => {
      if(value.classList.contains('opacity-On') === false) {
        value.classList.add('opacity-On');
      }
      value.classList.remove('opacity-Off');
    });
  }
}

modalBtn.addEventListener('click', modalClick);


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


// Scroll
const mapSection = document.querySelector('.map');
window.addEventListener('scroll', function() {
  // if(window.scrollY >= 366 && window.scrollY <= 420) {
  //   window.scroll({
  //     behavior : 'smooth',
  //     left : 0,
  //     top : mapSection.offsetTop,
  //   });
  // }
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