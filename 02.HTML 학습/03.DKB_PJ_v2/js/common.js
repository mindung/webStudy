// 도깨비 PJ v2 -  공통 기능  JS - common.js

//////////////////////// 로드구역 ////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("로딩 완료");

    // 햄버거버튼 클릭시 .top에 .on 추가/제거하기
    // 대상 : .ham, .top

    const top = document.querySelector(".top");
    const ham = document.querySelector(".ham");
    
    ham.onclick = () => top.classList.toggle("on");
}); //////////////////////// 로드구역 ////////////////////////