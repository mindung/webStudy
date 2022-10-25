// 옷소매 갤러리 JS - main.js

/////////// 로드구역 ///////////
window.addEventListener("DOMContentLoaded", () => {
    // 기능구현내용:
    // 버튼클릭시 갤러리 div박스 잘라서 순서이동하기

    //  왼쪽버튼 클릭시 -> 맨 뒤 요소 맨앞으로 이동
    //  ->insertBefore(넣을놈, 놓을놈 전놈)

    // 오른쪽버튼 클릭시 -> 맨 앞 요소 맨뒤로 이동
    // -> appendChild(요소)

    // 변경대상 : .gbx
    const gbx = document.querySelector(".gbx");
    // 이벤트 대상: .abtn
    const abtn = document.querySelectorAll(".abtn");
    
    // 0번째는 왼쪽, 1번째는 오른쪽
    abtn[0].onclick = () => {
        // 인터발 지움 함수 호출
        clearAuto();
        // 슬라이드 이동함수 호출
        goSlide(0);
    };
    abtn[1].onclick = () => {
        // 인터발 지움 함수 호출
        clearAuto();
        // 슬라이드 이동함수 호출
        goSlide(1);
    };

    // 광클금지 상태변수
    let prot = 0; // 0: 허용, 1-불허용

    /***************************************
        함수명: goSlide
        기능: 내부 박스요소 앞뒤로 변경
    ***************************************/

    function goSlide(dir) {
        // 0: 왼, 1: 오

        // 0. 광클금지 ///////
        if (prot) return; ///// prot===1이면 돌아가기!
        prot = 1;
        setTimeout(() => {
            prot = 0;
        }, 400);
        // 1. 전달값 및 호출확인
        console.log(dir);

        // 2. 이동할 직계자식 div 담기
        // 주의: 이동할 때마다 구해와야 최신순서 담는다.
        let tg = gbx.querySelectorAll("div");
        console.log(tg);

        // 3. 분기하기

        if (dir) {
            // dir 1인경우
            // 맨 앞요소 맨뒤로 이동
            gbx.appendChild(tg[0]);
        } else {
            gbx.insertBefore(tg[tg.length - 1], tg[0]);
        }
    } //////////////goSlide 함수 //////////////////

    /***************************************************
        자동 넘기기 기능 구현
    ***************************************************/ 
   
    // 인터발용 변수
    let autoI;
    // 자동 넘기기
    // 인터발함수를 지우려면 변수에 넣고
    // clearInterval(변수) 해야함
    function slideAuto() {
        autoI = setInterval(() => {
            goSlide(1);
        }, 2000);
    } /////////// 슬라이드 Auto함수

    // 인터발함수 최초 호출
    slideAuto();

    // 타임아웃용 변수
    let autoT;
    // 인터발 지우기함수
    function clearAuto() {
        clearInterval(autoI);
        // 1. 인터발 지우기
        console.log("지워주세요!");
        // 2. 타임아웃 지우기(실행쓰나미 방지)
        clearTimeout(autoT)
        // 2. 일정시간 후 인터발 호출!
        autoT = setTimeout(slideAuto(), 4000);
    } ////// clearAuto 함수 ///////
}); /////////////////// 로드구역 ///////////////////
