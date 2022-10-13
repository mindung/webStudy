// 아이폰 회전 페이지 JS - iphone.js

////////////// 로드 구역 ////////////////////
window.addEventListener("DOMContentLoaded", () => {

    console.log("!");
    /************************************
        [ 아이폰 영역오버시 회전기능 ]
        1. 화면에 4등분된 투명 영역 구현
        2. 이 영역이 이벤트 대상이 됨
        3. 오버시 변경대상인 아이폰에 회전값 변경
        4. 트랜지션으로 애니메이션 설정적용!
        5. 애니메이션 후에 이벤트박스를 보이게함
        (최초 width : 0-> width : 100vw)
    ************************************/

    // 0. 애니메이션 후에 이벤트 박스 보이게 함!
    // 일정시간 후 실행함수 
    // setTimeout(함수, 시간)
    // 함수는 실행코드
    // 시간은 1/1000(단위안씀->1000은 1초)

    setTimeout(() => {
       document.querySelector(".evt").style.width = "100vw"; 
    }, 4000); /* 4초후 코드 실행함 */


    // 1. 대상선정
    // (1) 이벤트 대상 : .evt div - 여러개!
    const evt = document.querySelectorAll(".evt div");
    // (2) 변경대상
    const iphone = document.querySelector(".iphone");
    // console.log(iphone);

    // 2. 변경할 값 배열에 세팅
    const setdeg = [-60, -40, 40, 60];

    // 3. 이벤트대상에 이벤트 세팅
    evt.forEach((ele, idx) => {
        console.log(ele, " / ", idx);
        // 각 요소에 마우스오버세팅
        ele.onmouseover = () => {
            // console.log(setdeg[idx]);

            // 아이폰에 회전값 넣기
            iphone.style.transform = `rotateX(10deg) rotateY(${setdeg[idx]}deg)`;
            iphone.style.transition = ".5s ease-out";


        }; ////////// mouseover
    }); ////////////// forEach //////////////////

}); /////////// 로드 구역 ////////////////