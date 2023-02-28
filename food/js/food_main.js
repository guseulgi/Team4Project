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

  let time = document.querySelector(".time");
  const click_li = document.querySelectorAll(".click_li");
  // function openClick(){
  //   time.style.display = "block"; // display 속성을 block 으로 바꾼다
  // }
  // click_li.addEventListener("click",function(e){
  //   let dv = e.currentTarget;


  // })

  let before;

  function toggleList(t) {
    const parent = t.parentNode;
    const childDiv = parent.querySelector("div");
    
    //다른 거 눌렀을 때 안보이게
    if (t != before) {
      for(let i = 0; i < click_li.length; i++) {
        click_li[i].parentNode.querySelector("div").style.display = "none"; 
      }
    }

    //열려있을 때 다시 누르면 닫힘
    if(childDiv.style.display === "block") {
      childDiv.style.display = "none";
    } else {
      childDiv.style.display = "block";
    }
    before = t;
  }



 
  