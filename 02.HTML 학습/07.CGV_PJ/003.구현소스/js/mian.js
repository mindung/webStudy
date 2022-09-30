// CGV PJ 메인 페이지 JP - main.js

//////////////////////////////////////////////

// 예고편 선택메뉴 a요소 -> movlink 변수
var movlink = document.querySelectorAll(".mlist a");
console.log(movlink);
// HTML요소를 변수에 담으면 여러개의 요소일 경우
//  querySelectorAll()을 사용하여 html 컬렉션에 저장함
// 여러개의 내부 주소가 있고 번호로 되어있음.
// 0부터 시작함!
// 순번의 요소를 선택하는 방법?
// 컬렉션변수.item(순번) || 컬렉션변수[순번]

// a요소 개수
var len = movlink.length;

// for문을 이용하여 링크 설정하기.
for (var i = 0; i < len; i++) {
    // 순서대로 a요소에 click 이벤트 설정하기
    // 대상:movlink

    movlink.item(i).onclick = function () {chgMV(this)};
    /*
    onclick은 a요소의 이벤트 속성임
    이퀄 오른쪽에 할당되는데 직접 chgMb() 적으면 함수가 바로 실행됨.
    이벤트 발생시 호출하려면

    [익명함수] function() { 함수 }
    -- 실행되지 않고 함수를 가지고있는. 
    이벤트가 발생하면 {} 안에 있는 코드 실행
    이것은 마치 <a href="" onclick="chgMV()">와 같음 
    
    이벤트에 할당한 익명함수 안의 함수에 this를 보내면
    이벤트가 걸린 요소 자신이 함수에 전달된다.*/

} /////////////////// for 구문

/************************************
    함수명 : chgMV
    기능 : 영화 예고편 변경
************************************/
function chgMV(ele) { // ele - 전달되는 a요소

    // 전달되는 a요소의 "data-my" 속성값 읽오기

    var minfo = ele.getAttribute("data-mv");
    // getAttribute(속성명) -> 요소의 속성명 읽어오는 내장함수
    // setAttribute(속성명, 값) -> 요소값세팅 내장함수

    console.log(minfo);
    console.log("바꿔!");

    // 변경대상 : #screen ifram
    var tg = document.querySelector("#screen iframe");

    // 변경내용 : 대상요소의 src 속성 변경
    tg.src = `https://www.youtube.com/embed/${minfo}?autoplay=1`;
} ///////////////chgMV 함수



// [익명함수란?]
/*
코드를 실행하지 않고 저장하는 메모리 공간
단, 이름이 없음
즉, 주소지가 없음
왜? 호출하는 방법을 응용할 수 있도록 함

호출법 
1. 변수에 할당하는 방법 -> 변수명이 함수명
2. 이벤트와 연결하는 방법 -> 이벤트가 발생시 함수 실행

*/

console.log("난 바깥에 잇어!");

var myFn = function () {
    console.log("난 안에 잇어!");
}
// 익명함수 호출!
myFn();