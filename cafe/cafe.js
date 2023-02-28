const API_KEY = "a3053f59b53405726caa0ab146d55633"; //add your API KEY

//DOM객체들
const weatherInfo = document.querySelector(".weatherInfo");
const weatherIconImg = document.querySelector(".weatherIcon");

getWeather(); //얻은 좌표값을 바탕으로 날씨정보를 불러온다.

//좌표를 얻는데 실패했을 때 쓰이는 함수
function handleError() {
  console.log("can't not access to location");
}

//날씨 api를 통해 날씨에 관련된 정보들을 받아온다.
function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=jeju&appid=a3053f59b53405726caa0ab146d55633&units=metric&lang=kr`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      //온도, 위치, 날씨묘사, 날씨아이콘을 받는다.
      const temperature = json.main.temp;
      const place = json.name;
      const weatherDescription = json.weather[0].description;
      const weatherIcon = json.weather[0].icon;
      const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

      //받아온 정보들을 표현한다.
      weatherInfo.innerText = `${temperature} °C / ${place} / ${weatherDescription}`;
      weatherIconImg.setAttribute("src", weatherIconAdrs);
    })
    .catch((error) => console.log("error:", error));
}

let swiper = new Swiper(".mySwiper", {
  grabCursor: true,
  centeredSlides: true,
  // spaceBetween: 30,
  slidesPerView: "auto",
  loop: true,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  slidesPerView: 1,
});

let slides = document.querySelectorAll(".swiper-slide");
for (let i of slides) {
  i.addEventListener("mouseover", function () {
    swiper.autoplay.stop();
  });
  i.addEventListener("mouseout", function () {
    swiper.autoplay.start();
  });
}
