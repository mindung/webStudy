// CGV PJ 메인 페이지 JP - main.js

// 예고편 선택메뉴 a요소 -> movlink 변수
var movlink = document.querySelectorAll(".mlist a");
console.log(movlink);

// a요소 개수
var len = movlink.length;

// for문을 이용하여 링크 설정하기.
for(var i=0; i<len;i++){
    // 순서대로 a요소에 click 이벤트 설정하기
    // 대상:movlink

    movlink.item(i).onclick =function(){ chgMV()};
    /*
    onclick은 a요소의 이벤트 속성임
    이퀄 오른쪽에 할당되는데 직접 chgMb() 적으면 함수가 바로 실행됨.
    이벤트 발생시 호출하려면 

    [익명함수] function() { 함수 }
    -- 실행되지 않고 함수를 가지고있는. 
    이벤트가 발생하면 {} 안에 있는 코드 실행
    이것은 마치 <a href="" onclick="chgMV()">와 같음 */ 
} /////////////////// for 구문

/************************************
    함수명 : chgMV
    기능 : 영화 예고편 변경
************************************/ 
function chgMV(){
    console.log("바꿔!");

    // 변경대상 : #screen ifram
    var tg = document.querySelector("#screen iframe");

    // 변경내용 : 대상요소의 src 속성 변경
    tg.src = `https://www.youtube.com/embed/xNcJ0lIDPkE?autoplay=1&mute=1&loop=1&playlist=xNcJ0lIDPkE`;
} ///////////////chgMV 함수