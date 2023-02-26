var mySwiper = new Swiper('.swiper-container', {
  // 슬라이드 버튼 작동
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // 페이징 설정
    pagination : { 
      el : '.swiper-pagination',
    },
    loop : true,  //계속 반복 되게
    slidesPerView: 3,  //한페이지에 보여줄 이미지의 개수
    spaceBetween: 30,  //페이지와 페이지 사이의 간격
  });