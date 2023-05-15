# KDT 5th 포스코x코딩온 웹 개발자 입문 수업에서 진행한 팀프로젝트 레포지토리입니다.

* 제주도 관광을 위한 사이트
* 완성된 페이지 링크 : https://letsgojeju.netlify.app/


------------

! 대략적인 페이지 규칙 입니다.

  index.html -> 메인 페이지
  main.js -> 메인 페이지와 연결된 JS 파일입니다
  style.css -> 메인 페이지와 연결된 css 파일로, 기본적인 css 규칙을 포함한 내용으로
             상세 디자인 요소는 style.scss 파일 안에 @import 해주세요.

--- 맡은 파트의 파일

touristAttraction : 이유림 님
food : 최인영 님
cafe : 김정혁 님
emergency : 구슬기 님

---
일단 제가 떠올릴 수 있는 규칙을 적은 것이라, 
가볍게 읽어주시고 추가할 사항이 있으면 상의할 수 있도록 알려주세요.

[ HTML 구조 규칙 ]
  - 일정 크기 이상 늘어날 때 기준이될 div.inner는 제외합니다.

[ css선택자 규칙 ]
  - 수업에서 배웠던대로 B.E.M 방식을 사용합니다.
  - Global 선택자를 새로 정정할 필요가 있다면 상의 후 추가해주세요.

[ 변수 규칙 ]
  - 영어 사전을 사용하여 의미 있는 변수명으로 해주세요. a, b 이렇게 절대!! 안됩니다.

[ 함수 규칙 ]
  - 함수를 작성할 때 함수 위에 아래의 사항을 포함한 주석을 달아주세요.
    1)함수의 쓰임새 2)매개변수의 쓰임새
    ex. 
      // 로그인 시 인사를 출력하는 함수
      // param1 : 유저 이름
      //param2 : 유저 성별
    let greeting = function(name, gender) { };
 
  - 호이스팅을 방지하기 위하여 함수는 꼭 위처럼 '함수 표현식'으로 작성해주세요. (함수 선언식은 호이스팅이 됩니다.)
  - 함수명은 영어사전에 검색을 하여 가급적 쓰임새를 알 수 있게, 카멜 방식으로 명명해주세요.
  좋은 함수명 명명법은 {명사+동사} 또는 {동사+명사} 형태입니다.
  ex. sendButtonClick() -> 전송 버튼을 클릭할 때 사용하는 함수라는 것을 유추 가능
